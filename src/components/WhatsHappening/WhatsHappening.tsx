import React from 'react';

import { Container } from './style';
import { New } from '../News/New';
import { New2 } from '../News/New2';
import { New3 } from '../News/New3';

export interface WhatsHappeningProps {
  children?: any;
}


export function WhatsHappening({ children }: WhatsHappeningProps) {
  return (
    <Container>
      <span className="font-bold"> Whats Happening </span>
      <New/>
      <New2/>
      <New3/>
      <span className="text-primary-blue text-sm">Show More</span>
    </Container>
  );
}

export default WhatsHappening;