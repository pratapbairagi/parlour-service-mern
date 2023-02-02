import { useRef } from "react"
import "./contact.css"
import FilledUnformation from "./filledInformation_card";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import SuccessPopup from "../../components/ui/successPopup";
import { useEffect } from "react";
import Button from "../../components/ui/button";
import FormInput from "../../components/ui/formInput";


const Contacts = () => {

    const form = useRef()
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        if(success == true){
            setTimeout(()=>{
                setSuccess(false)
            },2000)
        }
    },[success])

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_parlour', 'template_bthp4lm', form.current, 'RHLBORJ6kbGnt_Wnq')
            .then((result) => {
                if (result.text == "OK") {
                    return setSuccess(true)
                }
                e.target.reset()
            }, (error) => {
            
            });
    }

    const styleClass_div = "col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
    return (
        <div className="container-fluid contact-container">
            {success == true && <SuccessPopup success={success}/>}
            <h2 className="">Contact</h2>
            <div className="row-container">



                <form ref={form} onSubmit={sendMail} className="contact-form ">
                    <FilledUnformation />
                    <div className="row">
                        <span className="contact-header">
                            <h5>Send a message</h5>
                        </span>
                        <div className={styleClass_div}>
                            <label htmlFor="">User Name</label>
                            <FormInput type={"text"} name={"user_name"} minLength={3} maxLength={15} required={true}/>
                        </div>

                        <div className={styleClass_div}>
                            <label htmlFor="">Subject</label>
                            <FormInput type={"text"} name={"user_subject"} minLength={2} maxLength={25} required={true}/>
                        </div>

                        <div className={styleClass_div}>
                            <label htmlFor="">Your E-Mail</label>
                            <FormInput type={"email"} name={"user_email"} minLength={null} maxLength={null} required={true}/>
                        </div>

                        <div className={styleClass_div}>
                            <label htmlFor="">Mobile Number</label>
                            <FormInput type={"tel"} name={"user_number"} minLength={8} maxLength={10} required={true}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label htmlFor="">Message</label>
                            <textarea type="text" name="message" id="" minLength="10" required  />
                        </div>
                        <span className="mt-2">
                            <Button text={"Submit"} functions={null} type={"submit"} css={{padding: "5px 24px", fontSize: "80%", border: "none", background: "rgb(215, 4, 115)", color: "white", fontWeight: "600", letterSpacing: "1px", borderRadius:"0"}}/>
                        </span>
                    </div>
                </form>
            </div>
           
        </div>
    )
}

export default Contacts