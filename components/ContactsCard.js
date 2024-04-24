import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const ContactsCard = ({item}) => {
  return (
    <View style={styles.card}>
        <View style={styles.image}>
            <Text>Abcd</Text>
        </View>
        <Text style={{fontWeight:"bold",fontSize:20,color:"#1a75ff"}}>{item.fullName}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    card:{
        marginTop:20,
        flexDirection:"row",
        //borderWidth:2,
        //borderColor:"black",
        padding:10,
        margin:10
    },
    image:{
        borderColor:"black",
        borderRadius:75,
        borderWidth:1,
        marginLeft:50,
        marginRight:50,
        width:50,
        height:50
    }
});

export default ContactsCard