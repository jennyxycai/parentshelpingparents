import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="NewsPaper"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        /* Add header */
        options={{ headerTitle: 'Parents Helping Parents' , headerTitleAlign : 'center', headerTitleStyle: {fontWeight: 'bold',},
         headerTintColor: '#205BB5',headerStyle: {backgroundColor: '#FFFFFF', },  
         headerRight: () => <Image source={{ uri: "https://static.wixstatic.com/media/ff0e80_e7eee7deb6c744aeaada503f29197af3~mv2.png/v1/fill/w_130,h_128,al_c,q_85,usm_0.66_1.00_0.01/php_logo%20no%20background%20with%20white%20text_p.webp" }} style={{ width: 37, height: 35 }} />
        }}
      />
    </TabOneStack.Navigator>

  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Parents Helping Parents' , headerTitleAlign : 'center',headerTitleStyle: {fontWeight: 'bold',},
         headerTintColor: '#205BB5',
          headerRight: () => <Image source={{ uri: "https://static.wixstatic.com/media/ff0e80_e7eee7deb6c744aeaada503f29197af3~mv2.png/v1/fill/w_130,h_128,al_c,q_85,usm_0.66_1.00_0.01/php_logo%20no%20background%20with%20white%20text_p.webp" }} style={{ width: 37, height: 35 }} /> }}
      />
    </TabTwoStack.Navigator>
  );
}

/* image 6 */


