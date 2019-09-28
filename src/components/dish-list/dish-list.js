import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Picker, View, Text } from 'react-native'
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
    skip: project(fullPath: "inkscape/inkscape") {
      dishes: issues(first: 3, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            id: iid
            name: title
            category: state
            skip: author {
              name
              imageUrl: avatarUrl
            }
            description
          }
        }
      }
    }
  }
`

const DishList = props => {
  const [category, setCategory] = useState(null)
  const { loading, error, data, fetchMore } = useQuery(QUERY_DISHES)

  function handleCategoryChange(category) {
    setCategory(category)
  }
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :( -> {JSON.stringify(error, null, 2)}</Text>

  return (
    <View style={{ flex: 1 }}>
      <Picker
        selectedValue={category}
        style={{ height: 50, width: 200 }}
        onValueChange={itemValue => handleCategoryChange(itemValue)}
      >
        <Picker.Item label="Todos" />
        <Picker.Item label="Lanche" value="Lanche" />
        <Picker.Item label="Italiano" value="Italiano" />
      </Picker>
      <FlatList
        keyExtractor={item => item.node.id}
        data={data.skip.dishes.edges}
        renderItem={({ item }) => <CardDish key={item.node.id} dish={item.node} />}
        onEndReached={() =>
          fetchMore({
            query: QUERY_DISHES,
            variables: {
              after: data.skip.dishes.pageInfo.endCursor,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const newEdges = fetchMoreResult.skip.dishes.edges
              const pageInfo = fetchMoreResult.skip.dishes.pageInfo
              return newEdges.length
                ? {
                    skip: {
                      dishes: {
                        __typename: previousResult.skip.dishes.__typename,
                        edges: [...previousResult.skip.dishes.edges, ...newEdges],
                        pageInfo,
                      },
                      __typename: previousResult.skip.__typename,
                    },
                  }
                : previousResult
            },
          })
        }
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}

DishList.propTypes = {
  dishList: PropTypes.array,
}

export default DishList
