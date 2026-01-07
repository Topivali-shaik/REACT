import {useState} from "react";

function Toogle(){
    const [showText,setShowText]=useState(true);

    return(
        <>
        <button onClick={()=>setShowText(!showText)}>
            Toogle</button>
            
            {showText && <h1>Hello React</h1>}
            {!showText && <h1>Hi Sir</h1>}
            
            </>
            
    );
}

export default Toogle;