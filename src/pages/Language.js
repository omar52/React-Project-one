import { useContext } from "react";
import { LanguageContext } from "../context/Language";

const Language = () => {
    const { setContextLang} = useContext(LanguageContext)
    return ( 
        <div className="text-center mt-5">
            <h2>Application Language</h2>
            <div style={{maxWidth:"30vw"}} className="border border-2 rounded-4 mt-3 p-3 text-center">
                <h3>Select Your Language</h3>
                <button onClick={()=>{setContextLang("En")}} className="btn btn-secondary me-2">English Language</button>
                <button onClick={()=>{setContextLang("Ar")}} className="btn btn-secondary me-2" >Arabic Language</button>
            </div>

        </div>
     );
}
 
export default Language;