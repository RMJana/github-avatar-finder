import axios from 'axios'
import {useQuery} from 'react-query'
import {useAppContext} from '../context/AppContext'

export const useGetGithubUsersQuery = (githubLogin: string) => {
  const [appContext, setAppContext] = useAppContext()

  const {data, isLoading, isSuccess, isError, error} = useQuery(
    [
      'GithubUsers',
      appContext.githubLogin,
      appContext.page,
      appContext.usersPerPage,
    ],
    async (): Promise<any> =>
      await axios.get(
        `https://api.github.com/search/users?q=${appContext.githubLogin}&page=${appContext.page}&per_page=${appContext.usersPerPage}`,
      ),
    {
      enabled: appContext.submitted,
      onError: (error: Error) => console.log(`Error '${error.message}'`),
      onSuccess: () => setAppContext({...appContext, submitted: false}),
    },
  )

  return {response: data, isSuccess, isLoading, isError, error}
}
