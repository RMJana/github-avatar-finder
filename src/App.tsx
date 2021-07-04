import {Box, Grommet} from 'grommet'
import {Search} from './components/Search'
import {Header} from './components/Header'
import {Results} from './components/Results'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {useState} from 'react'
import {AppContext, AppContextProps, SortOption} from './context/AppContext'

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

function App() {
  const [context, setContext] = useState<AppContextProps>({
    githubLogin: '',
    submitted: false,
    sort: SortOption.LoginDESC,
    usersPerPage: 9,
    page: 1,
  })

  return (
    <QueryClientProvider client={client}>
      <Grommet theme={theme}>
        <Box responsive align="center" justify="around">
          <Header />
          <AppContext.Provider value={[context, setContext]}>
            <Search />
            <Results />
          </AppContext.Provider>
        </Box>
      </Grommet>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
