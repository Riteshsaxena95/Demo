import { View, Text, StyleSheet, Linking, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';

const Screen5 = () => {
  const apiData1 = useSelector((state) => state.api1.data.entries); 
  const isLoading = useSelector((state) => state.api1.loading);
 

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.apiName}> {item.API}</Text>
        <Text style={styles.category} numberOfLines={1} ellipsizeMode="tail">{item.Category}</Text>
      </View>

      <Text
        style={styles.link}
        onPress={() => Linking.openURL(item.Link)}
      >
        Open Link
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
       {isLoading ? ( // Show ActivityIndicator when isLoading is true
        <ActivityIndicator size="large" color="blue" style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={apiData1}
          renderItem={renderItem}
          keyExtractor={(item) => item.Link.toString()}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

export default Screen5

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
    padding: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  itemContainer: {
    backgroundColor: 'white', // White background for each item
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
    elevation: 3, // Add a shadow for depth
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  apiName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  category: {
    color: 'gray',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


