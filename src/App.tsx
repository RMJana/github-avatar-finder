import {Grommet} from 'grommet'
import {Search} from './components/Search'
import {Header} from './components/Header'
import {Results} from './components/Results'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

function App() {
  return (
    <Grommet theme={theme}>
      <Header />
      <Search />
      <Results />
    </Grommet>
  )
}

export default App
