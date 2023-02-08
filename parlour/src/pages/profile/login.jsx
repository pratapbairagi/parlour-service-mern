import axios from "axios"
import { useState } from "react"
import { EnvelopeAt, GenderAmbiguous, House, Lock, Person, Telephone } from "react-bootstrap-icons"
import {  useNavigate } from "react-router-dom"


const Login = ({setAuthToggle}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    // input change handler
    const inputHandler = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value })
    }
    const loginHandler = async (e) => {
        e.preventDefault()

        try {
           await axios.post("https://parlour-service-server.vercel.app/user/login/me", 
        // await axios.post("http://localhost:4444/user/login/me", 

            user,
            {
                headers : { 
                    // Accept : "application/json",
                    "Content-Type" : "application/json" 
                },
                // mode : "cors",
                withCredentials : true,
                // credentials : "include"
            }
            ).then(res=>{
                if(res.data.success){
                    navigate("/")
                }
                console.log("login res", res.data)
            }).catch(er=>{
                console.log("login err", er)
            })
        } catch (error) {
            console.log("login",error)
        }
    }

    return(
        <div className="container-fluid mt-5 py-4" style={{background:"whitesmoke", minHeight:"90vh"}}>
            <h4 className="mb-2" style={{textAlign:"center", width:"100%", fontWeight:"600", color:"grey"}}>SIGN-IN</h4>
            <div className="row">

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{borderBottom:"1px solid grey"}}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background:"transparent", border:"none", borderRadius:"0" }}>
                                <EnvelopeAt size="20" />
                            </div>
                        </div>
                        <input onChange={(e)=>inputHandler(e)} style={{border:"none", background:"transparent"}} type="email" name="email" className="form-control" id="inlineFormInputGroup" placeholder="Email" />
                    </div>
                </div>

                <div className="col col-12 col-md-6">
                    <div className="input-group mb-2" style={{borderBottom:"1px solid grey"}}>
                        <div className="input-group-prepend">
                            <div className="input-group-text" style={{ minWidth: "70px", minHeight: "40px", background:"transparent", border:"none", borderRadius:"0" }}>
                                <Lock size="20" />
                            </div>
                        </div>
                        <input onChange={(e)=> inputHandler(e)} style={{border:"none", background:"transparent"}} type="password" name="password" className="form-control" id="inlineFormInputGroup" placeholder="Confirm Password" />
                    </div>
                </div>

                <button onClick={(e)=>loginHandler(e)} className="btn btn-success mt-3 fs-4" style={{letterSpacing:"1px"}}>LOGIN</button>

                <div className="col col-12 mt-1">
                    <div className="form-group d-flex justify-content-between">
                        <span>Don't have account ?</span>
                        <button onClick={()=> setAuthToggle("register")} style={{background:"transparent", border:"none"}}>Create Account</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Login