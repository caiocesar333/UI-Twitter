import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ProfileIconProps{
    children?: any;
}

export function ProfileIcon({ children }: ProfileIconProps){

    return(
        <img className="my-3 w-6 hover:cursor-pointer" src="src\assets\claro\profile.svg"></img>
    )
}

export default ProfileIcon