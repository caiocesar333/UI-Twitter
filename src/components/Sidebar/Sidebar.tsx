import React from 'react';

import { Container, SearchWrapper } from './style';
import SearchBar from "../SearchBar/SearchBar"
import WhatsHappening from "../WhatsHappening/WhatsHappening"
import WhoToFollow from "../WhoToFollow/WhoToFollow"

export interface SidebarProps {
  children?: any;
}


export function Sidebar({ children }: SidebarProps) {
  return (
    <Container>
      <SearchWrapper>
        <SearchBar />
        <WhatsHappening />
        <WhoToFollow />
      </SearchWrapper>
    
    </Container>
  );
}

export default Sidebar;