import React, {Component} from 'react'
import './App.css'
import {
  Block,
  Button,
  Arrow,
  Donut,
  Heading,
  Progress,
  Rating,
  Table,
} from 'rebass'

class App extends Component {
  render() {
    return (
      <Block p={3} mb={2}>
        <Button mr={4}>Herro<Arrow/></Button>
        <Donut color="primary" size={200} strokeWidth={10} value={.2}/>
        <Heading level={2} size={1} mb={3} color="red" className="db">Здравейчи</Heading>
        <Progress color="primary" value={0.25}/>

        <Rating
          color="orange"
          value={2}
        />

        <Table
  data={[
    [
      'Hamburger',
      'Beef',
      'Onion',
      'Bun'
    ],
    [
      'Pizza',
      'Pork',
      'Tomato',
      'Crust'
    ],
    [
      'Corndog',
      'Pork',
      'Corn',
      'Cornbread'
    ],
    [
      'Hot Dog',
      'Pork',
      'Peppers',
      'Bun'
    ]
  ]}
  headings={[
    'Name',
    'Meat',
    'Vegetable',
    'Carb'
  ]}
/>
      </Block>
    );
  }
}

export default App;
