import { useState } from "react"
import Login from "./login"
import RegisterUser from "./register"


const AuthForm = () => {
    const [authToggle, setAuthToggle] = useState("logon")
    return(
        <div className="container-fluid">
            {authToggle === "login" ? 
            <Login setAuthToggle={setAuthToggle}/> : 
            <RegisterUser setAuthToggle={setAuthToggle}/>
        }

        </div>
    )
}

export default AuthForm