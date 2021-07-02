import {Grommet} from 'grommet'
import {Search} from './components/Search'
import {Header} from './components/Header'
import {Results} from './components/Results'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

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
  return (
    <QueryClientProvider client={client}>
      <Grommet theme={theme}>
        <Header />
        <Search />
        <Results />
      </Grommet>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
