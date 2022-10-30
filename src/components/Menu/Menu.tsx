import React from 'react';
import { ButtonDefault } from '../Buttons/ButtonDefault';

import { Logo } from './MenuIcons/Logo';
import { HomeIcon } from './MenuIcons/HomeIcon';
import { HashIcon } from './MenuIcons/HashIcon';
import { BellIcon } from './MenuIcons/BellIcon';
import { EnvIcon } from './MenuIcons/EnvIcon';
import { MarkIcon } from './MenuIcons/MarkIcon';
import { ListIcon } from './MenuIcons/ListIcon';
import { ProfileIcon } from './MenuIcons/ProfileIcon';
import { DotsIcon } from './MenuIcons/DotsIcon';


import {
    Container,
    Topside,
    MenuButton,
    MenuText
} from "./style"

export interface MenuProps {
    children?: any;
}


export function Menu({ children }: MenuProps) {
    return (
        <Container>
            <Logo />
            <Topside>     
                <MenuButton>
                    <HomeIcon />
                    <HashIcon />
                    <BellIcon />
                    <EnvIcon />
                    <MarkIcon />
                    <ListIcon />
                    <ProfileIcon />
                    <DotsIcon />
                </MenuButton>
                <MenuText>
                    <span className="my-3 font-sf font-bold text-base hover:cursor-pointer">Home</span>
                    <span className="my-3 font-sf font-bold text-base hover:cursor-pointer">Explore</span>
                    <span className="my-3 font-sf font-bold text-base hover:cursor-pointer">Notifications</span>
                    <span className="my-3 font-sf font-bold text-base hover:cursor-pointer">Messages</span>
                    <span className="my-3 font-sf font-bold text-base hover:cursor-pointer">Bookmarks</span>
                    <span className="my-3 font-sf font-bold text-base hover:cursor-pointer">Lists</span>
                    <span className="my-3 font-sf font-bold text-base hover:cursor-pointer">Profile</span>
                    <span className="my-3 font-sf font-bold text-base hover:cursor-pointer">More</span>
                </MenuText>
            </Topside>
            <ButtonDefault />
        </Container>
    )
}

export default Menu