import React from 'react'
import { gql } from 'apollo-boost'
import { DishList } from './components/dish-list'

const QUERY_DISHES = gql`
  query GetDishes {
    dishes {
      id
      name
      category
      imageUrl
      description
    }
  }
`

const App = () => {
  return <DishList />
}

export default App
