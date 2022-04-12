import React, { useEffect } from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import TaskDetailScreen from '../Screens/TaskDetail';
import AddTaskScreen from '../Screens/AddTask'

const Stack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <Stack.Navigator initialRouteName={'HomeScreen'}>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            <Stack.Screen name={"TaskDetail"} component={TaskDetailScreen} />
            <Stack.Screen name={"AddTask"} component={AddTaskScreen} />
        </Stack.Navigator>
    );
}

function Routes() {
    return (
        <NavigationContainer headerMode="none">
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }} initialRouteName={"Home"}>
           <Stack.Screen name="Home" component={HomeStackNavigator} />    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
