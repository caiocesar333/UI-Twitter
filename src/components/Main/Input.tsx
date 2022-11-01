import React, {useState} from "react";

export interface InputProps{
    children?: any;
}


export function Input({ children}: InputProps){

    const [toDo, setToDo] = useState('')


    return (
        <input onChange={e=>setToDo(e.target.value) }  maxLength={15} name="name"
         className="w-full ml-3 outline-none font-normal" placeholder="Whats Happening?" value={toDo} ></input>
    )
}


