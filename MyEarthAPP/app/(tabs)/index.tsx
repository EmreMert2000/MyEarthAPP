import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandListScreen from '../Screens/LandListScreen';

import DetailsScreen from '../Screens/DetailsScreen';



const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandListScreen} />
      <Tab.Screen name="Profile" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
