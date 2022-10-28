import React from 'react';
import { Container, Card, ProfileImage, Banner } from "./style"

export interface CardProps {
    children?: any;
}


export function Cards({ children }: CardProps) {
    return (
        <Container>
            <ProfileImage>
                <img className='rounded-full' src="src\assets\claro\pfp2.svg"></img>
            </ProfileImage>

            <Card>
                <div className='flex'>
                    <h4>Devon Lane</h4>
                    <h6>@johndue</h6>
                </div>

                <p>Tom is in a big hurry.</p>
               <Banner>
                <img className="max-w-lg max-h-xs mt-2 rounded-2xl" src="src\assets\claro\banner1.png" />
               </Banner>

                <div className="flex" >
                    <img className=' my-6 h-4 ml-1 hover:cursor-pointer' src="src\assets\claro\share.svg"></img>
                    <p className="ml-2 mr-20 my-5 ">61</p>
                    <img className=" my-6 h-4 hover:cursor-pointer" src="src\assets\claro\retweet.svg"></img>
                    <p className="ml-2 mr-20 my-5 ">12</p>
                    <img my-6  className=' my-6 h-4 hover:cursor-pointer' src="src\assets\claro\like.svg"></img>
                    <p className="ml-2 mr-20 my-5 ">6,2</p>
                    <img className=" my-6 h-4 hover:cursor-pointer" src="src\assets\claro\comment.svg"></img>
                    <p className="ml-2 mr-20 my-5 ">61</p>
                </div>

                <p className="text-primary-blue">Show this thread</p>
            </Card>
        </Container>
        
    )
}

export default Cards