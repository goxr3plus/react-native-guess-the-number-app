import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NumberContainer from './../components/NumberContainer'
import { Button } from 'react-native-elements'
import Card from './../components/Card'

const getMiddleNumber = (min, max, exclude) => {
   min = Math.ceil(min)
   max = Math.floor(max)

   let middleNumber = Math.floor((min + max) / 2)
   if (middleNumber === exclude) {
      middleNumber = Math.floor(Math.random() * (max - min) + min)
   } else {
      return middleNumber
   }
}

const GameScreen = (props) => {
   const [currentGuess, setCurrentGuess] = useState(getMiddleNumber(1, 100, props.userChoice))

   return (
      <View style={styles.container}>
         <Text>Opponent's Guess</Text>
         <NumberContainer>{currentGuess}</NumberContainer>
         <Card style={styles.buttonContainer}>
            <Button title="LOWER" onPress={() => {}} />
            <Button title="GREATER" onPress={() => {}} />
         </Card>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: 300,
      maxWidth: '80%'
   }
})

export default GameScreen
