

const SubNav = ({subNavToggleData}) =>{
    return(
            <ul className="subNav" style={{display:`${subNavToggleData}`}}>
                                <li>
                                    <img src="/images/eyebrow_logo.jpeg" alt="" />
                                    <span> Eyebrow </span>
                                </li>
                                <li>
                                <img src="/images/face_beauty_logo.jpeg" alt="" />
                                    <span> Face </span>
                                </li>
                                <li>
                                <img src="/images/hairCutting_logo.jpeg" style={{height:"28px"}} alt="" />
                                   <span> Hair </span>
                                </li>
                                <li>
                                <img src="/images/nail_logo2.jpeg" style={{height:"28px"}} alt="" />
                                   <span> Nail </span>
                                </li>
                            </ul>
    )
}

export default SubNav