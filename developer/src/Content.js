import React from 'react'
import './Content.css'
let num=1;

const myFun=()=>{
    alert("Hello! Bruh whatsup"+" "+ num++);
}

export default function Content() {
    return (
        <div >
         <h1 className="card">i am content</h1>
         <div className="life">
             <img src="public\me.jpg.jpg" alt="my picture" height="2px"></img>
         </div>
           <button onClick={myFun}>click me</button>
        </div>
    )
}
