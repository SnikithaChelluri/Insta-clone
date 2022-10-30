import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import Header from './components/home/Header'

const Stack = createStackNavigator()

const screenOptions ={
 headerShown: false,
}

const SignedInStack=()=>{
    return(
<NavigationContainer>
    <Stack.Navigator
    initialRouteName='HomeScreen'
    screenOptions={screenOptions}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    </Stack.Navigator>
</NavigationContainer>  )
}

export default SignedInStack
