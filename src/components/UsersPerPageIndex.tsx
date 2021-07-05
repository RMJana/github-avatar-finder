import {Box, RadioButtonGroup, Text} from 'grommet'
import {useAppContext} from '../context/AppContext'

type Props = {}

export const UsersPerPageIndex: React.FC<Props> = () => {
  const [appContext, setAppContext] = useAppContext()
  const {usersPerPage} = appContext

  return (
    <Box margin="medium" gap="small" direction="row" align="center">
      <Text>Users per page:</Text>
      <RadioButtonGroup
        name="radio"
        direction="row"
        gap="medium"
        options={[
          {
            label: '9',
            value: '9',
          },
          {
            label: '18',
            value: '18',
          },
          {
            label: '27',
            value: '27',
          },
        ]}
        value={usersPerPage}
        onChange={event =>
          setAppContext({
            ...appContext,
            usersPerPage: event.target.value,
            usersPerPageChanged: true,
          })
        }
      />
    </Box>
  )
}
