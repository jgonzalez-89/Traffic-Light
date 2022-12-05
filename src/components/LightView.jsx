import React, { useState } from "react";
import Button from "./Button";



const LightView = () => {
    const [color, setColor] = useState("");


    return (
        <div className="container traffic-light">
            
            {<Button colorValue={color}/>}

            <div onClick={() => setColor("red")}
                className={
                    "light red" + (color === "red" ? " glow" : "")
                }></div>
            <div onClick={() => setColor("yellow")}
                className={
                    "light yellow" + (color === "yellow" ? " glow" : "")
                }></div>
            <div onClick={() => setColor("green")}
                className={
                    "light green" + (color === "green" ? " glow" : "")
                }></div>
        </div>
    )
}

export default LightView