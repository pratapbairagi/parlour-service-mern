
import bodyParser from "body-parser";
import express from "express";
import dbConnection from "./connection/db.js";
// import router from "./routes/routers.js";
import cors from "cors";
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRoute.js";
import AppError from "./utils/errorHandler.js";
import fileupload from "express-fileupload";
import dotenv from "dotenv";
import serviceRouter from "./routes/routers.js";
import UserAuth from "./middlewares/userAuthenticate.js";

const PORT = 4444;
const mongoDB_url = process.env.MONGODB_URL
const app = express();


// .env config set
// dotenv.config({path : "beauty_parlour_server/config/.env"})
// dotenv.config()


app.use( 
    cors( 
    // { 
    // origin : [
    //     "http://localhost:3000",
    //     "https://my-parlour-service.vercel.app"
    // ]
    // , 
    // credentials : true
    // }
 ) );

app.use(express.json({extended: true, limit:"25mb"}));
app.use(express.urlencoded({extended: true, limit:"25mb"}));
// app.use(bodyParser.urlencoded({extended:true, limit:"35mb"}));
// app.use(bodyParser.json({ extended: true, limit : "25mb"}));
// app.use(bodyParser.urlencoded({extended: true, limit: "25mb"}))
app.use(cookieParser())
app.use(fileupload())

app.use("/", serviceRouter);
app.use("/", userRouter);


// app.use("*", (req, res, next)=>{
//     throw new Error("The URl you have rquested not found !", 404);
// })

// middleware for global error
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server Error"

    res.status(err.statusCode).json({
        success: false,
        message : err.message,
        stack : err.stack
    })
})

// app.use(globalErrorHandler)

dbConnection('mongodb+srv://parlour:parlour@cluster0.5qgqh.mongodb.net/service?retryWrites=true&w=majority')





app.listen(PORT, ()=>{
    console.log(`server workint at port http://localhost:${PORT}`)
})