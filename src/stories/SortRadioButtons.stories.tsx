import {Meta, Story} from '@storybook/react/types-6-0'
import {SortRadioButtons} from '../components/SortRadioButtons'

export default {
  title: 'SortRadioButtons',
  component: SortRadioButtons,
  argTypes: {},
  args: {},
} as Meta

const Template: Story = () => {
  return <SortRadioButtons />
}

/**
 * SortRadioButtons of our App
 */
export const SortRadioButtonsDefault = Template.bind({})
