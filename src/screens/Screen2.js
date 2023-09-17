import { View,Button ,StyleSheet } from 'react-native'
import React from 'react'

const Screen2 = () => {
  return (
    <View style={styles.ButtonView}>
    <Button title="Button 2" color="blue" onPress={() => alert('Button 2 pressed')} />
  </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    ButtonView:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})