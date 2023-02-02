import FormInput from "../../components/ui/formInput"
import { XLg, PersonFillExclamation, TelephoneFill, EnvelopeAtFill, Calendar2DateFill, Calendar2HeartFill, HouseExclamationFill, Collection, CardHeading, CardText, QuestionCircle, Clock, CurrencyRupee, Images} from "react-bootstrap-icons"
import { useState } from "react"
import Button from "../../components/ui/button"
import axios from "axios"
import NotificationToolTip from "../../components/ui/notificationToolTip"
import Loading from "../../components/ui/loading"


const AddService = () => {

    const [service, addService] = useState({
        title:"",
        category:"",
        description:"",
        use:"",
        process_time:0,
        images:"",
        created_at:""
    })

    const inputHandler = (e) =>{
        let {name,value} = e.target

        if(name != "images"){
        addService({...service, [name]: value})
        }
        else{
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = () =>{
            if(reader.DONE){
                addService({...service, images : reader.result})
            }
            }
            reader.readAsDataURL(file)
        }
    }
    const [notificationTooktip, setNotificationTooltip] = useState({
        success: false,
        loading: false,
        mssg:null
    })
    const submitHandler = async (e) =>{
        e.preventDefault();
        setNotificationTooltip({
            ...notificationTooktip,
            loading : true
            })
        try {
            axios.post("https://parlour-service-server.vercel.app/admin/service/add", service).then(res=>{
                setNotificationTooltip({
                    ...notificationTooktip,
                    success: true,
                    loading: false,
                    mssg : res.data.message
                })

                setTimeout(()=>{
                    setNotificationTooltip({
                        ...notificationTooktip,
                        success: false,
                        mssg: null
                    })
                },3000)
            }).catch(er=>{
                setNotificationTooltip({
                    ...notificationTooktip,
                    success: false,
                    loading : false,
                    mssg: er.response.data.message                
                })
                setTimeout(()=>{
                    setNotificationTooltip({
                        ...notificationTooktip,
                        mssg: null
                    })
                },3000)
            })
        } catch (error) {
            setNotificationTooltip({
                success :false,
                mssg : error,
                loading : false
            })
        }
        
    }

    const cssStyle_input_group_container = "col col-12 col-md-6 col-lg-6 col-xl-6 p-0";
    const CssClass_Input_group = "input-group mx-auto";
    const cssClass_input_prepend = "input-group-prepend";
    const cssClass_input_group_text ="input-group-text rounded-0 border-0 bg-transparent";
    const cssStyle_formInput = {background: "transparent", border: "none", display:"flex", width:"43%", color:"grey", padding:"0 6px"}
    

    return (
        // <div className="container-fluid-fluid bookingForm_container" style={{ display: `${toggleForm}`}}>
        <div className="container-fluid-fluid" style={{position:"relative", padding:"42px 10px 32px 10px"}}>
            
        {notificationTooktip.loading && <Loading/>}
        {notificationTooktip.mssg !==null && <NotificationToolTip message={notificationTooktip}/>}
        
            <form onSubmit={submitHandler} className="form-container row ">
                <h4 className="mb-2 text-center">Add Service</h4>
                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend} style={{ border: "none" }}>
                            <label className={cssClass_input_group_text} id="basic-addon1">
                                <CardHeading color="rgb(215,4,115)" size="24"/>
                            </label>
                        </div>
                        <FormInput type={"text"} name={"title"} functions={inputHandler} cssClass={"form-control"} placeholder={"Title"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <label className={cssClass_input_group_text} id="basic-addon1" >
                                <Collection color="rgb(215,4,115)" width="20" height="24"/>
                            </label>
                        </div>
                        <FormInput type={"text"} name={"category"} functions={inputHandler} cssClass={"form-control"} placeholder={"Category"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <label className={cssClass_input_group_text} id="basic-addon1">
                                <CardText height="24" width="20" color="rgb(215,4,115)"/>
                            </label>
                        </div>
                        <FormInput type={"text"} name={"description"} functions={inputHandler} cssClass={"form-control"} placeholder={"Description"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <span className={cssClass_input_group_text} id="basic-addon1">
                                <QuestionCircle width="20" height="24" color="rgb(215,4,115)"/>
                            </span>
                        </div>
                        <FormInput type={"text"} name={"use"} functions={inputHandler} cssClass={"form-control"} placeholder={"How to and whome to use"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <span className={cssClass_input_group_text} id="basic-addon1">
                                <Clock width="20" height="24" color="rgb(215,4,115)"/>
                            </span>
                        </div>
                        <FormInput type={"number"} name={"process_time"} functions={inputHandler} cssClass={"form-control"} placeholder={"Process time"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <span className={cssClass_input_group_text} id="basic-addon1">
                                <CurrencyRupee width="20" height="24" color="rgb(215,4,115)"/>
                            </span>
                        </div>
                        <FormInput type={"number"} name={"price"} functions={inputHandler} cssClass={"form-control"} placeholder={"Price"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <div className={cssStyle_input_group_container}>
                    <div className={CssClass_Input_group} >
                        <div className={cssClass_input_prepend}>
                            <span className={cssClass_input_group_text} id="basic-addon1">
                                <Images width="20" height="24" color="rgb(215,4,115)"/>
                            </span>
                        </div>
                        <FormInput type={"file"} name={"images"} accept={"image/*"} functions={inputHandler} cssClass={"form-control"} placeholder={"Images"} css={cssStyle_formInput}/>
                    </div>
                </div>

                <Button type={"submit"} functions={null} text={"Add Sevice"}  css={{width: "99%", fontWeight: "600", letterSpacing: "1px", background: "rgb(215,4,115)", color: "white", fontSize: "130%"}}/>
            </form>

        </div>
    )
}


export default AddService