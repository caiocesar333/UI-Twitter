import React from 'react';

import { Input } from './style';


export interface SearchBarProps {
    children?: any;
}


export function SearchBar({ children }: SearchBarProps) {
    return (
        <div className='flex'>
            <img className="absolute ml-3 mt-3" src="src\assets\claro\Lupa.svg"></img>
            <Input className="focus: outline-primary-blue" placeholder="Search Twitter" />
        </div>
    );
}

export default SearchBar;