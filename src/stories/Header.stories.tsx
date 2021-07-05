import {Header} from '../components/Header'
import {Meta, Story} from '@storybook/react/types-6-0'

export default {
  title: 'Header',
  component: Header,
  argTypes: {},
  args: {},
} as Meta

const Template: Story = () => {
  return <Header />
}

/**
 * Header of our App
 */
export const HeaderWebApp = Template.bind({})
