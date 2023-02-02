import { NavLink, useLocation, useParams } from "react-router-dom";
import "./faceSection.css";
import {StarFill, StarHalf} from "react-bootstrap-icons";
import {HeartFill} from "react-bootstrap-icons"

const FaceSection = ({ id, data, index }) => {

    console.log(data)
    
    const params = useParams()

    console.log(id)


    return (<div id={id} className={`container-fluid faceSection_container ${index === 0 && "mt-2"} `} style={{ padding: "8px 4px 10px 4px", background: `${index != "undefined" && index % 2 == 0 ? "aliceblue" : " white"}` }}>
        {data.length > 0 && <h4 className="mt-1 mb-1" style={{ width: "100%", borderLeft: "2px solid rgb(203,4,115)", fontSize: "150%", padding: "2px 6px", color: "rgb(203,4,115)", fontWeight: "600", letterSpacing: "1px" }}>{data[0].category}</h4>}
        <div className={`container-fluid ${params.pathname == "/section" ? "d-block" : "d-flex"}`} style={{ overflow: "scroll", padding: "0", margin: "0" }}>
            {data?.length > 0 && data?.map((v, i) => {
                return <div key={i} className="row d-flex flex-wrap mt-0" style={{ background: `${params.pathname == "/section" ? i % 2 === 0 ? "white" : params.pathname == "/section" ? "aliceblue" : "white" : index % 2 == 0 ? "aliceblue" : "white"}`, padding: "12px 4px", display: "flex", justifyContent: "center", minWidth: "240px", width: `${params.pathname == "/section" ? "100%" : "100%"}` }}>
                    <NavLink to={`/view/${v._id}`} className={`col ${params.pathname == "/section" && "col-12 col-md-10 col-lg-6 col-xl-5 p-2"} order-1 order-md-1  ${i % 2 === 0 ? "order-lg-2 order-xl-2" : "order-lg-1 order-xl-1"}`} style={{ border: "2px solid rgb(203,4,115)", padding: "5px", position: "relative" }}>
                        <span style={{ padding: "2px 8px", letterSpacing: "1px", background: "pink", fontWeight: "600", color: "white", position: "absolute", zIndex: "3" }}>{v.title}</span>
                        
                        <img src={v.images.url} style={{ width: "100%", height: "100%", transition: "0.3s ease-in-out" }} alt={v.title} />
                        <HeartFill className="card_image_heart"/>

                        <div className="stars card_image_stars" style={{width:"max-content"}}>
                            <StarFill color="white"/>
                            <StarFill color="white"/>
                            <StarFill color="white"/>
                            <StarFill color="white"/>
                            <StarHalf color="white"/>
                        {/* <img src="/images/fillStar.svg" style={{ width: "12px", height: "12px" }} alt="" />  */}
                        </div>

                    </NavLink>
            
                    <div className={`col col-12 col-md-10 col-lg-6 col-xl-5 order-2 order-md-2  ${i % 2 === 0 ? "order-lg-1 order-xl-1" : "order-lg-2 order-xl-2"} ${params.pathname == "/section" ? "d-flex" : "d-none"}`}>
                        <div className="card_container" style={{ borderRadius: "2px 24px 2px 24px", height: "100%", backgroundColor: "transparent", padding: "12px 6px", display: "flex", width: "100%", flexDirection: "column", gap: "3px" }}>
                            <h4 style={{ width: "100%", minWidth: "100%", color: `${i % 2 === 0 ? "grey" : "teal"}`, letterSpacing: "1px", maxWidth: "max-content", padding: "2px 8px", alignSelf: `${i % 2 === 0 ? "start" : "start"}`, fontSize: "170%", fontWeight: "600", borderRight: `${i % 2 === 0 ? "none" : "none"}`, borderLeft: `${i % 2 === 0 ? "2px solid red" : "2px solid red"}` }}>
                                <span>{v.title}</span>
                            </h4>

                            <h6 style={{ width: "100%", textAlign: "left", padding: "2px 16px", background: `${i % 2 === 0 ? "aliceblue" : "white"}`, fontWeight: "500", color: `${i % 2 === 0 ? "grey" : "grey"}`, borderRadius: "4px" }}>Description</h6>
                            <ol type="1" className="ingredients " style={{ width: "100%", fontSize: "80%", color: "grey", padding: "2px 8px" }}>

                                {/* {v.ingredients.map((ingred, index1) => { return <li key={index1}>{ingred}</li> })} */}
                                 <li>{v.description}</li>


                            </ol>

                            <h6 style={{ width: "100%", textAlign: "left", padding: "2px 16px", background: `${i % 2 === 0 ? "aliceblue" : "white"}`, fontWeight: "500", color: `${i % 2 === 0 ? "grey" : "grey"}`, borderRadius: "4px" }}>Use</h6>
                            <ol type="1" style={{ fontSize: "80%", color: "grey", padding: "2px 8px" }}>
                                {/* {v.use.map((use, index2) => { return <li key={index2}>{use}</li> })} */}
                                <li>{v.use}</li>

                            </ol>

                            <div className="facialExtraDetails_container" style={{ width: "100%", padding: "3px 16px", display: "flex", justifyContent: "space-between" }}>
                                <span style={{ color: "teal", fontSize: "120%", fontWeight: "600" }}>{v.process_time}mins</span>
                                {/* <span style={{ color: "teal", fontSize: "120%", fontWeight: "600" }}>Charge Rs. {(v.charge.normal + v.charge.home_Service)}/-</span> */}
                            </div>

                        </div>
                    </div>
                </div>
            })}

        </div>
    </div>
    )
}

export default FaceSection