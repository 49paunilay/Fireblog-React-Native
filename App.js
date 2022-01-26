import { NavigationContainer, NavigationRouteContext, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View  ,Button} from 'react-native';
import Createpost from './Components/Createpost';
import Home from './Components/Home';
import Login from './Components/Login';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' options={{headerTitleAlign:'center'}} component={Login}/>
        <Stack.Screen name='Home' component={Home} options={({navigation})=>({
          title:'Home',
          headerTitleAlign:'center',
          headerTitleStyle:{
            color:'#120E43'
          },
          headerStyle:{
            backgroundColor:'#51E1ED',
            headerTitleAlign:'center'
          },
          headerRight:()=>(
            <Button
            title='Logout'
            onPress={()=>navigation.navigate('Login')}
            />
          ),
          headerLeft:()=>(<Text></Text>)
        })}/>
        <Stack.Screen name='Createpost' component={Createpost}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


