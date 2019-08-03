import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const isHermes = () => String(global.HermesInternal != null)

const inc = value => value + 1

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncreaseCount = () => {
    setCount(inc)
  }

  return (
    <View style={styles.main}>
      <Text>Hermes engine: {isHermes()}</Text>
      <Text>count {count}!</Text>
      <Button onPress={handleIncreaseCount} title="Increase count" />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
