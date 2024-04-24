import { View, Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const AddContacts = () => {
  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
            <View style={styles.field}>
                <Octicons name="person" size={45} color="black" />
                <TextInput style={styles.input} placeholder='Full name' />
            </View>
            <View style={styles.field}>
                <Feather name="phone" size={35} color="black" />
                <TextInput style={styles.input} placeholder='Mobile number'/>
            </View>
            <View style={styles.field}>
                <Entypo name="landline" size={35} color="black" />
                <TextInput style={styles.input} placeholder='Landline number'/>
            </View>
            
            <View style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>Add</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        
    },
    field:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        
    },
    formContainer:{
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    label:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:5,
        color:"#005ce6"
    },
    input:{
        borderRadius:5,
        borderWidth:1,
        padding:10,
        borderColor:"black",
        marginBottom:20,
        width:310,
        marginLeft:20,
        
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"center"
    },
    button:{
        flexDirection:"row",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:10,
        borderColor:"#1a75ff",
        padding:10,
        width:100,
        backgroundColor:"#1a75ff"
    },
    buttonTitle:{
        color:"white",
        fontWeight:"bold",
    }
})

export default AddContacts