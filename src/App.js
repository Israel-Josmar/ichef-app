import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { FlatList, Text } from 'react-native'
import { CardDish } from './components'

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
  const { loading, error, data } = useQuery(QUERY_DISHES)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :( -> {JSON.stringify(error, null, 2)}</Text>

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data.dishes}
      renderItem={({ item }) => <CardDish key={item.id} dish={item} />}
    />
  )
}

export default App
