import { View, Text ,StyleSheet, Image,Animated} from 'react-native'
import React, { useRef }  from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ContactsCard = ({ item }) => {
    // const swipeableRef = useRef(null);

    // const handleLeftSwipe=()=>{
       
    //     return(
    //         <View style={styles.leftSwipe}>
    //             <FontAwesome name="trash" size={30} color="white" />
    //         </View>
    //     )
    // }
    // const handleRightSwipe=(progress,dragX)=>{
    //     return(
    //         <Animated.View style={[styles.rightSwipe]} >
            
    //             <AntDesign name="edit" size={30} color="white" />
              
                
    //         </Animated.View>
    //     )
    // }
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
        borderWidth:0,
        backgroundColor:"white",
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
    },
    leftSwipe:{
        backgroundColor:"red",
        width:100,
        justifyContent:"center",
        alignItems:"center"
    },
    rightSwipe:{
        backgroundColor:"#1a75ff",
        width:100,
        justifyContent:"center",
        alignItems:"center"
    }
});

export default ContactsCard
