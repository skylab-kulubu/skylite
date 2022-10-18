import React from "react";
import logo from "../images/logo.png";
import skylablogo from "../images/skylablogo.png";
import {MdAssignmentInd,MdEmail} from "react-icons/md";

const Footer = (props) => {
    return (<>
    <div className="flex flex-col md:flex-row w-full justify-around bg-[#0c164f] gap-4 p-4 text-white">
        <div className="w-full md:w-1/3">
            <img className="h-32 mx-auto" src={logo} alt=""></img>
        </div>
        <div className="flex flex-col justify-between h-full gap-4 w-full md:w-1/3">
            <h1 className="text-2xl xl:text-4xl underline">{props.lang.lang==="en"? "Contact":"İletişim"}</h1>
            <h2 className="flex gap-4 xl:text-xl"><MdEmail size={24}/>tolga.selimoglu@std.yildiz.edu.tr</h2>
            <h2 className="flex gap-4 xl:text-xl"><MdAssignmentInd size={24}/>Tolga Selimoglu, {props.lang.lang==="en"?"SKYLITE TEAM LEADER":"SKYLITE Ekip Lideri"}</h2>
        </div>
        <div className="md:w-1/3 hidden md:block">
            <img className="h-32 mx-auto" src={skylablogo} alt=""></img>
        </div>
    </div>
    </>)
};

export default Footer;
