import {Box} from 'grommet'
import {useAppContext} from '../context/AppContext'
import {useGetGithubUsersQuery} from '../hooks/useGetGithubUsersQuery'

type GithubUsers = {
  total_count: number
  incomplete_results: boolean
  items: GithubUser[]
}

type GithubUser = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  score: number
}

export const Results = () => {
  // tiene que consumir context
  // hacer la llamada a useQuery
  // hacer un maping de los usuarios
  //const githubUsersQuery = useGetFreigabeDatenQuery(value.githubLogin)
  const [appContext] = useAppContext()
  const {response} = useGetGithubUsersQuery(appContext.githubLogin)

  const githubUsers: GithubUsers = response.data
  console.log('githubUsers', githubUsers.total_count)

  return (
    <Box responsive fill align="center" justify="start">
      <h1>Filter</h1>
      <h2>AvatarList</h2>
      <h3>{appContext.githubLogin}</h3>
    </Box>
  )
}
