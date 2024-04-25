import { View, Text ,StyleSheet, Image} from 'react-native'
import React from 'react'

const ContactsCard = ({item}) => {
  return (
    <View style={styles.card}>
        <View style={styles.image}>
        <Image 
            source={{uri: item.imageUri ? item.imageUri : `https://ui-avatars.com/api/?name=${item.fullName}&size=20&background=ffffff&color=003380&rounded=true`}} 
            style={styles.avatar} 
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
        padding:10,
        margin:5,
        
        alignItems:"center"
    },
    image:{
        marginLeft:30,
        marginRight:30,
        borderColor:"white",
        borderWidth:1,
        borderRadius:75,
     
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30, 
        
    }
});

export default ContactsCard
