import React, {Dispatch, SetStateAction} from 'react'

export enum SortOption {
  LoginASC = 'LoginASC',
  LoginDESC = 'LoginDESC',
  TypeASC = 'TypeASC',
  TypeDESC = 'TypeDESC',
}

export type AppContextProps = {
  githubLogin: string
  submitted: boolean
  sort: SortOption
  usersPerPage: number
  page: number
}

export const AppContext = React.createContext<
  [AppContextProps, Dispatch<SetStateAction<AppContextProps>>] | undefined
>(undefined)

export const useAppContext = () => {
  const context = React.useContext(AppContext)
  if (!context)
    throw new Error('useAppContext must be inside a Provider with a value')
  return context
}
