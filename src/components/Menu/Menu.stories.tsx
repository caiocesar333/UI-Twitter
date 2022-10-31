import { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuProps } from './Menu'

export default {
    title: 'Components/Menu',
    component: Menu,
    args: {
        children:[
                ],
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<MenuProps>

export const Default: StoryObj<MenuProps> = {}

