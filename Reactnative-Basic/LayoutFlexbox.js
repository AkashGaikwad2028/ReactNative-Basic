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

const Handelrdelete=(res)=>{
    //   console.log("index==",index,"====res",res)
   let array=[res]
   
    var a= array.filter((item)=>{
        console.log(item,"=======item")
        item.length>=0
    })   
   return setCourseGoal(a)     
}

  return (
    <View>
     <View style={style.back}>
        <TextInput placeholder='Your corse goal' style={style.layOut} onChangeText={handelChange}/>
         <Button title='Add Goal' onPress={Handelpress}></Button>
     </View>
     <View style={style.global}>
            {
                courseGoal.map((res,index)=>{
                    return(
                        <Text key={res} style={style.goalText} onPress={()=>{Handelrdelete(res,index)}}>{res}</Text>
                    )
                })
                }
         </View>
   
     </View>
  )
}

const style = StyleSheet.create({
    layOut:{
        margin:16,
        textAlign:"center",
        padding:2,
        backgroundColor: '#fff',
        borderWidth:2,
        borderColor:"red",
        width:"70%",
    },
    back:{
     flexDirection:"row",
     justifyContent:"space-around",
     alignItems:"center",
    },
    global:{
        flexDirection:"column",
      marginTop:0,
    }
    ,
    goalText:{
     backgroundColor:"blue",
     marginTop:10,
     padding:8,
     borderRadius:10,
     fontSize:16,
     color:"white",
     border:"none",
     fontWeight:"bold",
    }
})
