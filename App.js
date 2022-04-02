import { Text, View, SafeAreaView,StatusBar} from 'react-native'
import React, { Component } from 'react'
import ItemList from './src/screens/ItemList';
import ItemDetails from './src/screens/ItemDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ItemList' component={ItemList} options={{headerShown:false}}/>
        <Stack.Screen name='ItemDetails' component={ItemDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// export default class App extends Component {
//   render() {
//     return (
//       <SafeAreaView>
        
//           <ItemList/>
//           {/* <ItemDetails/> */}
        
//       </SafeAreaView>
//     )
//   }
// }