import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface HomeIconProps{
    children?: any;
}

export function HomeIcon({ children }: HomeIconProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\Home.svg"></img>
    )
}

export default HomeIcon