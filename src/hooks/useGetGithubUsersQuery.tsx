import axios from 'axios'
import {useQuery} from 'react-query'
import {useAppContext} from '../context/AppContext'

export const useGetGithubUsersQuery = (githubLogin: string) => {
  const [appContext, setAppContext] = useAppContext()

  const {data, isLoading, isSuccess, isError, error} = useQuery(
    ['GithubUsers', appContext.githubLogin],
    async (): Promise<any> =>
      await axios.get(
        `https://api.github.com/search/users?q=${appContext.githubLogin}&order=desc`,
      ),
    {
      enabled: appContext.submitted,
      onError: (error: Error) => console.log(`Error '${error.message}'`),
      onSuccess: () => setAppContext({...appContext, submitted: false}),
    },
  )

  return {response: data, isSuccess, isLoading, isError, error}
}
