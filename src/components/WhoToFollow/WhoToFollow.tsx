import React from 'react';

import { Container } from './style';

import { Profile1 } from '../Profiles/Profile1';
import { Profile2 } from '../Profiles/Profile2';



export interface WhoToFollowProps {
  children?: any;
}


export function WhoToFollow({ children }: WhoToFollowProps) {
  return (
    <Container>
        <span className=" font-bold mb-2">Who to follow</span>
        <Profile1/>
        <Profile2/>
        <span className="text-primary-blue text-sm">Show more</span>
    </Container>
  );
}

export default WhoToFollow;