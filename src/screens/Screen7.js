
import React from 'react'
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const Screen7 = () => {
  const { data } = useSelector((state) => state.api3);
  const isLoading = useSelector((state) => state.api3.loading);
   
  const fromattedDate =(date)=>{
    const dateObj = new Date(date);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();

  return `${day}-${month}-${year}`;

  }

  const UserDetails = ({ user }) => (
    <View style={styles.container}>
      <Image style={styles.picture} source={{ uri: user.picture.large }} />
      <Text style={styles.name}>{user.name.title} {user.name.first} {user.name.last}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{user.location.street.name}, {user.location.street.number}</Text>
        <Text style={styles.location}>{user.location.city}, {user.location.state}, {user.location.country}</Text>
        <Text style={styles.location}>Postcode: {user.location.postcode}</Text>
      </View>
      <Text style={styles.phone}>Phone: {user.phone}</Text>
      <Text style={styles.cell}>Cell: {user.cell}</Text>
      <Text style={styles.dob}>{`Date of Birth:  ${fromattedDate(user.dob.date)}`}</Text>
      <Text style={styles.age}>Age: {user.dob.age}</Text>
      <Text style={styles.nat}>Nationality: {user.nat}</Text>
    </View>
  );
  
  return (
    <>
    {isLoading ? ( // Show ActivityIndicator when isLoading is true
        <ActivityIndicator size="large" color="blue" style={styles.loadingIndicator} />
      ) : (
    <UserDetails user={data.results[0]} />
  )}
  </>
  )
}

export default Screen7

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
  },
  locationContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    textAlign: 'center',
  },
  phone: {
    fontSize: 16,
    marginBottom: 8,
  },
  cell: {
    fontSize: 16,
    marginBottom: 8,
  },
  dob: {
    fontSize: 16,
    marginBottom: 8,
  },
  age: {
    fontSize: 16,
    marginBottom: 8,
  },
  nat: {
    fontSize: 16,
  },
});

