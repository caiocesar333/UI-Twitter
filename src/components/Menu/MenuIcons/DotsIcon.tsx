import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface DotsIconProps{
    children?: any;
}

export function DotsIcon({ children }: DotsIconProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\more.svg"></img>
    )
}

export default DotsIcon