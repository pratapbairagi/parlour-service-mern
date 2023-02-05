// import cloud from "../config/cloudinaryConfig.js";
import cloudinary from "../config/cloudinaryConfig.js";
// import { v2 as cloudinary } from "cloudinary"
import User from "../model/userSchema.js"
import { asyncCatch } from "../utils/asyncCatch.js";
import AppError from "../utils/errorHandler.js";




export const register = asyncCatch( async (req, res, next) => {

    const {name, email, phone, password, confirmPassword, age, tnc, image} = req.body
    const isEmailExist = await User.findOne({ email: email });

    if (!isEmailExist) {
        let cloudImage = {
            public_id: "",
            url: ""
        }
       
        if( image){
        const cloud = await cloudinary.uploader.upload(image,{
            folder:"parlour"
        })

        cloudImage = {
            public_id: cloud.public_id,
            url: cloud.secure_url
        }

        const user = await User.create({
            name,
            email,
            phone,
            password,
            age,
            tnc,
             image: cloudImage 
            });

        // generate cookie to authenticate user
        const token = await user.generateToken();

        const cookieOption = {
            httpOnly : true,
            expires : new Date(Date.now() + (24 * 60 * 60 * 1000)),
            secure : true,
            sameSite : "none"
        }
        
       return res.status(201).cookie("jwt", token, cookieOption).json({
            success: true,
            message: `${user.name} sign up successful !`,
            user
        });
    }
    }
    else {
        return next( new AppError("email already exist !", 400))
    }

})

// login

export const login = asyncCatch ( async (req, res, next) => {
    const {email, password} = req.body;

    const isUserExistWithEmail = await User.findOne({email: email});

    if(isUserExistWithEmail){
        const isPasswordMatch = await isUserExistWithEmail.comparePassword(password)

        if( !isPasswordMatch){
            return next( new AppError("Invalid email or password !", 401))
        }

        let token = await isUserExistWithEmail.generateToken()

        let options = {
            httpOnly : true,
            expires : new Date(Date.now() + (24 * 60 * 60 * 1000)),
            secure : true,
            sameSite : "none"
        }

       return res.status(200).cookie("jwt", token, options).json({
            success: true,
            message : "login successful",
            user : isUserExistWithEmail
        })

    }
    else{
        return next( new AppError("Invalid email or password !", 401))
    }
})

// get users
export const getUsers = asyncCatch (async (req, res, next) => {

    console.log("all users control")

    const users = await User.find();
    res.status(200).json({
        success: true,
        message: "Got users list successfully !",
        users
    })
})

// get user
export const getUser = asyncCatch(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (user) {
        res.status(200).json({
            success: true,
            message: "Got user details successful !",
            user
        })
    }
    else {
        console.log("user does not exist")
    }
})

// user logged
export const userLogged = asyncCatch( async (req, res, next)=> {

    const id = req.user._id
    const user = await User.findById(id);

    if(!user){
        next(new AppError("Login required !", 400))
    }

    res.status(200).json({
        success : true,
        message: "user logged succesful",
        user
    })

})

// logout user
export const logoutUser = asyncCatch ( async (req, res, next) => {

    // const id = req.user;

    // const user = await User.findById(id);

    // if(!user){
    //     return next( new AppError("Need to login !", 401))
    // }

//    const logoutToken = await res.clearCookie("jwt");

//    const opt = {
//     httpOnly : true,
//     expires : Date.now(),
//     secure : true, 
//     path : "/"
//    }

//    await res.cookie("jwt", null, opt);

    await res.clearCookie("jwt")

    return res.status(200).json({
        success : true,
        message : "Log out successfully !"
    })
})

// delete user
export const deleteUser = asyncCatch ( async ( req, res, next ) => {
    const {id} = req.params

    const user = await User.findById(id);

    if( !user){
        return next( new AppError("User not found or does not exist !", 404))
    }

    await cloudinary.uploader.destroy(user.image.public_id);

    await User.findByIdAndDelete(id);

    return res.status(200).json({
        success : true,
        message : "user deleted successfully !"
    })
})

// user update
export const userUpdate = asyncCatch ( async ( req, res, next) => {
    const isUserExist = await User.findById(req.body._id);

    if( !isUserExist){
        return next( new AppError("user not found you need to login first !", 404))
    }
    let image = {
        public_id:"",
        url:""
    }

    if(req.body.image.url !== isUserExist.image.url){

        await cloudinary.uploader.destroy(isUserExist.image.public_id);

        const result = await cloudinary.uploader.upload(req.body.image.url, {
            folder : "parlour"
        });

        image = {
            public_id : result.public_id,
            url : result.secure_url
        }

        const user = await User.findByIdAndUpdate({...req.body, image : image})

        return res.status(200).json({
            success : true,
            message : "Profile updated successfully !",
            user 
        })
    }
    else{
        const user = await User.findByIdAndUpdate(req.body._id,req.body)

        return res.status(200).json({
            success : true,
            message : "Profile updated successfully !",
            user 
        })
    }
})
