import {Meta, Story} from '@storybook/react/types-6-0'
import {AvatarList} from '../components/AvatarList'
import githubUsers from '../mocks/githubUsersList.json'
import {GithubUser} from '../types/GithubUsersTypes'

export default {
  title: 'AvatarList',
  component: AvatarList,
  argTypes: {},
  args: {},
} as Meta

const githubUsersTyped: GithubUser[] = githubUsers

const Template: Story = () => {
  return <AvatarList githubUsers={githubUsersTyped} />
}

/**
 * UsersPerPageIndex of our App
 */
export const UsersPerPageIndexDefault = Template.bind({})
