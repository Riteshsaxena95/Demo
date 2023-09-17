import { View,Button, StyleSheet } from 'react-native'
import React from 'react'

const Screen4 = () => {
  return (
    <View style={styles.ButtonView}>
    <Button title="Button 4" color="black" onPress={() => alert('Button 4 pressed')} />
  </View>
  )
}

export default Screen4

const styles = StyleSheet.create({
    ButtonView:{
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
})