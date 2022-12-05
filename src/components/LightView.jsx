import React, { useState, useEffect } from "react";



const LightView = (light, setLight) => {
    const [selectedColor, setSelectedColor] = useState("");

    const objetoLight = selectedColor
    console.log(objetoLight)
        
    // setLight([...light, objetoLight])

    return (
        <div className="container traffic-light">
            <div onClick={(e) => setSelectedColor("red")}
                className={
                    "light red" + (selectedColor === "red" ? " glow" : "")
                }></div>
            <div onClick={() => setSelectedColor("yellow")}
                className={
                    "light yellow" + (selectedColor === "yellow" ? " glow" : "")
                }></div>
            <div onClick={() => setSelectedColor("green")}
                className={
                    "light green" + (selectedColor === "green" ? " glow" : "")
                }></div>
        </div>
    )
}

export default LightView