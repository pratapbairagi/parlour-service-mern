
import mongoose from "mongoose";

const dbConnection = async (url) => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(res=>{
            console.log("db connected successdully !");
        }).catch(err=>{
            // throw new Error(err)
            console.log("db error",err);
        })
    } catch (error) {
        // throw new Error(error)
        console.log("db function error", error)
    }
}

export default dbConnection;