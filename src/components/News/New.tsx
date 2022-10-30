import React from 'react';

import { Container } from './style';


export interface NewProps {
    children?: any;
}


export function New({ children }: NewProps) {
    return (
        <Container>
            <span className="text-sm font-thin">Covid . Last Night</span>
            <span className="font-medium">England’s Chief Medical Officer says the UK
                is at the most dangerous time of the pandemic</span>
            <div className="flex-row">
                <span className="text-sm font-thin">Trending with</span> <span className="text-primary-blue">#covid19</span>
            </div>
        </Container>
    );
}

export default New;