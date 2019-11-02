import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { FlatList, Text } from 'react-native'
import { CardDish } from './components'

const QUERY_DISHES = gql`
  query GetDishes($first: Int!) {
    dishes(first: $first) {
      totalCount
      edges {
        node {
          id
          name
          category
          description
          imageUrl
        }
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(QUERY_DISHES, {
    variables: { first: 10 },
  })

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :( -> {JSON.stringify(error, null, 2)}</Text>

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data.dishes.edges}
      renderItem={({ item: { node } }) => <CardDish key={node.id} dish={node} />}
    />
  )
}

export default App
