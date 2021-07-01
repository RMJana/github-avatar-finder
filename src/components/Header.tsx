import React from 'react'

import {Box, Heading} from 'grommet'

// This example shows a way to perform validation across multiple fields.
export const Header = () => {
  return (
    <Box align="center" justify="start">
      <Heading responsive level={1} size="medium">
        Welcome to GitHub Avatar Finder!
      </Heading>
    </Box>
  )
}
