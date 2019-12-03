import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, FlatList, View, Text } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { CardDish } from '../card-dish'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

// const QUERY_DISHES = gql`
//   query GetDishes($category: String) {
//     dishes(category: $category) {
//       id
//       name
//       category
//       imageUrl
//       description
//     }
//   }
// `

const QUERY_DISHES = gql`
  query GetDishes($after: String) {
    dishes(first: 5, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          category
          imageUrl
          description
        }
      }
    }
  }
`

const DishList = props => {
  const refContainer = useRef(null)
  const [searchQuery, setSearchQuery] = useState(null)
  const [showSearch, setShowSearch] = useState(null)
  const { loading, error, data, fetchMore } = useQuery(QUERY_DISHES)
  const endCursor = data && data.dishes && data.dishes.pageInfo.endCursor

  if (loading)
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  if (error) return <Text>Error :( -> {JSON.stringify(error, null, 2)}</Text>

  const blah = () => console.log(refContainer.current.isFocused())

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Prato ou chef"
        ref={refContainer}
        onChangeText={query => setSearchQuery(query)}
        onIconPress={blah}
        value={searchQuery}
      />
      <FlatList
        keyExtractor={item => item.node.id}
        data={data.dishes.edges}
        renderItem={renderItem}
        onEndReached={() => {
          return fetchMore({
            query: QUERY_DISHES,
            variables: {
              after: endCursor,
            },
            updateQuery: updateQuery,
          })
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading || <ActivityIndicator size="large" color="#0000ff" />}
      />
    </View>
  )
}

const renderItem = ({ item }) => <CardDish key={item.node.id} dish={item.node} />

const updateQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) return previousResult

  fetchMoreResult.dishes.edges = [...previousResult.dishes.edges, ...fetchMoreResult.dishes.edges]

  return fetchMoreResult
}

DishList.propTypes = {
  dishList: PropTypes.array,
}

export default DishList
