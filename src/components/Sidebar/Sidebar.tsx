import React from 'react';

import { Container, SearchWrapper } from './style';
import SearchBar from "../SearchBar/SearchBar"
import WhatsHappening from "../WhatsHappening/WhatsHappening"

export interface SidebarProps {
  children?: any;
}


export function Sidebar({ children }: SidebarProps) {
  return (
    <Container>
      <SearchWrapper>
        <SearchBar />
        <WhatsHappening />
      </SearchWrapper>
      
      {/* <WhoToFollow /> */}
    </Container>
  );
}

export default Sidebar;