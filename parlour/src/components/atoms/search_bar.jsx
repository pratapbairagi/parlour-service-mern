import { useState } from "react";
import sectionData from "../../data/sectionData.json";
import FormInput from "../ui/formInput";
import {Search} from "react-bootstrap-icons"

const SearchBar = ({searchData}) => {
    
    var [searchInputValue, setSearchInputValue] = useState("")
    
    const searchInputFunction = (e) =>{
        setSearchInputValue( e.target.value )
    }

    const searchSubmitHandler = () => {

     document.querySelectorAll("h4").forEach((el,i)=>{
        const x = el.innerText.toUpperCase().includes(searchInputValue.toUpperCase())
        x == true ? el.style.background = "yellow" : el.style.background = ""
     })

        const v = sectionData.filter((v)=>{
            if( v.category.toUpperCase().includes( searchInputValue.toUpperCase() ) != false  ){
                return v.category.toUpperCase().includes( searchInputValue.toUpperCase() )
            }
            else if( v.title.toUpperCase().includes( searchInputValue.toUpperCase() ) != false ){
                return v.title.toUpperCase().includes( searchInputValue.toUpperCase() )
            }
        })
       searchData(v)
    }

    return (
        <div className="input-group input-group-sm w-100" style={{ minWidth: "180px", maxHeight: "35px", maxWidth: "200px" }}>
            <FormInput type={"search"} name={"search"} placeholder={"search.."} minLength={"0"} functions={searchInputFunction} maxLength={null} class={"form-control"} css={{background:"transparent", border:"none", borderBottom:"1px solid grey", borderRadius:"0", padding:"1px 8px", color:"grey", fontSize:"80%"}}/>
            <span style={{background:"transparent", border:"none", borderBottom:"1px solid grey", borderRadius:"0"}} onClick={searchSubmitHandler} className="input-group-text btn btn-primary py-0 d-flex justify-content-center align-items-center">
               <Search size="18" color="grey"/>
            </span>
        </div>
    )
}

export default SearchBar