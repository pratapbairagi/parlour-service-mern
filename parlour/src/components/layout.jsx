import About from "../pages/about/about";
import Contacts from "../pages/contact/contact";
import Home from "../pages/home/home";
import Sections from "../pages/sections/sections";
import Testimonial from "../pages/textimonial/testimonial";
import reviewDatas from "../data/sectionData.json"
import { useState } from "react";
import { useEffect } from "react";


const Layout = ({search, servicesData}) =>{
    
    let [data, setData] = useState([])

    // useEffect(()=>{
    //     if(servicesData.length > 0){
    //         setData(servicesData.flatMap(v=>v.reviews))
    //     }
    // },[reviewDatas])

    useEffect(()=>{
        if(servicesData.length > 0){
            setData(servicesData)
        }
    },[servicesData])

    return(
        <>
            <Home/>
        {data.length > 0 &&
            <Sections servicesData={servicesData}  search={search}/> 
            }
            <About/>
            {/* {data.length > 0 && <Testimonial data={data}/> } */}
            <Contacts/>
        </>
    )
}

export default Layout