import { View, Text ,StyleSheet, Pressable, TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import db from '../db/db';
import { getContacts } from '../db/contacts';
import ContactsCard from '../components/ContactsCard';
import { initDatabase } from '../db/db';

const ContactsList = ({route}) => { 
    const [searchTerm,setSearchTerm]=useState("")                                   
    const [contacts, setContacts] = useState([]);
    const {data}=route.params || {}

    console.log("from contacts list",searchTerm)
    const navigation=useNavigation();

    useEffect(() => {
      setSearchTerm(data);
    }, [data]);

    const loadData = async () => {
      try {
        await initDatabase(db);
        const contacts = await getContacts(db);
        const sortedContacts = contacts.sort((a, b) => a.fullName.localeCompare(b.fullName));
        setContacts(sortedContacts);
        console.log("Contacts loaded:", sortedContacts);
      } catch (error) {
        console.error(error);
      }
    };
    
    useEffect(() => {
      if (searchTerm) {
        const filteredContacts = contacts.filter((contact) =>
          contact.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setContacts(filteredContacts);
      } else {
        loadData();
      }
    }, [searchTerm]);

    useFocusEffect(
      React.useCallback(() => {
        loadData();
      }, [])
    );
 

    const goToAddContacts=()=>{
        navigation.navigate('Add Contacts',{data:""})
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
        position: "relative", 
    },
    addContainer:{
        flex:1,
        alignSelf:"flex-end",
        justifyContent:'flex-end',
        marginVertical:40,
        marginHorizontal:30,
        position: "absolute", 
        bottom: -10, 
        right: 0, 
    },
    
    
})

export default ContactsList