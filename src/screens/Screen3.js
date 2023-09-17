import { View,Button, StyleSheet } from 'react-native'
import React from 'react'

const Screen3 = () => {
  return (
    <View style={styles.ButtonView}>
    <Button title="Button 3" color="grey" onPress={() => alert('Button 3 pressed')} />
  </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
    ButtonView:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})