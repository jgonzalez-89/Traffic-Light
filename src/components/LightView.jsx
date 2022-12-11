import React, { useState } from "react";

const LightView = () => {
    const [color, setColor] = useState("");



    return (
        <div className="traffic-light">

            <div onClick={() => setColor("red")}
                className={"light red" + (color === "red" ? " glow" : "")}></div>

            <div onClick={() => setColor("yellow")}
                className={"light yellow" + (color === "yellow" ? " glow" : "")}></div>

            <div onClick={() => setColor("green")}
                className={"light green" + (color === "green" ? " glow" : "")}></div>

            <button onClick={() => {
                color === "red" ? setColor("yellow") : ( color === "yellow" ? setColor("green") : setColor("red") )
            }} className={"button"}>Click me!</button>
        </div>
    )
}

export default LightView