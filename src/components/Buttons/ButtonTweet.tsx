import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';



export interface ButtonTProps {
    children?: any;
    
}

export function ButtonTweet({ children }: ButtonTProps) {
    
    return (
        <button  className="py-2 px-5 mr-8 bg-primary-blue opacity-50 text-white border border-primary-blue font-sf font-normal text-sm rounded-full hover:opacity-100"> 
        Tweet</button>
    )
    

}

