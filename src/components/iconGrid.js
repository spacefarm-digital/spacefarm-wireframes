import React from 'react'
import { Flex, Box } from 'reflexbox'
import Chip from './chip'

const iconGrid = props => {
  return (
    <Flex wrap mx={-2}>
      <Box col={12} md={6} lg={4} px={2} mb={3}>
        <Chip iconName="heart" heading="Heart" />
      </Box>

      <Box col={12} md={6} lg={4} px={2} mb={3}>
        <Chip iconName="skull" heading="Skull" />
      </Box>

      <Box col={12} md={6} lg={4} px={2} mb={3}>
        <Chip iconName="camera" heading="Camera" />
      </Box>
    </Flex>
  )
}

export default iconGrid
