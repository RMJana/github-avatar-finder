import React from 'react'
import {Box, Button, Form, FormField, TextInput} from 'grommet'
import {useAppContext} from '../context/AppContext'

export const Search = () => {
  // value -> githubLogin tiene que actualizar context
  const [value, setValue] = React.useState({githubLogin: ''})
  const [, setAppContext] = useAppContext()

  return (
    <Box responsive fill align="center" justify="start">
      <Box responsive width="medium">
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onSubmit={({value: nextValue}) => {
            setValue(nextValue)
            setAppContext({githubLogin: nextValue.githubLogin})
          }}
          onReset={() => {
            setValue({githubLogin: ''})
            setAppContext({githubLogin: ''})
          }}
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
