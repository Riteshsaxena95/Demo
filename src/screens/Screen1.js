import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React, { useEffect } from 'react';
import { fetchData1 } from '../redux/apiSlice/ApiSlice1';
import { useDispatch } from 'react-redux';
import { fetchData2 } from '../redux/apiSlice/ApiSlice2';
import { fetchData3 } from '../redux/apiSlice/ApiSlice3';

const Screen1 = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchData1());
    dispatch(fetchData2());
    dispatch(fetchData3());
  }, [dispatch]);


  return (
    <View style={styles.ButtonView}>
      <TouchableHighlight
        onPress={() => {
          alert('Button pressed');
        }}
        style={styles.button}
      >
        <Text style={styles.buttontext}>Button 1</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  ButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor:'red',padding:10
  },
  buttontext:{
    color:'white'
  }

});
