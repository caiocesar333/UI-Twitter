import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface EnvIconProps{
    children?: any;
}

export function EnvIcon({ children }: EnvIconProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\messages.svg"></img>
    )
}

export default EnvIcon