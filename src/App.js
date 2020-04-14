import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import Dashboard from './screens/Dashboard'
import Store from './store'
import { ThemeProvider } from 'react-native-elements'
import { Colors } from './styles/colors'

const Stack = createStackNavigator()

const theme = {
  colors: Colors,
  Button: {
    raised: true,
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  )
}

export default App
