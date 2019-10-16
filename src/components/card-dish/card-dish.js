import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, Paragraph, DefaultTheme } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: '#f1c40f',
  },
}

const CardDish = ({
  dish: {
    id,
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
          left={props => <Avatar.Icon {...props} icon="restaurant" theme={theme} />}
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

export default React.memo(CardDish)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  content: {
    marginTop: 10,
  },
})
