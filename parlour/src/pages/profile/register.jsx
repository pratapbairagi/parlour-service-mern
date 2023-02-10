import axios from "axios"
import { useState } from "react"
import { CalendarHeart, EnvelopeAt, GenderAmbiguous, Image, Lock, Person, Telephone } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import Loading from "../../components/ui/loading"
import NotificationToolTip from "../../components/ui/notificationToolTip"
import { setToken } from "../../storage/storage"


const RegisterUser = ({ setAuthToggle }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        image: "",
        gender: "",
        address: "",
        password: "",
        confirmPassword: "",
        tnc: ""
    })

    const [notificationTooktip, setNotificationTooltip] = useState({
        success: false,
        loading: false,
        mssg: null
    })

    // onChange={inputHandler}
    const inputHandler = (e) => {
        const { name, value } = e.target;
        if (name !== "image") {
            setUser({ ...user, [name]: value });
        }
        else {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.DONE) {
                    setUser({ ...user, image: reader.result })
                }
            }

            reader.readAsDataURL(file);
        }
    }

    // submitRegisterHandler
    const submitRegisterHandler = async () => {
        setNotificationTooltip({
            ...notificationTooktip,
            loading: true
        })
        try {
            // if (user.name && user.phone && user.email && user.address && user.password && user.confirmPassword && user.image && user.address && user.gender && user.tnc) {
                axios.post("https://parlour-service-server.vercel.app/api/v1/user/register", user, {
                // axios.post("http://localhsot:1994/api/v1/user/register", user, {

                    headers: { "Content-Type": "application/json" }, 
                    withCredentials : true
                    
                }).then(res => {

                    // setToken(res.data.token);
                    navigate("/")
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
            // }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container-fluid mt-5 py-4" style={{ background: "whitesmoke", minHeight:"90vh" }}>

            {notificationTooktip.loading && <Loading />}
            {notificationTooktip.mssg !== null && <NotificationToolTip message={notificationTooktip} />}

            <h4 className="mb-2" style={{ textAlign: "center", width: "100%", fontWeight: "600", color: "grey" }}>SIGN-UP</h4>
            <div className="row">
                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{ borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend" >
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background: "transparent", border: "none", borderRadius: "0" }}>
                                <Person size="20" />
                            </div>
                        </div>
                        <input onChange={inputHandler} style={{ border: "none", background: "transparent" }} type="text" name="name" className="form-control" id="name" placeholder="Full Name" />
                    </div>
                </div>

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{ borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background: "transparent", border: "none", borderRadius: "0" }}>
                                <Telephone size="20" />
                            </div>
                        </div>
                        <input onChange={inputHandler} style={{ border: "none", background: "transparent" }} name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" />
                    </div>
                </div>

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{ borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background: "transparent", border: "none", borderRadius: "0" }}>
                                <EnvelopeAt size="20" />
                            </div>
                        </div>
                        <input onChange={inputHandler} style={{ border: "none", background: "transparent" }} name="email" type="text" className="form-control" id="email" placeholder="Email" />
                    </div>
                </div>

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2 d-flex justify-content-between" style={{ borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background: "transparent", border: "none", borderRadius: "0" }}>
                                <GenderAmbiguous size="20" />
                            </div>
                        </div>
                        <span className="input-group w-25 gap-3 d-flex align-items-center">
                            <input onChange={inputHandler} value="male" type="radio" name="gender" className="custom-control-input" id="genderMale" placeholder="Username" />
                            <label htmlFor="genderMale" className="custom-control-label">Male</label>
                        </span>
                        <span className="input-group w-25 d-flex gap-3 align-items-center">
                            <input onChange={inputHandler} value={"female"} type="radio" name="gender" className="custom-control-input" id="genderFemale" placeholder="Username" />
                            <label htmlFor="genderFemale" className="custom-control-label">Female</label>
                        </span>
                    </div>
                </div>

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{ borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background: "transparent", border: "none", borderRadius: "0" }}>
                                <Lock size="20" />
                            </div>
                        </div>
                        <input onChange={inputHandler} style={{ border: "none", background: "transparent" }} name="password" type="password" className="form-control" id="passwoprd" placeholder="Password" />
                    </div>
                </div>

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{ borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background: "transparent", border: "none", borderRadius: "0" }}>
                                <span>Re-</span>
                                <Lock size="20" />
                            </div>
                        </div>
                        <input onChange={inputHandler} style={{ border: "none", background: "transparent" }} name="confirmPassword" type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                    </div>
                </div>

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{ borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background: "transparent", border: "none", borderRadius: "0" }}>
                                <CalendarHeart size="20" />
                            </div>
                        </div>
                        <input onChange={inputHandler} style={{ border: "none", background: "transparent" }} name="age" type="date" className="form-control" id="age" placeholder="Age" />
                    </div>
                </div>

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{ borderBottom: "1px solid grey" }}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background: "transparent", border: "none", borderRadius: "0" }}>
                                <Image size="20" />
                            </div>
                        </div>
                        <input onChange={inputHandler} style={{ border: "none", background: "transparent" }} name="image" type="file" className="form-control" id="image" placeholder="image" />
                    </div>
                </div>

                <div className="col col-12">
                    <div className="input-group mb-2">
                        <textarea onChange={inputHandler} type="text" style={{ background: "transparent" }} name="address" className="form-control" id="address" placeholder="Full Address" />
                    </div>
                </div>

                <div className="col col-12">
                    <div className="form-group">
                        <div className="form-check d-flex gap-3 align-items-center">
                            <input onChange={inputHandler} className="form-check-input" name="tnc" type="checkbox" value="agree" id="invalidCheck2" required />
                            <label style={{ color: "grey" }} className="form-check-label" htmlFor="invalidCheck2">
                                I am agree with terms and conditions
                            </label>
                        </div>
                    </div>
                </div>

                <button onClick={submitRegisterHandler} className="btn btn-success mt-3 fs-4" style={{ letterSpacing: "1px" }}>SIGNUP</button>

                <div className="col col-12 mt-1">
                    <div className="form-group d-flex justify-content-between">
                        <span>Already have account ?</span>
                        <button onClick={() => setAuthToggle("login")} style={{ background: "transparent", border: "none" }}>Sign In</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegisterUser