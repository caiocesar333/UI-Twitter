import React from 'react';

import { ButtonTweet } from '../Buttons/ButtonTweet';
import { Cards } from '../Cards/Cards';
import { CardsB } from '../Cards/CardsB';
import { CardsC } from '../Cards/CardsC';

import { Input } from './Input';

import { Container, Header, NewTweet } from './style';

import { ProfileImage, Card} from "../Cards/style"


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
          <img className="ml-2 rounded-full" src="src\assets\claro\pfp.svg"></img>
          <Input/>
        </div>
        <div className='w-full flex py-2 justify-between'>
          <div className="flex">
            <img className="w-10 pl-4 ml-8  hover:cursor-pointer " src="src/assets/claro/image.svg"></img>
            <img className="w-10 pl-4 hover:cursor-pointer" src="src/assets/claro/gif.svg"></img>
            <img className="w-10 pl-4 hover:cursor-pointer" src="src/assets/claro/poll.svg"></img>
            <img className="w-10 pl-4 hover:cursor-pointer" src="src/assets/claro/emoji.svg"></img>
            <img className="w-10 pl-4 hover:cursor-pointer" src="src/assets/claro/calendary.svg"></img>
          </div>
          <button className="py-2 px-5 mr-8 bg-primary-blue opacity-50 text-white border border-primary-blue font-sf font-normal text-sm rounded-full hover:opacity-100"> 
        Tweet</button>
        </div>
      </NewTweet>
      <Cards></Cards>
      <CardsB></CardsB>
      <CardsC></CardsC>
    </Container>
  );

}

export default Main;