import { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuProps } from '../Menu/Menu'

export default {
    title: 'Components/Menu',
    component: Menu,
    args: {
        children:[<li>Explore</li>,
                  <li>Notifications</li>,
                  <li>Messages</li>,
                  <li>Bookmarks</li>,
                  <li>Lists</li>,
                  <li>Profile</li>,
                  <li>More</li>,
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

