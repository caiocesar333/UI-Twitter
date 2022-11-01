import { Meta, StoryObj } from '@storybook/react'

import { BellIcon, BellIconProps } from './BellIcon'

export default {
    title: 'Components/BellIcon',
    component: BellIcon,
    args: {
        children: 'BellIcon',
    },
    argTypes: {
    }

} as Meta<BellIconProps>

export const Default: StoryObj<BellIconProps> = {}

