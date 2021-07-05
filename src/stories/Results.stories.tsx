import {Meta, Story} from '@storybook/react/types-6-0'
import {Results} from '../components/Results'
import githubUsersResponse from '../mocks/githubUsersResponse.json'
import {rest} from 'msw'
import {AppContext} from '../context/AppContext'
import {Grommet} from 'grommet'
import React from 'react'
import {AppContextProps, SortOption} from '../types/AppContextTypes'

const apiGateway: string = `https://api.github.com/search/users?q=rmq&page=1&per_page=9`

export default {
  title: 'Results',
  component: Results,
  argTypes: {},
  args: {},
} as Meta

const Template: Story = () => {
  const [context, setContext] = React.useState<AppContextProps>({
    githubLogin: '',
    submitted: true,
    sort: SortOption.LoginDESC,
    usersPerPage: '9',
    usersPerPageChanged: false,
    page: 1,
  })
  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  }
  return (
    <Grommet theme={theme}>
      <AppContext.Provider value={[context, setContext]}>
        <Results />
      </AppContext.Provider>
    </Grommet>
  )
}

/**
 * ResultsWithMockData of our App
 */
export const ResultsWithMockData = Template.bind({})
ResultsWithMockData.parameters = {
  msw: [
    rest.get(apiGateway, (req, res, ctx) => {
      return res(ctx.json(githubUsersResponse))
    }),
  ],
}
/**
 * ResultsWithError of our App
 */
export const ResultsWithError = Template.bind({})
ResultsWithError.parameters = {
  msw: [
    rest.get(apiGateway, (req, res, ctx) => {
      return res(
        ctx.status(422),
        ctx.json({
          message: 'Only the first 1000 search results are available',
          documentation_url: 'https://docs.github.com/v3/search/',
        }),
      )
    }),
  ],
}
