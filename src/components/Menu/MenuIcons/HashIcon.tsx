import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface HashIconProps{
    children?: any;
}

export function HashIcon({ children }: HashIconProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\explore.svg"></img>
    )
}

export default HashIcon