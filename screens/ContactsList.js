import { View, Text ,StyleSheet, Pressable, TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import db from '../db/db';
import { getContacts } from '../db/contacts';
import ContactsCard from '../components/ContactsCard';

const ContactsList = () => { 
    const [contacts, setContacts] = useState([]);
    const navigation=useNavigation();

    useEffect(() => {
        const loadData = async () => {
          try {
            //await initDatabase(db);
            const contacts = await getContacts(db);
            setContacts(contacts);
            console.log("Contacts loaded:", contacts);
          } catch (error) {
            console.error(error);
          }
        };
        loadData();
      }, []);

    const goToAddContacts=()=>{
        navigation.navigate('Add Contacts')
    }
  return (
    <View style={styles.container}>
        <FlatList 
            data={contacts}
            renderItem={({item})=>{
                return(
                    <ContactsCard item={item}/>
                );
            }}
        />
        <View style={styles.addContainer}>
            <View style={styles.addIcon }>
                <TouchableOpacity onPress={goToAddContacts} activeOpacity={0.6}>
                    <AntDesign name="pluscircle" size={60} color="#1a75ff" />
                </TouchableOpacity>
                
            </View>
        </View>
    </View>
    
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:'center',
        position: "relative", // Make the container relative
    },
    addContainer:{
        flex:1,
        alignSelf:"flex-end",
        justifyContent:'flex-end',
        marginVertical:40,
        marginHorizontal:30,
        position: "absolute", // Position absolutely
        bottom: 20, // Adjust bottom spacing as needed
        right: 20, // Adjust right spacing as needed
    },
    
    
})

export default ContactsList