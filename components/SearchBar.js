import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search "
                  placeholderTextColor="#1a75ff"
                />
    </View>
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
});

export default SearchBar