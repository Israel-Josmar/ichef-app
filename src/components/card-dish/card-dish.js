import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, Paragraph } from 'react-native-paper'

const CardDish = ({
  dish: {
    name,
    category,
    skip: { imageUrl },
    description,
  },
}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={name}
          subtitle={category}
          left={props => <Avatar.Icon {...props} icon="restaurant" />}
        />
        <Card.Cover resizeMode="contain" source={{ uri: imageUrl }} />
        <Card.Content style={styles.content}>
          <Paragraph>{description}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  )
}

CardDish.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    description: PropTypes.string.isRequired,
  }),
}

export default CardDish

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  content: {
    marginTop: 10,
  },
})
