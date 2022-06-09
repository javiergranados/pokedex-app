import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator';
import SearchTabNavigator from './SearchTabNavigator';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Pokemons',
          tabBarIcon: ({ color }) => <Icon color={color} size={25} name="list-outline" />,
        }}
      />
      <Tab.Screen
        name="SearchTabNavigator"
        component={SearchTabNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => <Icon color={color} size={25} name="search-outline" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
