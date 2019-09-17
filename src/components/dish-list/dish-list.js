import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { CardDish } from '../card-dish'

const DishList = ({ dishList }) => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={dishList}
      renderItem={({ item }) => <CardDish key={item.id} dish={item} />}
    />
  )
}

DishList.propTypes = {
  dishList: PropTypes.array,
}

export default DishList
