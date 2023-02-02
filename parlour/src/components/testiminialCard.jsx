import { useEffect,useState } from "react";
import {StarFill} from "react-bootstrap-icons"


const TestiminialCard = ({data}) => {
    let [stars, setStars] = useState([])

    useEffect(()=>{
        if(data != undefined){
            data.rating > 0 && data.rating < 2 ? setStars([1]) :
            data.rating > 1 && data.rating < 3 ? setStars([1,2]) :
            data.rating > 2 && data.rating < 4 ? setStars([1,2,3]) :
            data.rating > 3 && data.rating < 5 ? setStars([1,2,3,4]) :
            data.rating > 4 ? setStars([1,2,3,4,5]) : setStars([])
        }
    },[data])

    return (
            <div className="col col-11 col-md-8 col-lg-6 col-xl-4" style={{display:"flex", alignItems:"end"}}>
                
                <img src="/images/review-girl1.jpg" className="review-person-image" alt="" />

                <div className="testimonial-card">

                    <div className="review-person-details">
                        <h5 className="name">
                            <p>Mrs.</p>
                            <p>{data.user}</p>
                        </h5>
                        <h6 className="reviewer">Customer</h6>

                        <div className="stars" style={{width:"max-content"}}>
                            {stars.length > 0 && stars.map((v,i)=>{
                                return <StarFill key={i} style={{ width: "12px", height: "12px", color:"rgb(215,4,115)" }}/>
                            })}
                            
                        </div>

                    </div>

                    <div className="review-text">
                        <p>{data.review}</p>
                    </div>
                </div>
            </div>
    )
}

export default TestiminialCard