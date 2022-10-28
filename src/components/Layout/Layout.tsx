import React from "react";

import Main from "../Main/Main"

import { Container, Wrapper }from "./style"

export interface LayoutProps{
    children: any;
}


export function Layout({ children}: LayoutProps){
    return (
        <Container>
            <Wrapper>
                {/* <MenuBar/> */}
                <Main/>
                {/* <SideBar/> */}
            </Wrapper>
        </Container>
    )
}

export default Layout