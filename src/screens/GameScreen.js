import React, { useEffect, useRef, useState } from 'react'
import { Alert, StyleSheet, Text, View, ScrollView, FlatList, Dimensions } from 'react-native'
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
   /* -------------------------------------------  Variables -------------------------------------------------------------------- */

   const { userChoice, onGameOver } = props
   const currentLow = useRef(1)
   const currentHigh = useRef(100)
   const initialGuess = generateRandomBetween(1, 100, props.userNumber)

   /* -------------------------------------------  State + Lifecycle ------------------------------------------------------------- */

   const [currentGuess, setCurrentGuess] = useState(initialGuess)
   const [pastGuesses, setPastGuesses] = useState([initialGuess])

   /* Get's called only after component is re-rendered */
   useEffect(() => {
      if (currentGuess === userChoice) {
         onGameOver(pastGuesses.length)
      }
   }, [currentGuess, userChoice, onGameOver])

   /* -------------------------------------------  ActionHandlers ---------------------------------------------------------------- */

   const renderListItem = ({ index, item }) => {
      return (
         <View key={item.id} style={styles.listItem}>
            <Text>#{pastGuesses.length - index}</Text>
            <Text>{item.value}</Text>
         </View>
      )
   }

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

   /* -------------------------------------------  JSX about RENDER -------------------------------------------------------------- */

   const pastGuessesTransformed = pastGuesses.map((item) => ({ id: Math.random().toString(), value: item }))

   /* -------------------------------------------  RENDER ------------------------------------------------------------------------ */

   return (
      <View style={styles.screen}>
         <Text>Opponent's Guess</Text>
         <NumberContainer>{currentGuess}</NumberContainer>
         <Card style={styles.buttonContainer}>
            <MainButton onPress={() => nextGuessHandler('lower')}>
               <FontAwesome5 name="minus" size={Dimensions.get('window').width < 600 ? 14 : 18} color="white">
                  {' '}
                  LOWER
               </FontAwesome5>
            </MainButton>
            <MainButton onPress={() => nextGuessHandler('greater')}>
               <FontAwesome5 name="plus" size={Dimensions.get('window').width < 600 ? 14 : 18} color="white">
                  {' '}
                  HIGHER
               </FontAwesome5>
            </MainButton>
         </Card>
         <MainButton onPress={props.restart} style={{ backgroundColor: Colors.accent, marginVertical: 15 }} textStyle={{ fontSize: 18 }}>
            Restart
         </MainButton>
         <View style={styles.listContainer}>
            <FlatList
               keyExtractor={(item) => item.id}
               data={pastGuessesTransformed}
               renderItem={renderListItem}
               contentContainerStyle={styles.list}
            ></FlatList>
         </View>
      </View>
   )
}

/* -------------------------------------------  Styles ---------------------------------------------------------------------------- */
const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
      width: '100%',
   },
   listContainer: {
      flex: 1,
      width: '90%',
   },
   list: {
      flexGrow: 1,
      justifyContent: 'flex-end',
   },
   listItem: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 15,
      marginVertical: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
   },
})

export default GameScreen
