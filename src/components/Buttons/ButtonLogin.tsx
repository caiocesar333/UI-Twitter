import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonLoginProps {
    children?: any;
}

export function ButtonLogin({ children }: ButtonLoginProps) {
    
    return (
        <button className="py-2 px-6 mr-8 bg-transparent  text-white border border-white font-sf font-normal text-sm rounded-full hover:opacity-100"> 
        Log In</button>
    )
}