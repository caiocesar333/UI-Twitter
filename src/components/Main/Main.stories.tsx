import { Meta, StoryObj } from '@storybook/react'

import { Main, MainProps } from './Main'

export default {
    title: 'Components/Main',
    component: Main,
    args: {
        children: 'Main',
    },
    argTypes: {
    }

} as Meta<MainProps>

export const Default: StoryObj<MainProps> = {}

