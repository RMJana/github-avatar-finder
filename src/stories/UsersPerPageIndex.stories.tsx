import {Meta, Story} from '@storybook/react/types-6-0'
import {UsersPerPageIndex} from '../components/UsersPerPageIndex'

export default {
  title: 'UsersPerPageIndex',
  component: UsersPerPageIndex,
  argTypes: {},
  args: {},
} as Meta

const Template: Story = () => {
  return <UsersPerPageIndex />
}

/**
 * UsersPerPageIndex of our App
 */
export const UsersPerPageIndexDefault = Template.bind({})
