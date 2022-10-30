import React from 'react';

import { Container } from './style';
import { New } from '../News/New';

export interface WhatsHappeningProps {
  children?: any;
}


export function WhatsHappening({ children }: WhatsHappeningProps) {
  return (
    <Container>
      <span className="font-bold"> Whats Happening </span>
      <New/>
      <New/>
      <New/>
      <span className="text-primary-blue text-sm">Show More</span>
    </Container>
  );
}

export default WhatsHappening;