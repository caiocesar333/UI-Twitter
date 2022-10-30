import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ListIconProps{
    children?: any;
}

export function ListIcon({ children }: ListIconProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\list.svg"></img>
    )
}

export default ListIcon