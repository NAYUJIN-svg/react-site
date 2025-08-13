import { useState } from "react"

export default function ColorChange() {
    const [color,setColor] =useState("purple")

    return (
        <>
            <h2 style={{color}}>색상변경</h2>
            <button onClick={() => setColor("red")}>빨강</button>
            <button onClick={() => setColor("yellow")}>노랑</button>
            <button onClick={() => setColor("green")}>초록</button>


        </>
    )
}