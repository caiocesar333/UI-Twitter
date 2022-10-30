import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import { Container } from './style'

export interface ProfileTProps {
    children?: any;
}

export function Profile({ children }: ProfileTProps) {

    return (
        <Container>
            <img className="mr-2 rounded-full" src="src\assets\claro\pfp.svg"></img>
            <div className="flex flex-col"> 
                <span className="font-bold">Jerome</span>
                <span className="font-normal text-sm">@afonsoinocente</span>
            </div>
            <img className="ml-8" src="src\assets\claro\3dots.svg"></img>
        </Container>
    )
}

export default Profile;