
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        require : [true, "Tittle is required !"]
    },
    category: {
        type: String,
        require : [true, "category is required !"]

    },
    description: {
        type: String,
        require : [true, "Description is required !"]

    },
    use:{
        type : String,
        require : [true, "Use field is required !"]

    },
    price: {
        type: Number,
        require : [true, "Price filed is required !"]

    },
    process_time: {
        type: Number,
        default: 60
    },
    images: {
        public_id : {
            type : String,
            require :[ true, "Image is required !"]
        },
        url : {
            type : String,
            require :[ true, "Image is required !"]
        }
    },
    reviews: [
        {
            rating: {
                type: Number,
                default: 0
            },
            review: {
                type: String
            },
            user: {
                type: String
            }

        }
    ],
    ratings : {
        type: Number,
        default : 0
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    created_by : {
        type : String
    }
});

const Service = new mongoose.model("service", schema);

export default Service;