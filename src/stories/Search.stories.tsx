import {Meta, Story} from '@storybook/react/types-6-0'
import {Search} from '../components/Search'

export default {
  title: 'Search',
  component: Search,
  argTypes: {},
  args: {},
} as Meta

const Template: Story = () => {
  return <Search />
}

/**
 * Search of our App
 */
export const SearchComponent = Template.bind({})
