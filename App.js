import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View,StatusBar ,TextInput,TouchableOpacity} from 'react-native';
import ContactsList from './screens/ContactsList';
import SearchBar from './components/SearchBar';
import AddContacts from './screens/AddContacts';
import { useEffect } from 'react';
import db,{initDatabase} from './db/db';
import { useState } from 'react';
import FavouriteIcon from './components/FavouriteIcon'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import StackNavigator from './components/StackNavigator';
import Favourites from './screens/Favourites';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import TabNavigator from './components/TabNavigator';
import DrawerNavigator from './components/DrawerNavigator';


const Drawer=createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack=createNativeStackNavigator();



const App=() =>{
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
          {/* <Stack.Navigator 
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
            
          </Stack.Navigator> */}

          {/* <Tab.Navigator
            barStyle={{backgroundColor:"white",paddingBottom:5  }} // Set activeBackgroundColor to transparent,
            activeColor="blue"
           
            
          >
            
            <Tab.Screen name='Contacts' component={StackNavigator}
            options={{
              tabBarLabel:"Contacts",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="contacts" size={30} color="blue" style={styles.tabBarIcon}/>
              ),
              
            }}
             />
            <Tab.Screen name='Favourites' component={Favourites} 
              options={{
                
                tabBarLabel:"Favourites",
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="favorite" size={30} color="blue" style={styles.tabBarIcon}/>
                )
              }}
            />
          </Tab.Navigator> */}

          <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabNavigator}
              options={{
                headerShown:false
              }}
             />
            <Drawer.Screen name='Favourites' component={Favourites}
              options={
                {
                  headerShown:false
                }
              }
            />
          </Drawer.Navigator>

      </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 100, // Set the width to increase icon size
    height: 40, // Set the height to increase icon size
    textAlign: 'center', // Center the icon horizontally
    lineHeight: 30, // Center the icon vertically
  },
  
});

export default gestureHandlerRootHOC(App);
