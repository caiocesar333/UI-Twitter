import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface MarkIconProps{
    children?: any;
}

export function MarkIcon({ children }: MarkIconProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\bookmark.svg"></img>
    )
}

export default MarkIcon