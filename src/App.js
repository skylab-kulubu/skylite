import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Overlay from "./components/Overlay";
import { useState} from "react";

function App() {
  const [lang,setLang] = useState({lang:"tr",language:"Turkish"});
  return (<>
    <Navbar lang={lang} setLang={setLang}/>
    <Homepage lang={lang} setLang={setLang}/>
    
    </>
  );
}

export default App;
