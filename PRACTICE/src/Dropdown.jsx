import { useState } from "react";


function Dropdown(){

    const[city,setCity]=useState("no city selected")

return(
    <div>
        <h1>Select City</h1>
        <select defaultValue={"Bangalore"}onChange={(event)=>setCity(event.target.value)}>
            <option value="noida">Noida</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
        </select>
        <br></br>
       
        <h1>Selected city ;{city}</h1>
    </div>
)

}

export default Dropdown;