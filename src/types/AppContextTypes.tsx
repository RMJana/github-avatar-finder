export enum SortOption {
  LoginASC = 'LoginASC',
  LoginDESC = 'LoginDESC',
  TypeASC = 'TypeASC',
  TypeDESC = 'TypeDESC',
}

export type AppContextProps = {
  githubLogin: string
  submitted: boolean
  usersPerPageChanged: boolean
  sort: SortOption
  usersPerPage: string
  page: number
}
