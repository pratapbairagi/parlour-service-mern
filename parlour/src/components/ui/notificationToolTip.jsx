

const NotificationToolTip = ({message}) => {
    return(
        <div className="container-fluid" style={{position:"fixed", top:"0", left:"0", width:"100%", height:"8vh", zIndex:"21", background:`${message.success ? "green" : "red"}`, display:"grid", placeItems:"center"}}>
            <h5 style={{width:"max-content", maxWidth:"100%", color:"whitesmoke", textAlign:"center", position:"relative", fontWeight:"600", letterSpacing:"1px"}}>{message.mssg}</h5>
        </div>
    )
}

export default NotificationToolTip