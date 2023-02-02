import {Clock, CalendarDate, CurrencyRupee} from "react-bootstrap-icons"
const About = () => {

    const cssStyle_li = {display: "flex", flexDirection: "row", gap: "4px", alignItems: "center", width: "max-content", padding: "3px 9px", border: "2px solid rgb(215, 4, 115)", borderRadius: "3px"}
    const cssStyle_span = {fontSize: "70%", color: "rgb(215, 4, 115)", fontWeight: "600"}
    
    return (
        <div className="container-fluid pb-2">
            <h2 className="my-2 mx-auto" style={{width:"max-content", padding:"2px 8px", color:"rgb(215, 4, 115)", fontWeight:"600"}}>About</h2>
            <div className="row d-flex flex-wrap justify-content-center">

                <div className="col col-12 col-md-10 col-lg-5 col-xl-4 p-1" style={{ aspectRatio: "1/.96", boxShadow: "0 0 2px grey", background: "aliceblue" }}>
                    <img src="images/centerImage.jpeg
                    " style={{ width: "100%", height: "100%", borderRadius: "50%", border: "3px double pink" }} alt="" />
                </div>

                <div className="col col-12 col-md-10 col-lg-5 col-xl-4 p-3" style={{ boxShadow: "0 0 2px grey", aspectRatio:"1/.9" }}>
                    <h6 className="m-auto" style={{ borderBottom: "2px solid rgb(215, 4, 115)", color: "rgb(215, 4, 115)", width: "max-content", minWidth: "100px", textAlign: "center", fontSize: "120%", fontWeight: "600" }}>Services</h6>
                    <p className="mt-3" style={{ width: "100%", color: "green", fontSize: "90%", fontWeight: "500" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum eligendi aut, laborum nulla impedit ab, incidunt molestias nihil et nobis esse tempora temporibus vero facilis tenetur!</p>
                    <ol className="mt-2" style={{ width: "80%", color: "grey", fontWeight: "500", fontSize: "80%" }}>
                        <li> Lorem ipsum dolor sit amet consectetur.</li>
                        <li> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li> Lorem ipsum dolor sit. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                    </ol>
                    <h6 className="mt-4" style={{ color: "rgb(215, 4, 115)", fontWeight: "500", borderLeft: "2px solid rgb(215, 4, 115)", padding: "2px 8px" }}>Features</h6>
                    <ol className="mt-2" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        <li style={{ display: "flex", flexDirection: "row", gap: "4px", alignItems: "center", width: "max-content", padding: "3px 9px", border: "2px solid rgb(215, 4, 115)", borderRadius: "3px" }}>
                            <CalendarDate color="rgb(215,4,115)"/>
                            <span style={cssStyle_span}>Book your day</span>
                        </li>

                        <li style={cssStyle_li}>
                            <img src="images/ayurvedic-bowl-svgrepo-com.svg" style={{ width: "24px", height: "24px" }} alt="" />
                            <span style={cssStyle_span}>Herbal Products</span>
                        </li>

                        <li style={cssStyle_li}>
                            
                            <Clock color="rgb(215,4,115)"/>

                            <span style={cssStyle_span}>10 hrs service</span>
                        </li>

                        <li style={cssStyle_li}>
                            <CurrencyRupee color="rgb(215,4,115)" />
                            <span style={cssStyle_span}>Minmum Charge</span>
                        </li>
                    </ol>
                </div>

                <div className="col col-12 col-md-10 col-lg-10 col-xl-10 py-2" style={{ boxShadow: "0 0 2px grey", height: "100%" }}>
                    <h6 className="m-auto" style={{ borderBottom: "2px solid rgb(215, 4, 115)", color: "rgb(215, 4, 115)", width: "max-content", minWidth: "100px", textAlign: "center", fontSize: "120%", fontWeight: "600" }}>History</h6>
                </div>

            </div>
        </div>
    )
}

export default About