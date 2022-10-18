import React from "react";
import muy from "../images/muy.png";
import sat from "../images/sat.png";

const Projeler = (props) => {
    return(<>
    <div id="proje" className="flex flex-col md:flex-row w-full bg-white p-4">
        <div className="p-4 flex flex-col justify-between w-full md:w-1/2">
            <div className="my-auto mx-auto">
            <img src={muy} alt=""/>
            <img className="w-64" src={sat} alt=""/>
            </div>
        </div>
        <div className="my-auto mx-auto flex flex-col gap-2 w-full md:w-1/2">
            <h1 className="font-extrabold text-3xl text-[#0c164f] text-center xl:text-5xl">{props.lang.lang ==="en" ? "TURKSAT Contest of Model Satellite" :"TÜRKSAT Model Uydu Yarışması"}</h1>
            <h2 className="font-bold text-xl text-[#0c164f] xl:text-3xl">{props.lang.lang === "en" ? "What is It?" :"Nedir?" } </h2>
            <p className="xl:text-xl">{props.lang.lang ==="en" ? "Contest of Model Satellite, which is organised under the sponsorship of TURKSAT, aims to raise awareness of young engineering students about communication systems. Also the goal is teach the young engineers how multidisciplines work together." :"Türksat sponsorluğunda düzenlenen model uydu yarışması, ülkemizde okuyan genç mühendis adaylarının özellikle haberleşme alanında bilgilenmesini ve multidisipliner bir yapının nasıl ortaya çıktığını öğrenmesi amacıyla yürürlülüğe girmiştir."}</p>
            <p className="xl:text-xl">{props.lang.lang ==="en" ? "Teams which completes the stages of POR,PDR,CDR and QR can get to final stage, and could see their satellite in the sky.":"POR,PDR,CDR ve QR aşamalarını başarıyla tamamlayan ekipler final aşamasına katılmaya, tasarladığı model uyduyu göklerde görmeye hak kazanıyor."}</p>
            <h2 className="font-bold text-xl text-[#0c164f] xl:text-3xl">SKYLITE MUY</h2>
            <p className="xl:text-xl">{props.lang.lang==="en"? "SKYLITE will be in the TEKNOFEST contest of model satellite as a contestant in 2023":"Skylite ekibi 2023 Teknofest'te yarışmaya katılım gösterecektir."}</p>
        </div>
    </div>
    </>)
};

export default Projeler;