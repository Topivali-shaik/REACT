import { useState } from "react";
function RadioButton(){
        
        const [gender,setGender]=useState("Female");
        return(
            <div>

            <h1>Select Gender</h1>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender"value={"Male"} id ="male"checked={gender == "Male"}/>
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender"value={"Female"} id="female"checked={gender == "Female"}/>
            <label htmlFor="female">Female</label>

            <h1>Selected Gender {gender}</h1>
            </div>
        )




}


export default RadioButton;