import React from "react";
import il1 from "../images/il1.png";
import il2 from "../images/il2.png";
import il3 from "../images/il3.png";
import il4 from "../images/il4.png";
import "./Hedefler.css";


const Hedefler = (props) => {
    return (<div id="hedef" className="w-full p-4 bg-black flex flex-col md:flex-row backI justify-around">
        <div className="flex flex-row w-full md:w-1/2">
        <div>
            <img className="h-64 hidden md:block" alt="" src={il1}></img>
            <img className="h-64 hidden md:block" alt="" src={il2}></img>
        </div>
        <div>
            <img className="h-64 hidden md:block" alt="" src={il3}></img>
            <img className="h-128 md:h-64" alt="" src={il4}></img>
        </div></div>
        <div className="text-white w-full md:w-1/2 text-center my-auto">
            <h1 className="font-extrabold text-white text-5xl p-2">{props.lang.lang ==="en" ? "MISSION STATEMENT" :"HEDEFLER"}</h1>
            <ul>
                <li className="text-white p-2 xl:text-2xl">-{props.lang.lang === "en" ? "Use and preserve the knowledge that we got from our works"  :"Çalışmalarımızdan edinmiş olduğumuz bilgi ve deneyimi daha ileriye taşımayı,"}</li>
                <li className="text-white p-2 xl:text-2xl">- {props.lang.lang ==="en" ? "Represent the Yildiz Technical University as member of SKYLITE and reach the best stage as soon as possible." :"Türksat tarafından Teknofest kapsamında düzenlenen Model Uydu Yarışmasında okulumuzu ve kulübümüzü en doğru şekilde temsil ederek başarıya ulaşmayı,"}</li>
                <li className="text-white p-2 xl:text-2xl">- {props.lang.lang ==="en" ? "Preserve and transfer the knowledge that we gain from contest, and use it for future projects of our team." :"Tasarlanan model uyduyla Teknofest’ te edindiğimiz bilgi ve deneyimi uluslararası yarışmalara taşıyarak kulübümüzü ve ülkemizi en iyi şekilde temsil etmeyi,"}</li>
                <li className="text-white p-2 xl:text-2xl">- {props.lang.lang ==="en" ? "Integrate our model satellite with other systems and enlarge our projects." :"Oluşturulan model uydunun farklı sistemler ile geliştirilerek daha geniş kapsamlı projeler dönüştürülmesini hedeflemekteyiz."}</li>
            </ul>
        </div>
    </div>)
};

export default Hedefler;