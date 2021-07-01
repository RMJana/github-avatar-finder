import React from 'react'

import {Box, Button, Form, FormField, TextInput} from 'grommet'

export const Search = () => {
  const [value, setValue] = React.useState({githubLogin: ''})

  return (
    <Box responsive fill align="center" justify="start">
      <Box responsive width="medium">
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onSubmit={({value: nextValue}) => console.log(nextValue)}
          onReset={() => setValue({githubLogin: ''})}
        >
          <FormField name="githubLogin" required>
            <TextInput
              placeholder="Enter the Github Login"
              name="githubLogin"
              type="githubLogin"
            />
          </FormField>

          <Box direction="row" justify="between" margin={{top: 'medium'}}>
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Search" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}
