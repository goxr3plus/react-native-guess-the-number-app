import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './src/components/Header'
import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import GameOverScreen from './src/screens/GameOverScreen'

export default function App() {
   const [userNumber, setUserNumber] = useState()
   const [numberOfRounds, setNumberOfRounds] = useState(0)

   const restart = () => {
      setNumberOfRounds(0)
      setUserNumber()
   }

   const startGameHandler = (userNumber) => {
      setUserNumber(userNumber)
   }

   const gameOverHandler = (rounds) => {
      setNumberOfRounds(rounds)
   }

   let content = <StartGameScreen startGameHandler={startGameHandler}></StartGameScreen>

   if (userNumber && numberOfRounds <= 0) {
      content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}></GameScreen>
   } else if (numberOfRounds > 0) {
      content = <GameOverScreen rounds={numberOfRounds} userChoice={userNumber} restart={restart}></GameOverScreen>
   }

   return (
      <View style={styles.screen}>
         <Header title={'Guess a number'}></Header>
         {content}
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1
   }
})
