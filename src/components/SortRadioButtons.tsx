import React from 'react'
import {Box, RadioButtonGroup} from 'grommet'
import {Ascend, Descend} from 'grommet-icons'
import {useAppContext} from '../context/AppContext'
import {SortOption} from '../types/AppContextTypes'

type Props = {}

export const SortRadioButtons: React.FC<Props> = () => {
  const [appContext, setAppContext] = useAppContext()

  return (
    <Box align="center" pad="large">
      <RadioButtonGroup
        name="radio"
        direction="row"
        gap="large"
        options={[
          {
            label: (
              <>
                Login
                <Descend />
              </>
            ),
            value: SortOption.LoginDESC,
          },
          {
            label: (
              <>
                Login
                <Ascend />
              </>
            ),
            value: SortOption.LoginASC,
          },
          {
            label: (
              <>
                Type
                <Descend />
              </>
            ),
            value: SortOption.TypeDESC,
          },
          {
            label: (
              <>
                Type
                <Ascend />
              </>
            ),
            value: SortOption.TypeASC,
          },
        ]}
        value={appContext.sort}
        onChange={event =>
          setAppContext({
            ...appContext,
            sort: SortOption[event.target.value as keyof typeof SortOption],
          })
        }
      />
    </Box>
  )
}
