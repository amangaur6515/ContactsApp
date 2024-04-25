import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

const ContactsCard = ({item}) => {
  return (
    <View style={styles.card}>
        <View style={styles.image}>
        <Image 
    source={{uri: item.imageUri ? item.imageUri : `https://ui-avatars.com/api/?name=${item.fullName}&size=20&background=ffffff&color=003380&rounded=true`}} 
    style={{width: "100%", height: 40}} 
    defaultSource={{uri: `https://ui-avatars.com/api/?name=${item.fullName.charAt(0)}&size=200&background=ffffff&color=003380&rounded=true`}}
/>

        </View>
        <Text style={{fontWeight:"bold",fontSize:20,color:"#1a75ff"}}>{item.fullName}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    card:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"flex-start",
         
        //borderWidth:2,
        //borderColor:"black",
        padding:10,
        margin:10
    },
    image:{
        flexDirection:"row",
        borderColor:"white",
        borderRadius:75,
        borderWidth:1,
        marginLeft:60,
        marginRight:40,
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    }
});

export default ContactsCard