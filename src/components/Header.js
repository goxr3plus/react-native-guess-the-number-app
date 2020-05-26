import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Colors from '../utils/Colors'

const Header = (props) => {
   return (
      <View style={{ ...styles.header, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }) }}>
         <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      paddingTop: 45,
      width: '100%',
      height: 90,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
   },
   headerIOS: {
      backgroundColor: Colors.primary,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
   },
   headerAndroid: {
      backgroundColor: Colors.primary,
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
   },
   headerTitle: {
      fontSize: 18,
      color: Platform.OS == 'ios' ? Colors.primary : 'white',
   },
})

export default Header
