import React, { useEffect, useRef, useState } from 'react'
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native'
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

const renderListItem = (value, numOfRound) => {
   return (
      <View key={Math.random()} style={styles.listItem}>
         <Text>#{numOfRound}</Text>
         <Text>{value}</Text>
      </View>
   )
}

const GameScreen = (props) => {
   const initialGuess = generateRandomBetween(1, 100, props.userNumber)
   const [currentGuess, setCurrentGuess] = useState(initialGuess)
   const [pastGuesses, setPastGuesses] = useState([initialGuess])

   const currentLow = useRef(1)
   const currentHigh = useRef(100)

   const { userChoice, onGameOver } = props

   /* Get's called only after component is re-rendered */
   useEffect(() => {
      if (currentGuess === userChoice) {
         onGameOver(pastGuesses.length)
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
      setPastGuesses((pastGuesses) => [nextNumber, ...pastGuesses])
   }

   return (
      <View style={styles.screen}>
         <View style={styles.board}>
            <Text>Computer's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.boardButtons}>
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
         <View style={styles.list}>
            <ScrollView>{pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}</ScrollView>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      padding: 10,
      height: '100%',
      alignItems: 'center',
   },
   board: {
      height: '30%',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   boardButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 400,
      maxWidth: '100%',
   },
   list: {
      flex: 1,
      width: '90%',
   },
   listItem: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 15,
      marginVertical: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
})

export default GameScreen
