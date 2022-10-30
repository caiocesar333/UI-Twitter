import React from "react";

import Main from "../Main/Main"
import Menu from "../Menu/Menu"

import { Container, Wrapper }from "./style"

export interface LayoutProps{
    children: any;
}


export function Layout({ children}: LayoutProps){
    return (
        <Container>
            <Wrapper>
                <Menu/>
                <Main/>
                {/* <SideBar/> */}
            </Wrapper>
        </Container>
    )
}

export default Layout