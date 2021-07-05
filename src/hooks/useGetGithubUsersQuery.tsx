import axios, {AxiosError} from 'axios'
import {useQuery} from 'react-query'
import {useAppContext} from '../context/AppContext'

export const useGetGithubUsersQuery = () => {
  const [appContext, setAppContext] = useAppContext()

  const {data, isLoading, isSuccess, isError, error} = useQuery<
    any,
    AxiosError
  >(
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
      enabled: appContext.submitted || appContext.usersPerPageChanged,
      onError: (error: Error) => console.error(`Error '${error.message}'`),
      onSuccess: () =>
        setAppContext({
          ...appContext,
          submitted: false,
          usersPerPageChanged: false,
        }),
    },
  )

  return {response: data, isSuccess, isLoading, isError, error}
}
