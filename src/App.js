import React, { Component } from 'react'
import './App.css'
import { Container, Button, Block } from 'rebass'
import Navbar from './components/navbar'
import Chip from './components/chip'
import IconGrid from './components/iconGrid'
import { Flex, Box } from 'reflexbox'

class App extends Component {
  render() {
    return (
      <Block m={0}>
        <Navbar />
        <Container pt={2}>
          <IconGrid />
        </Container>
      </Block>
    )
  }
}

export default App
