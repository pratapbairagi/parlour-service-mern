
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
import {globErrMiddleware} from "./middlewares/globalErrorHandlerMiddleware.js";
import path from "path";


const PORT = 1994;
const mongoDB_url = process.env.MONGODB_URL
const app = express();


// .env config set
// dotenv.config({path : "beauty_parlour_server/config/.env"})
// dotenv.config()


app.use( cors( 
    {
        origin : "https://my-parlour-service.vercel.app",
        credentials : true
    }
 ) );

app.use(express.json({extended: true, limit:"25mb"}));
app.use(bodyParser());
app.use(express.urlencoded({extended: true, limit:"25mb"}));
app.use(cookieParser())
app.use(fileupload())


app.use("/api/v1/service", serviceRouter);
app.use("/api/v1/user", userRouter);


// app.use("*", (req, res, next)=>{
//     throw new Error("The URl you have rquested not found !", 404);
// })

app.use(express.static(path.join(__dirname,"../parlour/build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"../parlour/build/index.html"))
})

// middleware for global error
app.use(globErrMiddleware)

// app.use(globalErrorHandler)

dbConnection('mongodb+srv://parlour:parlour@cluster0.5qgqh.mongodb.net/service?retryWrites=true&w=majority')





app.listen(PORT, ()=>{
    console.log(`server workint at port http://localhost:${PORT}`)
})