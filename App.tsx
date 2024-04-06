import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/home';
import { RegisterScreen } from './src/Presentation/views/register/Register'; 
import  {ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo'; 
import { ReservaScreen } from './src/Presentation/views/reserva/ReservaScreen';


export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  ProfileInfoScreen: undefined;
  ReservaScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Nuevo usuario'

            
          }} 
          />

        <Stack.Screen 
                    name="ProfileInfoScreen" 
                    component={ProfileInfoScreen} 
                /> 
                
                <Stack.Screen 
          name="ReservaScreen" 
          component={ReservaScreen} 
          options={{
            headerShown: true,
            title: 'Reservar'   
          }} 
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;