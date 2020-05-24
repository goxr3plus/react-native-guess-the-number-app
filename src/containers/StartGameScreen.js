import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import Card from './../components/Card'
import Colors from '../utils/Colors'

const StartGameScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Start a New Game!</Text>
         <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput />
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
   }
})

export default StartGameScreen
