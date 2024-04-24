import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View,StatusBar ,TextInput} from 'react-native';
import ContactsList from './screens/ContactsList';
import SearchBar from './components/SearchBar';
import AddContacts from './screens/AddContacts';
import { useEffect } from 'react';
import db,{initDatabase} from './db/db';
import { useState } from 'react';
const Stack=createNativeStackNavigator();

export default function App() {
  const [contacts, setContacts] = useState([]);
  const addContacts = async (db) => {
    const values = [
      "path_to_image",
      "Aman Gaur",
      "1234567890",
      "123456"
    ];
  
    try {
      await db.transaction(async (tx) => {
        await tx.executeSql("INSERT INTO Contacts (imageUri, fullName, phoneNumber, landlineNumber) VALUES (?, ?, ?, ?);", values);
        console.log("Insert successful");
      });
    } catch (error) {
      console.error("Failed to insert data:", error);
    }
  };
  
  const getContacts = async (db) => {
    try {
      const contacts = [];
      await new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              "SELECT * FROM Contacts",
              [],
              (_, results) => {
                for (let i = 0; i < results.rows.length; i++) {
                  contacts.push(results.rows.item(i));
                }
                resolve();
              },
              (_, error) => {
                console.error("Failed to execute query:", error);
                reject(error);
              }
            );
          },
          (error) => {
            console.error("Transaction error:", error);
            reject(error);
          }
        );
      });
      console.log("Retrieved contacts:", contacts);
      return contacts;
    } catch (error) {
      console.error("Failed to get Contacts from database:", error);
      throw error;
    }
  };
  
  
  useEffect(() => {
    const loadData = async () => {
      try {
        await initDatabase(db);
        await addContacts(db);
        const contacts = await getContacts(db);
        setContacts(contacts);
        console.log("Contacts loaded:", contacts);
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

        <Stack.Screen name='Add Contacts' component={AddContacts} />
      </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  
  
});
