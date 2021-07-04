import {
  Avatar,
  Box,
  Card,
  Heading,
  CardBody,
  CardHeader,
  Grid,
  Text,
  Image,
} from 'grommet'
import {GithubUser} from '../types/GithubUsers'

type Props = {
  githubUsers: GithubUser[]
}

export const AvatarList: React.FC<Props> = ({githubUsers}) => {
  return (
    <Box pad="large" fill>
      <Grid
        gap="small"
        rows="medium"
        columns={{count: 'fill', size: ['small']}}
      >
        {githubUsers?.map(item => (
          <Card width="small" key={item.id}>
            <CardBody height="medium">
              <Image fit="cover" src={item.avatar_url} a11yTitle="avatar_url" />
            </CardBody>
            <CardHeader
              pad={{horizontal: 'small', vertical: 'small'}}
              background="#000000A0"
              width="medium"
              justify="start"
            >
              <Avatar src={item.avatar_url} a11yTitle="avatar" />
              <Box>
                <Heading truncate level="3" margin="none">
                  {item.login}
                </Heading>
                <Text truncate size="small">
                  {item.type}
                </Text>
              </Box>
            </CardHeader>
          </Card>
        ))}
      </Grid>
    </Box>
  )
}
