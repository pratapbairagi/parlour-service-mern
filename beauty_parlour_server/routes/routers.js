
import express from "express";
import { addService, deleteService, editService, getAllServices, getSingleService   } from "../controllers/service.js";


const serviceRouter = express.Router()

serviceRouter.route("/admin").get(getAllServices);

serviceRouter.route("/admin/add").post(addService);

serviceRouter.route("/:id").get(getSingleService);

serviceRouter.route("/admin/edit").put(editService);

serviceRouter.route("/admin/:id").delete(deleteService);



export default serviceRouter
