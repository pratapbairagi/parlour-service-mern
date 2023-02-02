import "./loading.css"

const Loading = () => {
    return(
        <div style={{height:"100%", width:"100%", display:"grid", placeItems:"center", position:"absolute", top:"0", left:"0", zIndex:"21"}}>
            <div className="spinner">

            </div>
        </div>
    )
}

export default Loading