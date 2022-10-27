import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps{
    children: any;
    asChild?: boolean;
}

export function ButtonDefault({ children, asChild}: ButtonProps){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={
            clsx("py-4 px-24 bg-primary-blue text-white font-sf font-normal text-sm rounded-full   hover:bg-second-blue",
            )}
            >{children}</Comp>
    )
}