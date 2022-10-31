import React from "react";
import Footer from "../Footer/Footer";

import Main from "../Main/Main"
import Menu from "../Menu/Menu"
import Sidebar from "../Sidebar/Sidebar"

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
                <Sidebar/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Layout