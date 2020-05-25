import React, { useEffect, useRef, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Colors from '../utils/Colors'
import Card from './../components/Card'
import MainButton from './../components/MainButton'
import NumberContainer from './../components/NumberContainer'
import { FontAwesome5 } from '@expo/vector-icons'

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
         <Text>Computer's guess</Text>
         <NumberContainer>{currentGuess}</NumberContainer>
         <Card style={styles.buttonContainer}>
            <MainButton onPress={() => nextGuessHandler('lower')}>
               <FontAwesome5 name="minus" size={18} color="white">
                  {' '}
                  LOWER
               </FontAwesome5>
            </MainButton>
            <MainButton onPress={() => nextGuessHandler('greater')}>
               <FontAwesome5 name="plus" size={18} color="white">
                  {' '}
                  HIGHER
               </FontAwesome5>
            </MainButton>
         </Card>
         <MainButton onPress={props.restart} style={{ backgroundColor: Colors.accent }} textStyle={{ fontSize: 18 }}>
            Restart
         </MainButton>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '30%'
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 400,
      maxWidth: '100%'
   }
})

export default GameScreen
