import React from 'react'
import {Box, Button, Form, FormField, TextInput} from 'grommet'
import {useAppContext} from '../context/AppContext'

export const Search = () => {
  const [appContext, setAppContext] = useAppContext()

  return (
    <Box margin={{top: 'large', bottom: 'large'}} responsive width="medium">
      <Form
        value={appContext}
        onChange={nextValue =>
          setAppContext({...appContext, githubLogin: nextValue.githubLogin})
        }
        onSubmit={({value: nextValue}) => {
          setAppContext({githubLogin: nextValue.githubLogin, submitted: true})
        }}
        onReset={() => {
          setAppContext({githubLogin: '', submitted: false})
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
  )
}
