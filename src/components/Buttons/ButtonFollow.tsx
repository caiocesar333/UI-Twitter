import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    children?: any;

}

export function ButtonFollow({ children }: ButtonProps) {

    return (
        <button className=" float-right ml-1 mt-4 px-8 bg-transparent text-primary-blue border border-primary-blue  font-sf font-normal text-sm rounded-full hover:bg-primary-blue hover:text-black "> 
        Follow</button>
    )
}