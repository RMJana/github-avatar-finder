import React from 'react'
import {Grommet} from 'grommet'
import {addDecorator} from '@storybook/react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {AppContext} from '../src/context/AppContext'
import {initializeWorker, mswDecorator} from 'msw-storybook-addon'
import {SortOption} from '../src/types/AppContextTypes'

initializeWorker()
addDecorator(mswDecorator)

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

const client = new QueryClient()

addDecorator(Story => {
  const [context, setContext] = React.useState({
    githubLogin: '',
    submitted: false,
    sort: SortOption.LoginDESC,
    usersPerPage: '9',
    usersPerPageChanged: false,
    page: 1,
  })
  return (
    <QueryClientProvider client={client}>
      <Grommet theme={theme}>
        <AppContext.Provider value={[context, setContext]}>
          <Story />
        </AppContext.Provider>
      </Grommet>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})
