import React, {useState} from 'react'

import {Box, Grommet, RadioButtonGroup} from 'grommet'
import {grommet} from 'grommet/themes'
import {Ascend, Descend} from 'grommet-icons'

type Props = {}

export const SortRadioButtons: React.FC<Props> = () => {
  // Set AppContext with the order to activate the sort in resulst!!
  const [value, setValue] = useState('')

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
                  <Ascend />
                </>
              ),
              value: 'LA',
            },
            {
              label: (
                <>
                  Login
                  <Descend />
                </>
              ),
              value: 'LD',
            },
            {
              label: (
                <>
                  Type
                  <Ascend />
                </>
              ),
              value: 'TA',
            },
            {
              label: (
                <>
                  Type
                  <Descend />
                </>
              ),
              value: 'TD',
            },
          ]}
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </Box>
    </Grommet>
  )
}
