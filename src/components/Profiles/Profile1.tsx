import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import { Container, Wrapper } from './styleSide'
import { ButtonFollow } from '../Buttons/ButtonFollow';

export interface ProfileTProps {
    children?: any;
}

export function Profile1({ children }: ProfileTProps) {

    return (
        <div className="w-80 mb-4 pt-2 flex-row justify-center">
            <Wrapper>
                <img className="mr-2 rounded-full" src="src\assets\claro\pfp4.svg"></img>
                <div className="flex flex-col">
                    <span className="font-bold">Bessie Cooper</span>
                    <span className="font-normal text-sm">@alessandroveronezi</span>
                </div>
            </Wrapper>
            <ButtonFollow />
        </div>
    )
}

export default Profile1;