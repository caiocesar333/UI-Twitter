import React from 'react';

import { Container } from './style';
import { New } from '../News/New';
import { New2 } from '../News/New2';
import { New3 } from '../News/New3';

export interface WhatsHappeningProps {
  children?: any;
}


export function WhatsHappening({ children }: WhatsHappeningProps) {

  const showError: any = () => {
    window.location.href = "page404.html"
  }

  return (
    <Container>
      <span className="font-bold"> Whats Happening </span>
      <New />
      <New2 />
      <New3 />
      <span onClick={showError} className="text-primary-blue text-sm hover:cursor-pointer">Show More</span>
    </Container>
  );
}

export default WhatsHappening;