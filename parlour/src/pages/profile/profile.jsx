import axios from "axios"
import { useEffect, useState } from "react"
import { Link, PencilFill } from "react-bootstrap-icons"
import Loading from "../../components/ui/loading"
import NotificationToolTip from "../../components/ui/notificationToolTip"


const Profile = ({ userAuth }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        image: ""
    })

    const [notificationTooktip, setNotificationTooltip] = useState({
        success: false,
        loading: false,
        mssg: null
    })

    useEffect(() => {
        if (userAuth.success) {
            setUser({
                ...userAuth.user,
                name: userAuth.user.name,
                email: userAuth.user.email,
                phone: userAuth.user.phone,
                age: userAuth.user.age,
                image: userAuth.user.image
            })
        }
    }, [userAuth])

    // 
    const inputChangeHandler = (e) => {
        const { name, value } = e.target
        if (name !== "image") {
            setUser({
                ...user,
                [name]: value
            })
        }
        else {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.DONE) {
                    setUser({
                        ...user,
                        image: {
                            ...user.image,
                            url: reader.result
                        }
                    })
                }
            }
            reader.readAsDataURL(file)
        }
    }

    // submit change
    const submitFormHandler = async () => {
        setNotificationTooltip({
            ...notificationTooktip,
            loading: true
        })
        try {
            await axios.put("https://parlour-service-server.vercel.app/api/v1/user/update",
            // await axios.put("http://localhsot:1994/api/v1/user/update",

                user,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials : true
                }).then(res => {
                    if (res.data.success) {
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
                })
                .catch(er => {
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
            console.log(error)
        }
    }
    return (
        <div className="container-fluid mt-5">

            {notificationTooktip.loading && <Loading />}
            {notificationTooktip.mssg !== null && <NotificationToolTip message={notificationTooktip} />}

            <div className="row py-5 d-flex justify-content-center">
                <div className="col col-12 col-md-6 p-2" style={{display: "flex", maxWidth:"400px", flexDirection: "column", gap:"8px", justifyContent: "center", alignItems: "center", position:"relative" }}>
                    <img style={{ width: "80%", aspectRatio: "1/1", borderRadius: "50%" }} src={user.image.url} alt={user.image.public_id} />
                    <input onChange={inputChangeHandler} defaultValue={user.image.url} style={{ border: "1px solid white", boxShadow:"0 0 3px grey", width: "32px", color: "transparent", backgroundColor:"whitesmoke", position:"absolute", zIndex:"1", top:"16px", right:"16px", padding:"0 0 0 31px", borderRadius:"50%" }} name="image" type="file" />
                    <span style={{ width: "100%", fontSize:"1.4rem", textAlign: "center", padding: "2px 10px", background: "rgb(203,4,115)", color: "white", fontWeight: "500", letterSpacing: "1px", borderRadius: '4px' }}>{userAuth.user.name.toUpperCase()}</span>
                </div>
                <div className="col col-12 col-md-6 p-2" style={{display: "flex", flexDirection: "column", gap: "4px", alignItems:"center" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", width: "max-content", maxWidth: "100%", minWidth: "100%", background: "rgb(203,4,115)", padding: "2px 8px", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ padding: "2px 4px", color: "white", fontWeight: "500", minWidth: "4rem" }}>Name : </span>
                        <input onChange={inputChangeHandler} name="name" id={user.name} defaultValue={user.name} style={{ width: "calc(100% - 30px)", padding: "2px 4px", color: "whitesmoke", background: "transparent", border: "none", fontWeight: "500", letterSpacing: "1px" }} type="text" />
                        <PencilFill onClick={submitFormHandler} style={{ border: "1px solid white", background: "white", padding: "2px", borderRadius: "50%" }} size="24" color="rgb(203,4,115)" />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "100%", width: "max-content", minWidth: "100%", background: "rgb(203,4,115)", padding: "2px 8px", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ padding: "2px 4px", color: "white", fontWeight: "500", minWidth: "4rem" }}>Phone : </span>
                        <input onChange={inputChangeHandler} name="phone" defaultValue={user.phone} style={{ width: "calc(100% - 30px)", padding: "2px 4px", color: "whitesmoke", background: "transparent", border: "none", fontWeight: "500", letterSpacing: "1px" }} type="text" />
                        <PencilFill onClick={submitFormHandler} style={{ border: "1px solid white", background: "white", padding: "2px", borderRadius: "50%" }} size="24" color="rgb(203,4,115)" />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0", width: "max-content", maxWidth: "100%", minWidth: "100%", background: "rgb(203,4,115)", padding: "2px 8px", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ padding: "2px 4px", color: "white", fontWeight: "500", minWidth: "4rem" }}>Email : </span>
                        <input onChange={inputChangeHandler} name="email" defaultValue={user.email} style={{ width: "calc(100% - 30px)", padding: "2px 4px", color: "whitesmoke", background: "transparent", border: "none", fontWeight: "500", letterSpacing: "1px" }} type="text" />
                        <PencilFill onClick={submitFormHandler} style={{ border: "1px solid white", background: "white", padding: "2px", borderRadius: "50%" }} size="24" color="rgb(203,4,115)" />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0", width: "max-content", maxWidth: "100%", minWidth: "100%", background: "rgb(203,4,115)", padding: "2px 8px", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ padding: "2px 4px", color: "white", fontWeight: "500", minWidth: "4rem" }}>Age : </span>
                        <input onChange={inputChangeHandler} defaultValue={user.age} name="age" style={{ width: "calc(100% - 30px)", padding: "2px 4px", color: "whitesmoke", background: "transparent", border: "none", fontWeight: "500", letterSpacing: "1px" }} type="date" />
                        <PencilFill onClick={submitFormHandler} style={{ border: "1px solid white", background: "white", padding: "2px", borderRadius: "50%" }} size="24" color="rgb(203,4,115)" />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", width: "max-content", maxWidth: "100%", minWidth: "100%", background: "rgb(203,4,115)", padding: "2px 8px", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ padding: "2px 4px", color: "white", fontWeight: "500", minWidth: "4rem" }}>Password : </span>
                        <input defaultValue="**********" style={{ width: "calc(100% - 30px)", padding: "2px 4px", color: "whitesmoke", background: "transparent", border: "none", fontWeight: "500", letterSpacing: "1px" }} type="text" />
                        <PencilFill style={{ border: "1px solid white", background: "white", padding: "2px", borderRadius: "50%" }} size="24" color="rgb(203,4,115)" />
                    </div>
                    <div style={{ display: "flex", gap: "4px", width: "max-content", minWidth: "100%", background: "rgb(203,4,115)", padding: "2px 8px", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ padding: "2px 4px", color: "white", fontWeight: "600", minWidth: "4rem" }}>Orders</span>
                        <Link style={{ border: "1px solid white", background: "white", padding: "2px", borderRadius: "50%" }} size="24" color="rgb(203,4,115)" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile