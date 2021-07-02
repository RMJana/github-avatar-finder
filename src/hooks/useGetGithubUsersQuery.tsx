import axios from 'axios'
import {useQuery} from 'react-query'

export const useGetGithubUsersQuery = (githubLogin: string) => {
  const {data} = useQuery(
    ['GithubUsers'],
    async (): Promise<any> =>
      await axios.get(`https://api.github.com/search/users?q=${githubLogin}`),
    {
      enabled: githubLogin.length > 0,
      onError: (error: Error) => console.log(`Error '${error.message}'`),
    },
  )

  return {response: data}
}
