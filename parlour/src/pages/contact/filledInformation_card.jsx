import {Facebook, Twitter, Instagram, Linkedin, Whatsapp, GeoAlt, EnvelopePaperHeart, TelephoneOutbound} from "react-bootstrap-icons"

const FilledUnformation = () =>{
    return (
        <div className="filledInformation ">
                    <div className="filledInformation-row">
                        
                        <div className="col col-12 d-flex contact-info-container">
                            <div className="contact-info">
                                <h5 className="">Contact Info</h5>
                            </div>
                        </div>

                        <div className="filledInformation-columns">
                            <div className="address-icon col col-2">
                                <GeoAlt size="16"/>
                            </div>
                            <div className="address-text col col-10">
                                <p>68/15A, Tughlakabad, Bengali Colony</p>
                                <p>South Delhi, Delhi</p>
                                <p>Delhi - 110019</p>
                            </div>
                        </div>

                        <div className="filledInformation-columns">
                            <div className="mail-icon col col-2">
                                <EnvelopePaperHeart size="16"/>
                            </div>
                            <div className="mail-text col col-10">
                                <p>home-parlour@gmail.com</p>
                            </div>
                        </div>

                        <div className="filledInformation-columns">
                            <div className="telephone-icon col col-2">
                                <TelephoneOutbound size="16"/>
                            </div>
                            <div className="telephone-text col col-10">
                                <p>+91 9876543210</p>
                            </div>
                        </div>

                        <div className="filledInformation-columns">
                            <Facebook/>
                            <Twitter/>
                            <Instagram/>
                            <Whatsapp/>
                            <Linkedin/>
                        </div>
                    </div>
                </div>
    )
}

export default FilledUnformation