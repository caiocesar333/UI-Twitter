import { Meta, StoryObj } from '@storybook/react'

import { Footer, FooterProps } from './Footer'

export default {
    title: 'Components/Footer',
    component: Footer,
    args: {
        children: 'Footer',
    },
    argTypes: {
    }

} as Meta<FooterProps>

export const Default: StoryObj<FooterProps> = {}

