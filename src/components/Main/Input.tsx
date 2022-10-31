import React from "react";



export interface InputProps{
    children?: any;
}


export function Input({ children}: InputProps){

    return (
        <input name="name" onChange={event =>{
        }} className="ml-3 outline-none font-normal" placeholder="Whats Happening?" ></input>
    )
}


