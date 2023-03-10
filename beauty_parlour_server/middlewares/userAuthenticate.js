import { asyncCatch } from "../utils/asyncCatch.js";
import jwToken from "jsonwebtoken"
import User from "../model/userSchema.js";
import AppError from "../utils/errorHandler.js";

const UserAuth = async (req, res, next) => {

    try {
        
    
    const {jwt} = await req.cookies;

    const {id} = jwToken.verify(jwt, "cke73trdU&T t^R76R%e6e65R7 8y9 rTe6  kUYE$y55e47");

    const user = await User.findById(id);

    if(!user){

        return next( new AppError("You need to login !", 401))
    }
    req.user = await user
    next()

} catch (error) {
        res.json(error)
}
}

export default UserAuth