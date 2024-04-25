import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View,StatusBar ,TextInput,TouchableOpacity} from 'react-native';
import ContactsList from './screens/ContactsList';
import SearchBar from './components/SearchBar';
import AddContacts from './screens/AddContacts';
import { useEffect } from 'react';
import db,{initDatabase} from './db/db';
import { useState } from 'react';
import FavouriteIcon from './components/FavouriteIcon';


const Stack=createNativeStackNavigator();

export default function App() {
  const [contacts, setContacts] = useState([]);
  

  useEffect(() => {
    const loadData = async () => {
      try {
        await initDatabase(db);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);
  return ( 
    <>
    <StatusBar backgroundColor="#1a75ff" />
   <NavigationContainer> 
      <Stack.Navigator 
        screenOptions={
          {
            headerTintColor:"#1a75ff",
            headerStyle:{
              backgroundColor:"white"
            }
          } 
        }
        
        
      >
        <Stack.Screen name='Contacts List' component={ContactsList} 
          options={{
            headerTitle: () => (
              <SearchBar/>
            ),
          }}
        />

        <Stack.Screen name='Add Contacts' component={AddContacts} 
          options={
            {
              headerRight:()=>{
                return(
                  <FavouriteIcon/>
                );
              }
            }
          }
        />
        
      </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  
  
});
