import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import AddIncome from '../screens/AddIncome';
import { useTheme } from 'react-native-paper';
import AddExpense from '../screens/AddExpense';
export type RootStackParamList = {
    Home: undefined;
    AddIncome: undefined;
    AddExpense: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigateApp = () => {
    const { colors } = useTheme()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerStyle: { backgroundColor: colors.primary },
                    headerTintColor: colors.surface
                }}
            >
                <Stack.Screen name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='AddIncome'
                    component={AddIncome}
                    options={{ headerTitle: "Add Income" }}
                />
                <Stack.Screen name='AddExpense'
                    component={AddExpense}
                    options={{ headerTitle: "Add Expense" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigateApp

const styles = StyleSheet.create({})