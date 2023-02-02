import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        require : [true, "Name is required !"]
    },
    email:{
        type : String,
        require : [true, "Name is required !"]
    },
    age:{
        type : String,
        require: [true, "Age field is required !"]
    },
    phone:{
        type : Number,
        require : [true, "Name is required !"]
    },
    image:{
        public_id:{
            type : String
        },
        url:{
            type: String
        }
    },
    password:{
        type: String,
        require:[true, "Password is required !"]
    },
    orders:[
        {
            type: String
        }
    ],
    registredAt : {
        type: Date,
        default : Date.now()
    },
    tnc:{
        type : String
    }

});

// password hasing using bcrypt pack
userSchema.pre("save", async function(next){

    if( !this.isModified("password")){
        return next()
    }
    
    this.password = await bcrypt.hash(this.password, 10)
})

    // generating token 
    userSchema.methods.generateToken = async function(){
        const token = jwt.sign({id: this._id}, "cke73trdU&T t^R76R%e6e65R7 8y9 rTe6  kUYE$y55e47" , {expiresIn: "1d"});
        return token
    }

    // comparePassword
    userSchema.methods.comparePassword = async function(oldPassword){
        
    let isMatch = await bcrypt.compare(oldPassword, this.password)

    return isMatch
    }

const User = new mongoose.model("User", userSchema);

export default User;