import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import NumberInput from '../components/NumberInput'
import Colors from '../utils/Colors'
import Card from './../components/Card'

const StartGameScreen = (props) => {
   const [enteredValue, setEnteredValue] = useState('')

   const numberInputHandler = (inputText) => {
      setEnteredValue(inputText.replace(/[^0-9]/g, ''))
   }

   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Start a New Game!</Text>
         <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <NumberInput
               style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="type your number..."
               blurOnSubmit
               autoCapitalize="none"
               keyboardType="number-pad"
               autoCorrect={false}
               maxLength={2}
               onChangeText={numberInputHandler}
               value={enteredValue}
            ></NumberInput>
            <View style={styles.buttonContainer}>
               <Button buttonStyle={{ ...styles.buttonStyle, backgroundColor: Colors.accent }} title="Reset" onPress={() => {}} />
               <Button buttonStyle={{ ...styles.buttonStyle, backgroundColor: Colors.primary }} title="Confirm" onPress={() => {}} />
            </View>
         </Card>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
   },
   title: {
      fontSize: 20,
      marginVertical: 10
   },
   inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center'
   },
   buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      paddingHorizontal: 15
   },
   buttonStyle: {
      width: 100
   },
   input: {
      width: 180,
      textAlign: 'center'
   }
})

export default StartGameScreen
