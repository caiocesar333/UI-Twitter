import React from 'react';
import { ButtonTweet } from '../Buttons/ButtonTweet';
import { Cards } from '../Cards/Cards';
import { CardsB } from '../Cards/CardsB';
import { CardsC } from '../Cards/CardsC';

import { Container, Header, NewTweet } from './style';

export interface MainProps {
  children?: any;
}


export function Main({ children }: MainProps) {
  return (
    <Container>
      <Header>
        <strong>Home</strong>
        <img className="pr-2 hover:cursor-pointer" id="theme" src="src\assets\claro\theme.svg"></img>
      </Header>
      <NewTweet>
        <div className='w-full flex'>
          <img className="rounded-full" src="src\assets\claro\pfp.svg"></img>
          <h3 className="pl-2">What’s happening?</h3>
        </div>
        <div className='w-full flex py-2 justify-between'>
          <div className="flex">
            <img className="w-10 pl-4 ml-8" src="src/assets/claro/image.svg"></img>
            <img className="w-10 pl-4" src="src/assets/claro/gif.svg"></img>
            <img className="w-10 pl-4" src="src/assets/claro/poll.svg"></img>
            <img className="w-10 pl-4" src="src/assets/claro/media.svg"></img>
            <img className="w-10 pl-4" src="src/assets/claro/calendary.svg"></img>
          </div>
          <ButtonTweet></ButtonTweet>
        </div>
      </NewTweet>
      <Cards></Cards>
      <CardsB></CardsB>
      <CardsC></CardsC>
    </Container>
  );
}

export default Main;