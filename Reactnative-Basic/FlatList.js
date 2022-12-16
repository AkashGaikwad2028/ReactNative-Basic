import React, { useState } from 'react'
import { View,Text, TextInput, Button,ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'

export default function LayoutFlexbox() {
    const [enterGoaltext,setenterGoaltext]=useState("")
    const [courseGoal,setCourseGoal]=useState([]) 

    const handelChange=(entertext)=>{
        setenterGoaltext(entertext)
    }
 const Handelpress=()=>{
    setCourseGoal((currentcourseGoal)=>[
        ...currentcourseGoal,enterGoaltext,
    ])
}

  return (
    <View style={style.layOut}>
     <View style={style.back}>
        <TextInput placeholder='Your corse goal' style={style.border} onChangeText={handelChange}/>
         <Button title='Add Goal' onPress={Handelpress}></Button>
     </View>
     <ScrollView style={style.global}>
            {
                courseGoal.map((res)=>{
                    return(
                        <Text key={res} style={style.goalText}>{res}</Text>
                    )
                })
                }
         </ScrollView>
   
     </View>
  )
}

const style = StyleSheet.create({
    layOut:{
       flexDirection:"column",
       alignItems:"center",
    },
    back:{
        width:"100%",
        marginRight:5,
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"space-between"
    },
    global:{
        flexDirection:"column",
      marginTop:15,
      width:"90%"
    }
    ,
    goalText:{
     backgroundColor:"blue",
     marginTop:20,
     padding:8,
     borderRadius:10,
     fontSize:16,
     color:"white",
     border:"none",
     width:"100%",
     fontWeight:"bold",
    },
    border:{
        flexDirection:"row",
        borderRadius:2,
        borderWidth:2,
        width:"70%",
         paddingLeft:10
    }
})
    