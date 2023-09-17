
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import Screen6 from '../screens/Screen6';
import Screen7 from '../screens/Screen7';
import Homeicon from '../asset/svg_icon/homeicon.svg'
import DrawerIcon from '../asset/svg_icon/drawericon.svg'



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const DrawerButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginHorizontal: 10 }}>
    <DrawerIcon width={20} height={20} />
  </TouchableOpacity>
);

const TabNavigator = ({ navigation }) => (
  <Tab.Navigator>
    <Tab.Screen name="Screen 1" component={Screen1}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Homeicon />
            <Text style={{ color: focused ? 'blue' : 'grey' }}>Screen 1</Text>
          </View>
        ),
        headerShown: true,
        tabBarShowLabel: false,
        headerLeft: () => <DrawerButton navigation={navigation} />
      }}


    />
    <Tab.Screen name="Screen 2" component={Screen2} options={{
      tabBarIcon: ({ focused }) => (
        <View
          style={{
            alignItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Homeicon />
          <Text style={{ color: focused ? 'blue' : 'grey' }}>Screen 2</Text>
        </View>
      ),
      headerShown: true,
      tabBarShowLabel: false,
      headerLeft: () => <DrawerButton navigation={navigation} />
    }} />
    <Tab.Screen name="Screen 3" component={Screen3} options={{
      tabBarIcon: ({ focused }) => (
        <View
          style={{
            alignItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Homeicon />
          <Text style={{ color: focused ? 'blue' : 'grey' }}>Screen 3</Text>
        </View>
      ),
      headerShown: true,
      tabBarShowLabel: false,
      headerLeft: () => <DrawerButton navigation={navigation} />
    }} />
    <Tab.Screen name="Screen 4" component={Screen4} options={{
      tabBarIcon: ({ focused }) => (
        <View
          style={{
            alignItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Homeicon />
          <Text style={{ color: focused ? 'blue' : 'grey' }}>Screen 4</Text>
        </View>
      ),
      headerShown: true,
      tabBarShowLabel: false,
      headerLeft: () => <DrawerButton navigation={navigation} />
    }} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="TabScreens" component={TabNavigator} options={{ headerShown: false }} />
    <Drawer.Screen name="Screen5" component={Screen5} />
    <Drawer.Screen name="Screen6" component={Screen6} />
    <Drawer.Screen name="Screen7" component={Screen7} />
  </Drawer.Navigator>
);

const AppNavigation = () => (

  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>

);

export default AppNavigation;
