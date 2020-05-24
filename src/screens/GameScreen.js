import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import NumberContainer from './../components/NumberContainer'
import { Button } from 'react-native-elements'
import Card from './../components/Card'

const generateRandomBetween = (min, max, exclude) => {
   min = Math.ceil(min)
   max = Math.floor(max)
   const rndNum = Math.floor(Math.random() * (max - min)) + min
   if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude)
   } else {
      return rndNum
   }
}

const GameScreen = (props) => {
   const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userNumber))
   const [rounds, setRounds] = useState(0)

   const currentLow = useRef(1)
   const currentHigh = useRef(100)

   const { userChoice, onGameOver } = props

   /* Get's called only after component is re-rendered */
   useEffect(() => {
      if (currentGuess === userChoice) {
         onGameOver(rounds)
      }
   }, [currentGuess, userChoice, onGameOver])

   const nextGuessHandler = (direction) => {
      if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
         Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
         return
      }
      if (direction === 'lower') {
         currentHigh.current = currentGuess
      } else {
         currentLow.current = currentGuess
      }
      const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
      setCurrentGuess(nextNumber)
      setRounds(rounds + 1)
   }

   return (
      <View style={styles.container}>
         <Text>Opponent's Guess</Text>
         <NumberContainer>{currentGuess}</NumberContainer>
         <Card style={styles.buttonContainer}>
            <Button title="LOWER" onPress={() => nextGuessHandler('lower')} />
            <Button title="GREATER" onPress={() => nextGuessHandler('greater')} />
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
