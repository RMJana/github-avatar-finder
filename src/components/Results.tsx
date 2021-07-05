import {
  Box,
  Pagination,
  Paragraph,
  RadioButtonGroup,
  Spinner,
  Text,
} from 'grommet'
import React from 'react'
import {SortOption, useAppContext} from '../context/AppContext'
import {useGetGithubUsersQuery} from '../hooks/useGetGithubUsersQuery'
import {GithubUser} from '../types/GithubUsers'
import {AvatarList} from './AvatarList'
import {SortRadioButtons} from './SortRadioButtons'

export const otherBoxProps = {
  pad: '5px',
  margin: '5px',
  border: true,
  round: 'xsmall',
  background: '#ff222222',
}

const gradient =
  'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(77,76,219,1) 100%)'

type Props = {}

export const Results: React.FC<Props> = () => {
  const [appContext, setAppContext] = useAppContext()
  const {sort, page, usersPerPage} = appContext

  const {
    response,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetGithubUsersQuery()

  const [githubUsersResponse, setGithubUsersResponse] = React.useState(
    isSuccess ? response.data : undefined,
  )

  // Probar de nuevo el cleanup con setGithubUsers

  React.useEffect(() => {
    if (isSuccess) {
      let orderedList: GithubUser[] = []

      switch (sort) {
        case SortOption.LoginASC: {
          orderedList = response.data.items.sort(
            (a: GithubUser, b: GithubUser) => b.login.localeCompare(a.login),
          )
          break
        }
        case SortOption.TypeASC: {
          orderedList = response.data.items.sort(
            (a: GithubUser, b: GithubUser) => b.type.localeCompare(a.type),
          )
          break
        }
        case SortOption.TypeDESC: {
          orderedList = response.data.items.sort(
            (a: GithubUser, b: GithubUser) => a.type.localeCompare(b.type),
          )
          break
        }
        default: {
          orderedList = response.data.items.sort(
            (a: GithubUser, b: GithubUser) => a.login.localeCompare(b.login),
          )
          break
        }
      }
      setGithubUsersResponse({...response.data, items: orderedList})
    }
  }, [isSuccess, response, sort])

  if (isError) {
    return (
      <Box margin={{top: 'large', bottom: 'large'}}>
        <Paragraph responsive textAlign="center">
          An Error had occured, please Reset your search and try again. 💪😎
        </Paragraph>
        <Paragraph responsive textAlign="center">
          GitHub API v3 is responding: {error?.response?.data.message}
        </Paragraph>
      </Box>
    )
  }

  if (isLoading)
    return (
      <Box responsive margin={{top: 'large', bottom: 'large'}}>
        <Spinner
          background={gradient}
          size="large"
          animation={[
            {type: 'fadeIn', duration: 1900, size: 'large'},
            {type: 'pulse', duration: 1450, size: 'large'},
          ]}
          border={false}
        />
      </Box>
    )

  if (isSuccess)
    return (
      <Box responsive fill align="center" justify="start">
        <h1>
          There {githubUsersResponse?.total_count === 1 ? 'is ' : 'are '}
          {githubUsersResponse?.total_count} GitHuber
          {githubUsersResponse?.total_count === 1 ? '' : 's'}!
        </h1>
        {githubUsersResponse?.total_count > 0 ? (
          <>
            <Box fill align="center">
              <SortRadioButtons />
            </Box>
            <AvatarList githubUsers={githubUsersResponse?.items} />
            <Box fill align="center">
              <Pagination
                step={Number(usersPerPage)}
                numberEdgePages={2}
                page={page}
                numberMiddlePages={4}
                alignSelf="center"
                numberItems={githubUsersResponse?.total_count}
                onChange={({page}) => {
                  setAppContext({...appContext, submitted: true, page})
                }}
              />
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
            </Box>{' '}
          </>
        ) : (
          <></>
        )}
      </Box>
    )
  return <></>
}
