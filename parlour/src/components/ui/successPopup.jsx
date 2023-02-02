

const SuccessPopup = () => {
    return(
        <div className="container-fluid p-0" style={{position:"fixed", zIndex:"5", width:"100%", left:"0", height:"10vh", top:"0"}}>
            <div className="row" style={{width:"100%", height:"100%"}}>
                <div className="col col-10" style={{width:"100%", background:"green", display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                    <h3 style={{fontWeight:"900", color:"white", letterSpacing:"1px", textAlign:"center"}}>Message Sent Successfully !</h3>
                </div>
            </div>
        </div>
    )
}

export default SuccessPopup