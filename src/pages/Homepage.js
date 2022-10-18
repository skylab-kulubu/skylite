import React from "react";
import "./Homepage.css";
import satelitte from "../images/satelitte.svg";
import Kimiz from "../components/Kimiz";
import Hedefler from "../components/Hedefler";
import Projeler from "../components/Projeler";
import Footer from "../components/Footer";


const Homepage = (props) => {
    return (<>
    <div className="z-9 absolute w-full mt-20 z-2">
        <div className="p-8 h-screen bg-[#0c164f] flex flex-col md:flex-row justify-around">
           <div className="my-auto mx-auto">
               <img className="h-64 imaj my-auto xl:h-96" src={satelitte} alt="" />
            </div>
            <div className="my-auto text-white flex flex-col text-center mx-auto gap-4">
               <h1 className="font-extrabold text-4xl xl:text-6xl">{props.lang.lang === "en" ? "SKYLITE : A Model Team" :"SKYLITE Model Uydu Takımı"}</h1>
               <p className="text-xl xl:text-2xl">{props.lang.lang==="en" ? "Skylite is a suborganisation under the SKYLAB club as a modal satellite team." : "Skylite, Skylab kulübü altında faaliyet gösteren model uydu takımıdır."}</p>
            </div>
        </div>
        <Kimiz lang={props.lang}/>
        <Hedefler lang={props.lang} />
        <Projeler lang={props.lang}/>
        <Footer lang={props.lang}/>
    </div></>)
};

export default Homepage;