import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface LogoProps{
    children?: any;
}

export function Logo({ children }: LogoProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\Logo.svg"></img>
    )
}

export default Logo