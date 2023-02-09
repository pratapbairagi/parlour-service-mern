
import express from "express";
import { deleteUser, getUser, getUsers, login, logoutUser, register, userLogged, userUpdate } from "../controllers/user.js";
import UserAuth from "../middlewares/userAuthenticate.js";

const userRouter = express.Router()

userRouter.route("/:id").get(UserAuth, getUser);

userRouter.route("/admin/users").get(getUsers);

userRouter.route("/register").post(register);
userRouter.route("/logged/in").get(UserAuth, userLogged);
userRouter.route("/logout/account").get(logoutUser);
userRouter.route("/delete/:id").delete(deleteUser)

userRouter.route("/update").put(UserAuth, userUpdate)

userRouter.route("/login").post(login);
// userRouter.route("/user/login/me").post(login, async (req,res, next)=>{
//     try {
//         res.cookie("jwt2", "tokenxxxx", {
//             httpOnly : true,
//             secure : true,
//             expires : new Date(Date.now() + (24 * 60 * 60 * 1000)),
//             maxAge : "",
//             path : "/",
//             domain : "",
//             sameSite : "none",
            
//         })
//     } catch (error) {
        
//     }
// })




export default userRouter