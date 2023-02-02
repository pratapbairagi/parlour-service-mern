
import express from "express";
import { addService, deleteService, editService, getAllServices, getSingleService   } from "../controllers/service.js";


const serviceRouter = express.Router()

serviceRouter.route("/admin/services").get(getAllServices);

serviceRouter.route("/admin/service/add").post(addService);

serviceRouter.route("/:id").get(getSingleService);

serviceRouter.route("/admin/service/edit").put(editService);

serviceRouter.route("/admin/service/:id").delete(deleteService);



export default serviceRouter
