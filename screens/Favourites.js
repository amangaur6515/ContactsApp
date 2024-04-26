import { View, Text ,StyleSheet,FlatList,TextInput} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState,useEffect} from 'react'
import db, {initDatabase}from '../db/db';
import {getContacts} from '../db/contacts';
import ContactsCard from '../components/ContactsCard';
import { Octicons } from '@expo/vector-icons';

const Favourites = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm,setSearchTerm]=useState("")
  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === '') {
      loadData(); // Load all favourite contacts if search text is empty
    } else {
      const filteredContacts = contacts.filter(contact =>
        contact.fullName.toLowerCase().includes(text.toLowerCase())
      );
      setContacts(filteredContacts);
    }
  };

  const loadData = async () => {
    try {
      await initDatabase(db);
      const allContacts = await getContacts(db);
      const favouriteContacts = allContacts.filter(contact => contact.isFavourite === 1);
      const sortedContacts = favouriteContacts.sort((a, b) => a.fullName.localeCompare(b.fullName));
      setContacts(sortedContacts);
      console.log("Favourite Contacts loaded:", sortedContacts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    loadData()
  },[])

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Octicons name="three-bars" size={24} color="black" style={styles.icon}/>
        <View style={styles.searchContainer}>
          <TextInput
            value={searchTerm}
            onChangeText={handleSearch}
            style={styles.searchInput}
            placeholder="Search "
            placeholderTextColor="black"
          />
        </View>
      </View>

      <FlatList 
            data={contacts}
            renderItem={({item})=>{
                return(
                    <ContactsCard item={item}/>
                );
            }}
        />
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
  header:{
    height:70,
    backgroundColor:"white",
    elevation:5,
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
    
  },
  searchInput: {
    flex: 1,
    color: 'black',
    borderWidth: 2,
    borderColor: '#1a75ff',
    borderRadius: 15,
    padding:10,
    margin:-5,
    marginLeft:15
    
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:25,
  },
  icon:{
    marginLeft:15
  }
})

export default Favourites