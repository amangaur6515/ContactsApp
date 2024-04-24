import { View, Text ,StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ContactsList = () => {
    const navigation=useNavigation();

    const goToAddContacts=()=>{
        navigation.navigate('Add Contacts')
    }
  return (
    <View style={styles.container}>
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
        justifyContent:'center'
    },
    addContainer:{
        flex:1,
        alignSelf:"flex-end",
        justifyContent:'flex-end',
        marginVertical:40,
        marginHorizontal:30,
    },
    
    
})

export default ContactsList