import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface MenuProps{
    size?: 'sm' | 'md' | 'lg';
    children: any;
    asChild?: boolean;
}

export function Menu({size ='md', children, asChild}: MenuProps){
    const Comp = asChild ? Slot : 'ul';

    return(
        <Comp className={
            clsx("black font-sf font-normal leading-6",{
                'text-md': size === 'md',
            })}
            >{children}</Comp>
    )
}