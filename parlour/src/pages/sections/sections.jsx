import axios from "axios";
import { useEffect, useState } from "react";
import FaceSection from "./faceSection"
import "./section.css"
// import sectionData from "../../data/sectionData.json";

const Sections = ({ search, servicesData }) => {

    let [uniqueCategory, setUniqueCategory] = useState([])
    useEffect(() => {
        if (servicesData.length > 0) {
            setUniqueCategory([...new Set(servicesData.map(v => v.category))])
        }
    }, [servicesData])

    return (
        <div className="container-fluid p-0">
            <div className="container-fluid sectionContainer d-flex flex-column mt-lg-0 mt-xl-0" style={{ boxShadow: "0 0 0 1px grey" }}>
                <h3>Category</h3>
                <div className="d-flex sectionContainerInner justify-content-lg-center justify-content-xl-center mt-2" >

                    {/* <a href="#Face" className="setctionContents">
                    <img src="/images/facial_image_logo.jpeg" alt="" />
                <span>face</span>
                </a>

                <a href="#Threading" className="setctionContents">
                <img src="/images/eyebrow_image.jpeg" alt="" />
                <span>Threading</span>
                </a>

                <a href="#Pedicure & Manicure" className="setctionContents">
                <img src="/images/nailBrush_image.jpeg" alt="" />
                <span>Pedicure & Manicure</span>
                </a>

                <a href="#Hair" className="setctionContents">
                <img src="/images/hairCut.jpeg"  alt="" />
                <span>Hair</span>
                </a> */}
                {uniqueCategory.map((v,i)=>{
                    return <a href={`#${v.replace(" ", "and")}`} className="setctionContents">
                    <img src="/images/facial_image_logo.jpeg" alt="" />
                    <span>{v}</span>
                </a>
                })}
                    

                </div>

            </div>

            {uniqueCategory.length > 0 && uniqueCategory.map((v, i) => {
                // return <FaceSection id={v} key={i} index={i} data={sectionData.filter((vv, ii)=> vv.category == v)} />
                return <FaceSection id={v.replace(" ", "and")} key={i} index={i} data={servicesData.filter((vv, ii) => vv.category === v)} />

            })}

        </div>
    )
}

export default Sections