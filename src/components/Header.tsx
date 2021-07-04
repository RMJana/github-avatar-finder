import React from 'react'

import {Heading} from 'grommet'

type Props = {}

export const Header: React.FC<Props> = () => {
  return (
    <Heading responsive level={1} size="large">
      Welcome to GitHub Users Finder!
    </Heading>
  )
}
