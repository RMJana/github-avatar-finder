import axios from 'axios'
import {useQuery} from 'react-query'

type GithubUsers = {
  items: readonly {
    id: string
    text: string
  }[]
  ts: number
}

export const useGetFreigabeDatenQuery = (githubLogin: string) => {
  const {data} = useQuery(
    ['GithubUsers'],
    async (): Promise<GithubUsers> =>
      await axios.get(`https://api.github.com/search/users?q='${githubLogin}'`),
    {
      enabled: Boolean(githubLogin),
      onError: (error: Error) => console.log(`Error '${error.message}'`),
    },
  )

  return {githubUsers: data}
}
