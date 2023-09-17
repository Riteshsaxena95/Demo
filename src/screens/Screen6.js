import { View, Text , StyleSheet, FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';


const Screen6 = () => {
  const { data } = useSelector((state) => state.api2);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.label}>ID Nation:</Text>
        <Text style={styles.value}>{item["ID Nation"]}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Nation:</Text>
        <Text style={styles.value}>{item["Nation"]}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>ID Year:</Text>
        <Text style={styles.value}>{item["ID Year"]}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Year:</Text>
        <Text style={styles.value}>{item["Year"]}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Population:</Text>
        <Text style={styles.value}>{item["Population"]}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Slug Nation:</Text>
        <Text style={styles.value}>{item["Slug Nation"]}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default Screen6

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
    marginLeft: 8,
  },
});