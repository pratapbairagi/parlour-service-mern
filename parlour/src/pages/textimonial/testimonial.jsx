import TestiminialCard from "../../components/testiminialCard";
import "./testimonial.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import reviewDatas from "../../data/sectionData.json";

const Testimonial = ({ data }) => {
    let [recallData, setRecallData] = useState([])
    const location = useLocation()

    useEffect(() => {
        if (data == undefined) {
            setRecallData(reviewDatas.flatMap(v => v.reviews))
        }
    }, [])

    return (
        <div id="testimonial" className="container-fluid py-2" style={{ overflow: "hidden", background: "aliceblue" }}>
            <h2 style={{ padding: "0 8px", textAlign: "center", color: "rgb(215,4,115)", fontWeight: "600", display:`${location.pathname == "/" ? "" : "none"}` }}>Testimonial</h2>
            <div className="container-fluid testimonial-container">
                <div className="row" style={{display:"flex", flexWrap:`wrap`, maxWidth:`${location.pathname == "/testimonial" ? "100%" : ""}`, justifyContent:`${location.pathname == "/testimonial" ? "center" : ""}`, rowGap:"6px"}}>

                    {location.pathname != "testimonial" && location.pathname != "/"  &&
                        data != undefined && 
                        data.reviews.map((v, i) => {
                            return <TestiminialCard key={i} data={v} />
                        })
                    }

                    {location.pathname == "/" &&
                        data != undefined &&
                        data.map((v, i) => {
                            return <TestiminialCard key={i} data={v} />
                        })
                    }

                    {location.pathname == "/testimonial" &&
                        recallData.length > 0 &&
                        recallData.map((v, i) => {
                            return <TestiminialCard key={i} data={v} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Testimonial