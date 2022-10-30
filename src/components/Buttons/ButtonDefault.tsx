import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps{
    children?: any;
}

export function ButtonDefault({ children}: ButtonProps){
    return (
        <button className="py-4 px-22 my-2 bg-second-blue text-white font-sf font-normal text-sm text-center rounded-full   hover:bg-primary-blue"> 
        Tweet</button>
    )
}