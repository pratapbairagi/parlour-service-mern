import axios from "axios"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../components/ui/loading";
import "./service.css";
import {Trash3, PencilSquare} from "react-bootstrap-icons"


const ServiceList = () => {

    const [services, setServices] = useState([]);
    
    const [notificationTooktip, setNotificationTooltip] = useState({
        success: false,
        loading: false,
        mssg:null
    })

    useEffect(()=>{
        fetchServices()
    },[])

    const fetchServices = async () =>{
        
        try {
            setServices("loading");
            // axios.get("https://parlour-service-server.vercel.app/admin/services").then(res=>{
            axios.get("/api/v1/service/admin").then(res=>{

                setServices(res.data.services);
            })
            .catch(er=>{
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
            console.log(error)
        }
    }

    // delete service handler
    const deleteServiceHandler = async (id) =>{
        setNotificationTooltip({
            ...notificationTooktip,
            loading : true
            })
        try {
            // axios.delete(`https://parlour-service-server.vercel.app/admin/service/${id}`).then(res=>{
            axios.delete(`/api/v1/service/admin/${id}`).then(res=>{

                if(res.data.success){

                    fetchServices();

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
                },3000);

            }
            })
            .catch(er=>{
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
                ...notificationTooktip,
                success: false,
                loading : false,
                mssg: error             
            })
            setTimeout(()=>{
                setNotificationTooltip({
                    ...notificationTooktip,
                    mssg: null
                })
            },3000)
        }
    }

    return(
        <div className="container-fluid mt-5 service_list_container">
            <span style={{textAlign:"center", color:"grey", fontSize:"2rem", width:"100%"}}>Services</span>
            <NavLink to='/service/add'> <button className="btn btn-warning w-100">ADD SERVICE</button> </NavLink>
            <div className="row">
                <table cellPadding="8px" style={{position:"relative"}}>
                    <thead style={{background:"rgb(57, 57, 57)", color:"white"}}>
                        <tr>
                            <td>No</td>
                            <td>Title</td>
                            <td>Category</td>
                            <td>Description</td>
                            <td>Use</td>
                            <td style={{minWidth:"88px", whiteSpace:"nowrap"}}>Process Time</td>
                            <td>Image</td>
                            <td>Ratings</td>
                            <td style={{minWidth:"88px", whiteSpace:"nowrap"}}>Created at</td>
                            <td style={{minWidth:"88px", whiteSpace:"nowrap"}}>Created by</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    { services.length === 0 ? 
                    <span>No Data Created Yet!</span> :
                    services === "loading" ? 
                    <tr style={{ position:"relative"}}>
                    <Loading/> 
                    </tr> :
                    <tbody>
                        {services.length > 0 && 
                       services.map((s, i)=>{ return <tr key={i}>
                            <td>{i+1}</td>
                            <td style={{width:"max-content", whiteSpace:"nowrap", overflow:"hidden"}}>{s.title}</td>
                            <td style={{maxWidth:"32px", whiteSpace:"nowrap", overflow:"hidden"}}>{s.category}</td>
                            <td style={{maxWidth:"32px", whiteSpace:"nowrap", overflow:"hidden"}}>{s.description}</td>
                            <td style={{maxWidth:"32px", whiteSpace:"nowrap", overflow:"hidden"}}>{s.use}</td>
                            <td>{s.process_time}</td>
                            <td><img src={s.images.url} style={{width:"28px", height:"28px"}} /></td>
                            <td>{s.ratings}</td>
                            <td>
                                <span>{new Date(s.created_at).toLocaleString()}</span>
                            </td>
                            <td>{s.created_by}</td>
                            <td><NavLink to={`/edit/${s._id}`}><PencilSquare size="20" color="orange"/></NavLink></td>
                            <td><Trash3 cursor="pointer" size="20" color="red" onClick={()=>deleteServiceHandler(s._id)}/></td>
                        </tr> })
                        }
                    </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default ServiceList