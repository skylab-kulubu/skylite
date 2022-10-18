import React, { useState } from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = (props) => {
    const [color,setColor ] = useState({bx:"backG",by:"tglC"});
    const changeColor = () => {
        if(window.scrollY >=600) {
            setColor({bx:"bg-white shadow-lg",by:"tglC2"});
        } else {
            setColor({bx:"bg-[#0c164f]",by:"tglC"});
        }
    }
    window.addEventListener("scroll",changeColor);
    return (<nav className={`z-10 shadow-2xl fixed w-screen overflow-auto flex flex-col md:flex-row  md:justify-between p-1 lg:px-16 transition-all ${color.bx} shadower`}>
        <div className="my-auto mx-auto md:mx-0">
            <img className="h-20" src={logo} alt=""></img>
        </div>
        <div className="my-auto flex md:flex">
            <ul className="flex flex-row gap-0 justify-between w-full md:gap-8">
                <li className={`${color.by} text-sm md:text-md font-bold p-2 border-b-2 border-transparent hover:border-blue-900`}><a href="#biz">{props.lang.lang==="en" ? "Who are we" :"Biz Kimiz"}</a></li>
                <li className={`${color.by} text-sm md:text-md font-bold p-2 border-b-2 border-transparent hover:border-blue-900`}><a href="#hedef">{props.lang.lang==="en" ? "Mission Statement" :"Hedeflerimiz"}</a></li>
                <li className={`${color.by} text-sm md:text-md font-bold p-2 border-b-2 border-transparent hover:border-blue-900`}><a href="#proje">{props.lang.lang==="en" ? "Projects" :"Projeler"}</a></li>
            </ul>
        </div>
        <div className="flex items-center justify-center">
  
  <label htmlFor="toggleB" className="flex cursor-pointer">
    <div className="relative">
      <input onClick={()=>{if(props.lang.lang === "tr") {props.setLang({lang:"en",language:"English"})}else if (props.lang.lang==="en"){props.setLang({lang:"tr",language:"Turkish"})}}} type="checkbox" id="toggleB" className="sr-only"/>
      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
    <div className={`ml-3 my-auto text-xs font-medium ${color.by}`}>
      {props.lang.language}
    </div>
  </label>

</div>
        
    </nav>)
};

export default Navbar;