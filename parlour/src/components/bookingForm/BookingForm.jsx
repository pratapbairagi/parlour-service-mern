import { useEffect, useState } from "react"
import Button from "../ui/button"
import FormInput from "../ui/formInput";
import "./bookingForm.css";
import { XLg, PersonFillExclamation, TelephoneFill, EnvelopeAtFill, Calendar2DateFill, Calendar2HeartFill, HouseExclamationFill} from "react-bootstrap-icons"

const BookingForm = ({ toggleForm, setToggleForm, bookingData }) => {

    const toggleFormFunction = () =>{
        toggleForm == "flex" && setToggleForm("none")
    }

    let [bookingDetail, setBookingDetail] = useState({
        name : "",
        number :Number() ,
        mail :"",
        address:"",
        age: Number(),
        booking_time:"",
        booking_date:"",
        now: (new Date()).toLocaleString(),
        booked_for : ""
    })

    useEffect(()=>{
        if(bookingData != null){
        setBookingDetail({...bookingDetail, booked_for:`${ bookingData.title}`})
    }
    },[bookingData])

    const inputHandler = (e) =>{
        let {name,value} = e.target

        setBookingDetail({...bookingDetail, [name]: value})
    }


    const submitForm = () => {
        window.open(`https://wa.me/8287889123?text=${
            "name : "+bookingDetail.name+", "
            +" number : "+bookingDetail.number+", "
            +" address "+bookingDetail.address+", "
            +" email : "+bookingDetail.mail+", "
            +" age : "+bookingDetail.age+", "
            +" booking time : "+bookingDetail.booking_time+", "
            +" booking data : "+bookingDetail.booking_date+", "
            +" booked at : "+bookingDetail.now+", "
            +"booked for : "+bookingDetail.booked_for
        }`)
    }

    const cssStyle_input_group_container = "col col-12 col-md-6 col-lg-6 col-xl-6 p-0";
    const CssClass_Input_group = "input-group mx-auto";
    const cssClass_input_prepend = "input-group-prepend";
    const cssClass_input_group_text ="input-group-text rounded-0 border-0 bg-transparent";
    const cssStyle_formInput = {background: "transparent", border: "none", display:"flex", width:"43%", color:"grey", padding:"0 6px"}
    
    return (
        <div className="container-fluid-fluid bookingForm_container" style={{ display: `${toggleForm}`}}>
            
            <div className="btn-container">
            <button onClick={()=> toggleFormFunction()} className="btn m-0">
                <XLg color="white"/>
            </button>
            </div>

            <div className="form-container row ">
                <h4 className="mb-2">Booking Details</h4>
                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend} style={{ border: "none" }}>
                            <label className={cssClass_input_group_text} id="basic-addon1">
                                <PersonFillExclamation color="rgb(215,4,115)" size="24"/>
                            </label>
                        </div>
                        <FormInput type={"text"} name={"name"} functions={inputHandler} cssClass={"form-control"} placeholder={"Full name"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <label className={cssClass_input_group_text} id="basic-addon1" >
                                <TelephoneFill color="rgb(215,4,115)" width="20" height="24"/>
                            </label>
                        </div>
                        <FormInput type={"tel"} name={"number"} functions={inputHandler} cssClass={"form-control"} placeholder={"Contact number"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <label className={cssClass_input_group_text} id="basic-addon1">
                                <EnvelopeAtFill height="24" width="20" color="rgb(215,4,115)"/>
                            </label>
                        </div>
                        <FormInput type={"email"} name={"mail"} functions={inputHandler} cssClass={"form-control"} placeholder={"Email"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <span className={cssClass_input_group_text} id="basic-addon1">
                                <Calendar2DateFill width="20" height="24" color="rgb(215,4,115)"/>
                            </span>
                        </div>
                        <FormInput type={"number"} name={"age"} functions={inputHandler} cssClass={"form-control"} placeholder={"Age"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group}>
                        <div className={cssClass_input_prepend}>
                            <label htmlFor="" className={cssClass_input_group_text}>
                                <Calendar2HeartFill width="20" height="24" color="rgb(215,4,115)"/>
                            </label>
                        </div>
                        <FormInput type={"date"} name={"Date"} functions={inputHandler} class={"form-control"} placeholder={"Date"} css={cssStyle_formInput}/>
                        <FormInput type={"time"} name={"time"} functions={inputHandler} class={"form-control"} placeholder={"Time"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <span className={cssClass_input_group_text} id="basic-addon1">
                                <HouseExclamationFill width="24" height="20" color="rgb(215,4,115)"/>
                            </span>
                        </div>
                        <FormInput type={"text"} name={"address"} functions={inputHandler} cssClass={"form-control"} placeholder={"Full Address"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <Button type={"button"} functions={submitForm} text={"Book"}  css={{width: "99%", fontWeight: "600", letterSpacing: "1px", background: "rgb(215,4,115)", color: "white", fontSize: "130%"}}/>
            </div>

        </div>
    )
}

export default BookingForm