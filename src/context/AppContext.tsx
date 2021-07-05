import React, {Dispatch, SetStateAction} from 'react'
import {AppContextProps} from '../types/AppContextTypes'

export const AppContext = React.createContext<
  [AppContextProps, Dispatch<SetStateAction<AppContextProps>>] | undefined
>(undefined)

export const useAppContext = () => {
  const context = React.useContext(AppContext)
  if (!context)
    throw new Error('useAppContext must be inside a Provider with a value')
  return context
}
