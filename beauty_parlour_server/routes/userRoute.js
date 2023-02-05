
import express from "express";
import { deleteUser, getUser, getUsers, login, logoutUser, register, userLogged, userUpdate } from "../controllers/user.js";
import UserAuth from "../middlewares/userAuthenticate.js";

const userRouter = express.Router()

userRouter.route("/user/:id").get(UserAuth, getUser);

userRouter.route("/admin/users").get(getUsers);

userRouter.route("/user/register/me").post(register);
userRouter.route("/logged/check").get(UserAuth, userLogged);
userRouter.route("/user/logout/me").get(logoutUser);
userRouter.route("/admin/user/delete/:id").delete(deleteUser)

userRouter.route("/user/update").put(UserAuth, userUpdate)

userRouter.route("/user/login/me").post(login);
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