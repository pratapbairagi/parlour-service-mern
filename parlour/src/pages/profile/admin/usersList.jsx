
import axios from "axios"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../../components/ui/loading";
import "../../service/service.css";
import { Trash3, PencilSquare } from "react-bootstrap-icons"
import NotificationToolTip from "../../../components/ui/notificationToolTip";


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [notificationTooktip, setNotificationTooltip] = useState({
        success: false,
        loading: false,
        mssg: null
    })

    useEffect(() => {
        fetchServices()
    }, [])

    const fetchServices = async () => {
        try {
            await axios.get("https://parlour-service-server.vercel.app/admin/users").then(res => {
                setUsers(res.data.users)
            })
            .catch(er=>{
                setNotificationTooltip({
                    ...notificationTooktip,
                    success: false,
                    loading: false,
                    mssg: er.response.data.message
                })
                setTimeout(() => {
                    setNotificationTooltip({
                        ...notificationTooktip,
                        mssg: null
                    })
                }, 3000)
            })
        } catch (error) {
            setNotificationTooltip({
                ...notificationTooktip,
                success: false,
                loading: false,
                mssg: error
            })
            setTimeout(() => {
                setNotificationTooltip({
                    ...notificationTooktip,
                    mssg: null
                })
            }, 3000)
        }
    }

    // delete service handler
    const deleteUserHandler = async (id) => {

        setNotificationTooltip({
            ...notificationTooktip,
            loading: true
        })

        try {
            axios.delete(`https://parlour-service-server.vercel.app/admin/user/delete/${id}`).then(res => {
                if (res.data.success) {
                    fetchServices()
                    setNotificationTooltip({
                        ...notificationTooktip,
                        success: true,
                        loading: false,
                        mssg: res.data.message
                    })

                    setTimeout(() => {
                        setNotificationTooltip({
                            ...notificationTooktip,
                            success: false,
                            mssg: null
                        })
                    }, 3000)

                }
            }).catch(er => {
                setNotificationTooltip({
                    ...notificationTooktip,
                    success: false,
                    loading: false,
                    mssg: er.response.data.message
                })
                setTimeout(() => {
                    setNotificationTooltip({
                        ...notificationTooktip,
                        mssg: null
                    })
                }, 3000)
            })
        } catch (error) {
            setNotificationTooltip({
                ...notificationTooktip,
                success: false,
                loading: false,
                mssg: error
            })
            setTimeout(() => {
                setNotificationTooltip({
                    ...notificationTooktip,
                    mssg: null
                })
            }, 3000)
        }
    }

    return (
        <div className="container-fluid mt-5 service_list_container">

            {notificationTooktip.loading && <Loading />}
            {notificationTooktip.mssg !== null && <NotificationToolTip message={notificationTooktip} />}

            <h4 style={{ textAlign: "center", color: "grey" }}>Services</h4>
            <div className="row">
                <table cellPadding="8px" style={{ position: "relative" }}>
                    <thead style={{ background: "rgb(57, 57, 57)", color: "white" }}>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Age</td>
                            {/* <td style={{minWidth:"88px", whiteSpace:"nowrap"}}>Process Time</td> */}
                            <td>Image</td>
                            {/* <td>Ratings</td> */}
                            <td style={{ minWidth: "88px", whiteSpace: "nowrap" }}>registered at</td>
                            {/* <td style={{minWidth:"88px", whiteSpace:"nowrap"}}>Created by</td> */}
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    {users.length === 0 ?
                        <h4>No Data Created Yet!</h4> :
                        users === "loading" ?
                            <tr style={{ position: "relative" }}>
                                <Loading />
                            </tr> :
                            <tbody>
                                {users.length > 0 &&
                                    users.map((s, i) => {
                                        return <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td style={{ maxWidth: "32px", whiteSpace: "nowrap", overflow: "hidden" }}>{s.name}</td>
                                            <td style={{ maxWidth: "32px", whiteSpace: "nowrap", overflow: "hidden" }}>{s.phone}</td>
                                            <td style={{ width: "max-content", whiteSpace: "nowrap", overflow: "hidden" }}>{s.email}</td>
                                            <td style={{ maxWidth: "32px", whiteSpace: "nowrap", overflow: "hidden" }}>{s.age}</td>
                                            {/* <td>{s.process_time}</td> */}
                                            <td><img src={s.image.url} style={{ width: "28px", height: "28px" }} /></td>
                                            <td>
                                                <span>{s.registredAt}</span>
                                            </td>
                                            {/* <td>{s.created_by}</td> */}
                                            <td><NavLink to={`/edit/${s._id}`}><PencilSquare size="20" color="orange" /></NavLink></td>
                                            <td><Trash3 cursor="pointer" size="20" color="red" onClick={() => deleteUserHandler(s._id)} /></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default UsersList