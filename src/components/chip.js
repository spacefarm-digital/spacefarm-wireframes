import React from 'react'
import { Heading, Block } from 'rebass'
import Icon from 'react-geomicons'
import Card from './card'
import { Flex, Box } from 'reflexbox'

const Chip = (props) => {
    return (
        <Card singleLine padding="30px" flex align="center">
            <Block mr={2}>
                <Icon name={props.iconName} color="red" size="3rem"/>
            </Block>
            <Heading level={1} size={3}>{props.heading}</Heading>
        </Card>
    )
}

export default Chip