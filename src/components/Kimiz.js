import React from "react";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";

const Kimiz = (props) => {
    return (<div className="flex flex-col p-4 gap-4" id="biz">
    <h1 className="w-full text-center text-white text-3xl font-extrabold text-[#0c164f]">{props.lang.lang==="en" ? "~WHO ARE WE?~" : "~ BİZ KİMİZ ? ~"}</h1>
    <div className="w-full flex flex-col md:flex-row justify-around gap-2">
        <img className="w-full md:w-1/3 rounded-md" alt="" src={c1}></img>
        <div className="text-center w-full md:w-2/3 md:my-auto">
            <h1 className="font-bold text-xl xl:text-3xl">SKYLITE</h1>
            <p className="text-md xl:text-xl">{props.lang.lang ==="en" ? "As a club of Yildiz Technical University, Skylab CS CLUB cares much about R&D. We care continuous development and production. In the meantime, SKYLITE is in a cooperation with other R&D teams." : "Yıldız Teknik Üniversitesi SKY LAB Bilgisayar Bilimleri Kulübü olarak AR-GE mantığını benimseyen, sürekli gelişmeye ve üretmeye önem veren bir ekibiz. Aynı zamanda SKY LAB kulübünün diğer AR-GE ekiplerinin de desteğini alarak sürekli gelişen bir takımız."}</p>
        </div>
    </div>
    <div className="w-full flex flex-col md:flex-row-reverse justify-around  gap-2">
    <img className="w-full md:w-1/3 rounded-md" alt="" src={c2}></img>
        <div className="text-center w-full md:w-2/3 md:my-auto">
            <h1 className="font-bold text-xl xl:text-3xl">{props.lang.lang ==="en" ? "BIRTH of SKYLITE" : "KURULUŞUMUZ" }</h1>
            <p className="text-md xl:text-xl">{props.lang.lang ==="en" ? "SKYLITE, a project team under the SKYSIS EMBEDDED SYSTEM TEAM, is concerned about problems on communication and networking. We aim to minimize the issues. To solve those problems, we're focusing on collabration with each other. In the meantime, we're developing and designing a satellite." :"SKYSIS Gömülü Sistemler ekibinin altında bulunan SKY LITE Uydu Takımı, iletişim ve ağ alanlarındaki sorunları ele alan ve bu alanlardaki sorunları minimuma indirmeyi hedefleyen ekiptir. Bu sorunlara çözüm üretmek için ekip içerisinde kişisel çalışmaların yanında, tüm ekip üyeleri ile bu çalışmaları yaymak, gösterebilmek ve uygulayabilmek adına uydu tasarlama ve üretmeye başlamıştır."}</p>
        </div>
        
    </div>
    <div className="w-full flex flex-col md:flex-row justify-around  gap-2">
        <img className="w-full md:w-1/3 rounded-md" alt="" src={c3}></img>
        <div className="text-center w-full md:w-2/3 md:my-auto">
            <h1 className="font-bold text-xl xl:text-3xl">{props.lang.lang === "en" ? "TARGET" :"AMACIMIZ"}</h1>
            <p className="text-md xl:text-xl">{props.lang.lang ==="en" ? "Our team is working for having a success in international area and increase the popularity of itself." :"Takımımız ulusal ve uluslararası yarışmalara katılmayı, bu yarışmalarda başarılar elde ederek çalışmalarını daha geniş kitlelere yaymayı hedeflemektedir." }</p>
        </div>
    </div></div>)

};

export default Kimiz;