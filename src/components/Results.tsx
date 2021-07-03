import {Box, Spinner} from 'grommet'
import {useAppContext} from '../context/AppContext'
import {useGetGithubUsersQuery} from '../hooks/useGetGithubUsersQuery'

const gradient =
  'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(77,76,219,1) 100%)'

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
  const [appContext] = useAppContext()
  const {
    response,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetGithubUsersQuery(appContext.githubLogin)

  const githubUsers: GithubUsers = isSuccess ? response.data : undefined

  if (isError)
    return (
      <Box responsive margin={{top: 'large', bottom: 'large'}}>
        An Error had occured, please Reset your search and try again. 💪😎
        {error?.message}
      </Box>
    )

  if (isLoading)
    return (
      <Box responsive margin={{top: 'large', bottom: 'large'}}>
        <Spinner
          background={gradient}
          size="large"
          animation={[
            {type: 'fadeIn', duration: 1900, size: 'large'},
            {type: 'pulse', duration: 1450, size: 'large'},
          ]}
          border={false}
        />
      </Box>
    )
  console.log('githubUsers', githubUsers?.total_count)

  return (
    <Box responsive fill align="center" justify="start">
      <h1>Filter</h1>
      <h2>AvatarList</h2>
      <h3>{appContext.githubLogin}</h3>
    </Box>
  )
}
