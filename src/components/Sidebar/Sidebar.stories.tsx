import { Meta, StoryObj } from '@storybook/react'

import { Sidebar, SidebarProps } from './Sidebar'

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
    args: {
        children: 'Sidebar',
    },
    argTypes: {
    }

} as Meta<SidebarProps>

export const Default: StoryObj<SidebarProps> = {}

