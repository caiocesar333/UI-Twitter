import React, { useState } from "react";



export interface InputProps{
    children?: any;
}


export function Input({ children}: InputProps){

     let tweet:any =  useState('');

    return (
        <input name="name" onChange={event =>{
            tweet = event.target.value
        }} className="ml-3 outline-none font-normal" placeholder="Whats Happening?" ></input>
    )
}


