import { View, Text ,TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


const SearchBar = () => {
  const [searchTerm,setSearchTerm]=useState("");
  const navigation=useNavigation();
  //console.log("from searchbar",searchTerm)
  const onSearch=(text)=>{
    setSearchTerm(text)
    //console.log("transfer",text)
    navigation.navigate('Contacts List',{data:text})
  }
  return (
    <TouchableOpacity  style={styles.touchable}>
      <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search "
                  placeholderTextColor="#1a75ff"
                  value={searchTerm}
                  onChangeText={onSearch}
                  
                />
      </View>
    </TouchableOpacity>
    
  )
}

const styles=StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:25,
       
      
      },
      searchInput: {
        flex: 1,
        color: '#1a75ff',
        borderWidth: 2,
        borderColor: '#1a75ff',
        borderRadius: 15,
        padding:10,
        margin:10,
        
        
      },
      touchable:{
        width:"100%"
      }
});

export default SearchBar