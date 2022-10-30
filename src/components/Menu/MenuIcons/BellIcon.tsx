import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface BellIconProps{
    children?: any;
}

export function BellIcon({ children }: BellIconProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\notifications.svg"></img>
    )
}

export default BellIcon