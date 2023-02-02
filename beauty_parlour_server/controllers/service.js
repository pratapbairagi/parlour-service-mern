import cloudinary from "../config/cloudinaryConfig.js";
import Service from "../model/schema.js"
import { asyncCatch } from "../utils/asyncCatch.js";
import AppError from "../utils/errorHandler.js";


export const getAllServices = asyncCatch ( async (req, res, next) => {
    
        const services = await Service.find();
        res.status(200).json({
            success : true,
            message : "fetched all services successfully !",
            services
        })
   
})

export const addService = asyncCatch(async (req, res, next) => {

    if (!req.body.title && !req.body.category && !req.body.description && !req.body.images && !req.body.price && !req.body.use) {
        return next(new AppError("All fields are required", 400))
    }
    const isServiceExist = await Service.findOne({ title: req.body.title });
    if (!isServiceExist) {
        const result = await cloudinary.uploader.upload(req.body.images, {
            folder: "users"
        })
        if (!result && !result.public_id) {
            return next(new AppError("something went wrong while uploading image, try again !", 400))
        }
        let service = {
            ...req.body,
            images: {
                public_id: result.public_id,
                url: result.secure_url
            },
            created_at: Date.now()
        }

        service = await Service.create(service);

        res.status(201).json({
            success: true,
            message: "Service created succesfully !",
            service
        });
    }
    else {
        return next(new AppError(`service with this title : ${req.body.title} already exist !`, 400))
    }
})

export const getSingleService = asyncCatch(async (req, res, next) => {
    const { id } = req.params;

    const isServiceExist = await Service.findById(id);

    if (isServiceExist) {
        res.status(200).json({
            success : true,
            message : "Fetched sevice successfully !",
            service : isServiceExist
        });
    }
    else {
        throw new Error("Service not found !", 404)
    }

})

export const editService = async (req, res, next) => {
    try {
        const isServiceExist = await Service.findById(req.body._id);

        if (isServiceExist) {

            if (req.body.images.url !== isServiceExist.images.url) {

                await cloudinary.uploader.destroy(isServiceExist.images.public_id);

                let result = await cloudinary.uploader.upload(req.body.images.url, {
                    folder: "service"
                });

                let editedService = await Service.findByIdAndUpdate(req.body._id,
                    {
                        ...req.body,
                        images: {
                            public_id: result.public_id,
                            url: result.secure_url
                        }
                    });

                res.status(200).json({
                    success: true,
                    message: "Service updated successfully !",
                    service : editedService
                });
            } else {
                let editedService = await Service.findByIdAndUpdate(req.body._id, req.body);

                res.status(200).json({
                    success: true,
                    message: "Service updated successfully !",
                    service : editedService
                });
            }
        }
        else {
            throw new Error("Service not found !", 404)
        }


    } catch (error) {
        throw new Error(error)
    }
}

export const deleteService = async (req, res, next) => {
    try {
        const isServiceExist = await Service.findById(req.params.id);

        if (isServiceExist) {
            await cloudinary.uploader.destroy(isServiceExist.images.public_id);
            await Service.findByIdAndDelete(req.params.id);
            const services = await Service.find();
            res.status(200).json(services);
        }
        else {
            throw new Error("The service you are trying to delete is not found !", 404)
        }
    } catch (error) {
        console.log("error",error)
    }
}