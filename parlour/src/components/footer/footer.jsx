import { Link } from "react-router-dom";
import FormInput from "../ui/formInput";
import "./footer.css";
import {Facebook, Instagram, Linkedin, Whatsapp, Telegram, Send} from "react-bootstrap-icons"

const Footer = () => {
    return (
        <div className="container-fluid footer_container p-0" >
            <div className="row d-flex flex-wrap">

                <div className="col col-6 col-lg-3 col-md-6 col-8 px-2 py-1" >
                    <div className="footer-about">
                        <div className="footer-logo">
                            <Link to="/" style={{ display: "flex", justifyContebt: "center", alignItems: "center" }} >
                                <img src="/images/navLogo2.jpeg" style={{ width: "28px" }} alt="" />
                                <span style={{ fontWeight: "600", color: "rgb(215, 4, 115)" }}>HOME PARLOUR</span>
                            </Link>
                            <p className="px-2" style={{ color: "grey", fontWeight: "600" }}>The customer is at the heart of our unique business model, which include design.</p>

                        </div>
                    </div>
                </div>

                <div className="col col-lg-3 offset-lg-1 col-md-6 col-7">
                    <div className="footer-widget">
                        <div className="footer-newslatter mt-2">
                            <p style={{ color: "rgb(215, 4, 115)", fontWeight: "600", fontSize: "85%" }}>Be the first to know new benifits of using our services ! </p>
                            <form action="" className="mt-2">
                                <div className="input-group input-group-sm">
                                    <FormInput cssClass={"form-control"} functions={null} type={"text"} name={""} css={{color:"grey", fontSize:"80%"}} minLength={0} maxLength={null}/>
                                    <span className="input-group-text btn btn-primary">
                                    <Send size="16" style={{transform:"rotateZ(45deg)"}}/>
                                    </span>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col col-lg-2 offset-lg-1 col-m-3 col-6">
                    <div className="footer-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <h6 className="mt-2" style={{ fontWeight: "600", color: "rgb(215, 4, 115)" }}>SEARCHING FOR</h6>
                        <ul className="p-0 mt-1" style={{ textAlign: "left", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", justifyItems: "start" }}>
                            <li >
                                <Link to="/section#Hair" style={{ color: "grey", borderBottom: "1px solid grey" }}>Hair solutiio</Link>
                            </li>
                            <li>
                                <Link to="/section#Face" style={{ color: "grey", borderBottom: "1px solid grey" }}>Face Solution</Link>
                            </li>
                            <li>
                                <Link to="/section#Pedicure & Manicure" style={{ color: "grey", borderBottom: "1px solid grey" }}>Feet & Hand</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <h6 className="mt-2" style={{ fontWeight: "600", color: "rgb(215, 4, 115)", width: "100%" }}>LINKS</h6>
                        <ul className="p-0 mt-1" style={{ textAlign: "left", width: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", justifyItems: "start" }}>
                            <li style={{ width: "90%", fontSize: "90%" }}>
                                <Link to="/contact" style={{ borderBottom: "1px solid" }}>Contact Us</Link>
                            </li>
                            <li style={{ width: "90%", fontSize: "90%" }}>
                                <Link to="/payment/options" style={{ borderBottom: "1px solid" }}>Payment Methods</Link>
                            </li>
                            <li style={{ width: "90%", fontSize: "90%" }}>
                                <Link to="/" style={{ borderBottom: "1px solid" }}>Home Service</Link>
                            </li>
                            <li style={{ width: "90%", fontSize: "90%" }}>
                                <Link to="/effects" style={{ borderBottom: "1px solid" }}>Effects</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col col-lg-8 col-md-10 col-12">
                    <div className="footer-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                        <h6 className="mt-1" style={{ fontWeight: "600", color: "rgb(215, 4, 115)", width: "100%", }}>FOLLOW US ON</h6>
                        <ul className="p-0 py-3 mt-0" style={{ width: "100%", columnGap: "16px", rowGap: "10px", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "start" }}>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                <Facebook size="16"/> 
                                    <span>Facebook</span>
                                </Link>
                            </li>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                <Instagram size="16"/>
                                    <span>Instagram</span>
                                </Link>
                            </li>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                <Linkedin size="16"/>
                                    <span>Linkedin</span>
                                </Link>
                            </li>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                <Whatsapp size="16"/>
                                    <span>Whatsapp</span>
                                </Link>
                            </li>
                            <li style={{ width: "max-content", fontSize: "90%" }}>
                                <Link style={{ borderBottom: "1px solid", display: "flex", justifyContent: "center", padding: "3px 10px", alignItems: "center", columnGap: "6px", boxShadow: "0 0 0 2px ", color: "grey" }}>
                                    <Telegram size="16"/>
                                    <span>Telegram</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>

            <div className="row p-0" style={{ background: "black" }}>
                <div className="col col-lg-12 text-center">
                    <div className="footer-copyright-text" style={{ color: "grey", fontWeight: "600", fontSize: "90%", padding: "4px" }}>
                        <p>Copyright &copy; 2022 All rights reserved | This website is for female</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer