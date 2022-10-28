import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    children: any;
    asChild?: boolean;
}

export function ButtonFollow({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={
            clsx("py-2 px-8 bg-transparent text-primary-blue border border-primary-blue borde font-sf font-normal text-sm rounded-full hover:bg-primary-blue hover:text-black ",
            )}
        >{children}</Comp>
    )
}