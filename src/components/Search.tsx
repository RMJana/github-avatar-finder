import React from 'react'
import {Box, Button, Form, FormField, TextInput} from 'grommet'
import {useAppContext} from '../context/AppContext'
import {SortOption} from '../types/AppContextTypes'

type Props = {}

export const Search: React.FC<Props> = () => {
  const [appContext, setAppContext] = useAppContext()

  return (
    <Box margin={{top: 'large', bottom: 'large'}} responsive width="medium">
      <Form
        value={appContext}
        onChange={nextValue =>
          setAppContext({...appContext, githubLogin: nextValue.githubLogin})
        }
        onSubmit={({value: nextValue}) => {
          setAppContext({
            ...appContext,
            githubLogin: nextValue.githubLogin,
            submitted: true,
            usersPerPage: '9',
            page: 1,
          })
        }}
        onReset={() => {
          setAppContext({
            githubLogin: '',
            submitted: false,
            sort: SortOption.LoginDESC,
            usersPerPage: '9',
            usersPerPageChanged: false,
            page: 1,
          })
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
