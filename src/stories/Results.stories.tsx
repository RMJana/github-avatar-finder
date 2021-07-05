import {Meta, Story} from '@storybook/react/types-6-0'
import {Results} from '../components/Results'
import githubUsersResponse from '../mocks/githubUsersResponse.json'
import {GithubUser} from '../types/GithubUsersTypes'
import {rest} from 'msw'
import {useAppContext} from '../context/AppContext'

const apiGateway: string = `https://api.github.com/search/users?q=rmq&page=1&per_page=9`
const msw = [
  rest.get(apiGateway, (req, res, ctx) => {
    return res(ctx.json(githubUsersResponse))
  }),
]

export default {
  title: 'Results',
  component: Results,
  argTypes: {},
  args: {},
  parameters: {
    msw,
  },
} as Meta

const Template: Story = () => {
  return <Results />
}

/**
 * ResultsWithMockData of our App
 */
export const ResultsWithMockData = Template.bind({})

/**
 * ResultsWithError of our App
 */
export const ResultsWithError = Template.bind({})

/**
 * ResultsLoding of our App
 */
export const ResultsLoding = Template.bind({})
