import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import BookingForm from "../../components/bookingForm/BookingForm";
import Button from "../../components/ui/button";
import sectionDatas from "../../data/sectionData.json"
import Testimonial from "../textimonial/testimonial";
import "./details_view_card.css";

const DetailsView = () => {
    const { id } = useParams();
    const [toggleForm, setToggleForm] = useState("none")
    const [service, setService] = useState(null);

    useEffect(()=>{
        fetchService();
    },[id])

    const fetchService = async () => {
        try {
            axios.get(`https://parlour-service-server.vercel.app/${id}`).then(res=>{
                console.log(res.data)
                setService(res.data.service);
            })
        } catch (error) {
            console.log(error)
        }
    }


    const bookDetailsFunction = () => {
        toggleForm == "none" ? setToggleForm("flex") : setToggleForm("none")
    }

    return (
        <div className="container-fluid faceSection_container mt-lg-5">

            {service != null ? <div className="row">
                <div className={`card_image_col col col-12 col-md-10 col-lg-6 col-xl-5 p-2 order-1 order-md-1 order-lg-1 order-xl-1 my-2 mb-4 m-lg-0 m-xl-0`} >
                    <span >{service.title}</span>
                    <img src={service.images.url} alt={service.images.public_id} />
                </div>

                <div className={`card_detail_col col col-12 col-md-10 col-lg-6 col-xl-5 order-2 order-md-2 order-lg-2 order-xl-2 d-flex`}>
                    <div className="card_container">
                        
                        <h4>
                            <span style={{fontSize:"90%"}}>{service.title}</span>
                            <Button text={"Book Now"} functions={bookDetailsFunction} type={"button"} css={{float: "right", background: "rgb(215, 4, 115)", color: "white", letterSpacing: "1px", fontWeight: "600",whiteSpace:"nowrap", height:"max-content"}}/>
                        </h4>

                        <h6>Description</h6>
                        <ol type="1" className="ingredients" >
                            <li>{service.description}</li>
                        </ol>

                        <h6>Use</h6>
                        <ol type="1">
                            <li>{service.use}</li> 
                        </ol>

                        <div className="facialExtraDetails_container">
                            <span>{service.process_time}mins</span>
                            {/* <span>Charge Rs. {(service.charge.normal + service.charge.home_Service)}/-</span> */}
                        </div>

                    </div>
                </div>
            </div> :
                <h2>No Data Found !</h2>
            }
            {/* <div className="container-fluid review_container">
                <h5 className="mt-2">Reviews</h5>
                { selected != null && <Testimonial data={selected}/> }
            </div> */}
            <BookingForm toggleForm={toggleForm} bookingData={service} setToggleForm={setToggleForm}/>

        </div>
    )
}

export default DetailsView