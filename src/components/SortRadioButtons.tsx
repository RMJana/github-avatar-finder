import React from 'react'

import {Box, Grommet, RadioButtonGroup} from 'grommet'
import {grommet} from 'grommet/themes'
import {Ascend, Descend} from 'grommet-icons'
import {SortOption, useAppContext} from '../context/AppContext'

type Props = {}

export const SortRadioButtons: React.FC<Props> = () => {
  const [appContext, setAppContext] = useAppContext()

  return (
    <Grommet theme={grommet}>
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
    </Grommet>
  )
}
