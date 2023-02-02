import "./header.css";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import $ from "jquery";
import SubNav from "../atoms/subNav";
import SearchBar from "../atoms/search_bar";
import ToggleBtn from "../ui/toggleBtn";
import NavLogo from "../atoms/NavLogo";
import ToggleCancelBtn from "../atoms/toggleCancelBtn";
import MidNavLogo from "../atoms/midNavLogo";
import { useState } from "react";
import { PersonCircle, BoxArrowInRight, ListStars, PersonFillGear, People, BoxArrowRight } from "react-bootstrap-icons";
import { useRef } from "react";
import axios from "axios";

const Header = ({ searchData, userAuth }) => {

    let [toggle, setToggle] = useState("none");
    const navigate = useNavigate()


    $(function () {
        $(".handBurger").on("click", function () {
            $(".mid_nav_container").addClass("activeNav")

        })


        $(".handBurgerClose").on("click", function () {
            $(".mid_nav_container").removeClass("activeNav")
        })

        $(".navlink").on("click", function (e) {

            if (e.currentTarget.lastChild.textContent == "Sections") {
                return toggle == "none" ? setToggle("flex") : setToggle("none")
            }
            else {
                return setToggle("none")
            }

        })
    })

    // logout user
    const logoutHandler = async () => {
        try {
            axios.get("https://parlour-service-server.vercel.app/user/logout/me", {
                headers: { 
                    "Content-Type": "application/json",
                     Accept : "application/json" 
                    },
                mode : "cors",
                withCredentials : true,
                credentials : "include"
            }).then(res => {
                if (res.data.success) {
                    navigate("/")
                }

            }).catch(er => {
                console.log(er)
            })
        } catch (error) {

        }
    }

    // user toggle
    const userLogoToggleHandler = (e) => {
        const childs = document.getElementById("parent").childNodes

        for (let x = 0; x < childs.length; x++) {
            if (childs[x].style.position === "absolute") {
                childs[x].style.position = "relative"
                document.getElementById("parent").style.gap = "6px"

            }
            else {
                childs[x].style.position = "absolute"
                document.getElementById("parent").style.gap = "0"

            }
        }
    }

    const styleClass_li = "px-1 py-1 d-none d-md-flex d-lg-flex d-xl-flex"
    const styleClass_NavLink = "d-flex flex-column justify-content-center align-items-center navlink"

    return (
        <div className="container-fluid p-0">
            <nav className="navbar_container row px-2">
                <div className="left_nav col col-12 d-flex justify-content-between">
                    <NavLogo />
                    <div className="search_handBurger_container d-flex justify-content-end gap-2 align-items-center">
                        <SearchBar searchData={searchData} />
                        <ToggleBtn />
                    </div>
                </div>

                <div style={{ width: "38px", height: "max-content", position: "fixed", zIndex: "10", top: "8vh", right: "22px" }}>
                    <div id="parent" style={{ position: "relative", width: "42px", height: "max-content", minHeight:"44px", overflow: "hidden", padding: "6px 4px", transition:"1s ease-in-out", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flext-start", alignItems: "center" }}>
                        <PersonCircle color="rgb(203,4,115)" onClick={(e) => userLogoToggleHandler(e)} style={{ cursor: "pointer", position:"absolute", zIndex:"20", background:"white", borderRadius:"50%", boxShadow:"0 0 4px grey", border:"1px solid white" }} size="36px" />

                        {userAuth.success ? <>
                            <span onClick={logoutHandler} style={{ padding: "3px 3px 3px 7px", position: "absolute", zIndex: "19", cursor: "pointer", background:"white", borderRadius:"50%", boxShadow:"0 0 4px grey", top:"6px", border:"1px solid white", background: "rgb(203,4,115)", width: "28px", height: "28px", display: "grid", placeItems: "center" }}>
                                <BoxArrowRight size="18px" color="white" />
                            </span>
                        </> : <>
                            <Link to="/user" style={{ padding: "3px 6px 3px 3px", position: "absolute", zIndex: "19", background:"white", borderRadius:"50%", boxShadow:"0 0 4px grey", top:"6px", border:"1px solid white", background: "rgb(203,4,115)", width: "28px", height: "28px", display: "grid", placeItems: "center" }}>
                                <BoxArrowInRight size="18px" color="white" />
                            </Link>
                        </>
                        }

                        {userAuth.success && <>
                            <Link to="/services" style={{ padding: "3px", position: "absolute", zIndex: "19", background:"white", borderRadius:"50%", boxShadow:"0 0 4px grey", top:"6px", border:"1px solid white", background: "rgb(203,4,115)", width: "28px", height: "28px", display: "grid", placeItems: "center" }}>
                                <ListStars size="20px" color="white" />
                            </Link>
                            <Link to="/profile" style={{ padding: "3px", position: "absolute", zIndex: "19", background:"white", borderRadius:"50%", boxShadow:"0 0 4px grey", top:"6px", border:"1px solid white", background: "rgb(203,4,115)", width: "28px", height: "28px", display: "grid", placeItems: "center" }}>
                                <PersonFillGear size="20px" color="white" />
                            </Link>
                            <Link to="/users" style={{ padding: "3px", position: "absolute", zIndex: "19", background:"white", borderRadius:"50%", boxShadow:"0 0 4px grey", top:"6px", border:"1px solid white", background: "rgb(203,4,115)", width: "28px", height: "28px", display: "grid", placeItems: "center" }}>
                                <People size="20px" color="white" />
                            </Link>

                        </>}
                    </div>
                </div>

                <ul className="mid_nav_container
                position-fixed
                col" >
                    <ToggleCancelBtn />


                    <div className="mid_nav">
                        <MidNavLogo />

                        <NavLink className={styleClass_NavLink} to='/'>
                            <svg className="bi bi-house-door-fill d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="pink" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                            </svg>
                            <li className={styleClass_li}>Home</li>
                        </NavLink>

                        <NavLink className={styleClass_NavLink} to='/section'>
                            <svg className="bi bi-ui-checks d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="pink" viewBox="0 0 16 16">
                                <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <li className={styleClass_li}>Sections</li>
                        </NavLink>
                        <SubNav subNavToggleData={toggle} />

                        <NavLink className={styleClass_NavLink} to='/about'>
                            <svg className="bi bi-exclamation-diamond-fill d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="pink" viewBox="0 0 16 16">
                                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <li className={styleClass_li}>About</li>
                        </NavLink>

                        <NavLink className={styleClass_NavLink} to='/testimonial'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="pink" className="bi bi-star-fill d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <li className={styleClass_li}>Testimonial</li>
                        </NavLink>

                        <NavLink className={styleClass_NavLink} to='/contact'>
                            <svg className="bi bi-person-lines-fill d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="pink" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg>
                            <li className={styleClass_li}>Contact</li>
                        </NavLink>

                    </div>
                </ul>

            </nav>
        </div>
    )
}

export default Header