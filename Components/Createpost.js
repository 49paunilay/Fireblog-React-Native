import { View ,TextInput, StyleSheet, Button} from 'react-native';
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';


export default function Createpost({navigation}) {
  const[posttitle,setPosttitle] = useState()
  const[description,setdescription] = useState()
  const postref = collection(db,"posts")

  const addpost = async()=>{
    await addDoc(postref,{title:posttitle,description:description,authorName:auth.currentUser.email})
    alert('post added')
    navigation.navigate('Home')
  }

  return (
    <View style={styles.textareacontainer}>
      <TextInput style={styles.texttitle} value={posttitle} onChangeText={(posttext)=>setPosttitle(posttext)} placeholder='Enter title'/>
      <TextInput style={styles.textdescription} value={description} onChangeText={(postdesc)=>setdescription(postdesc)} placeholder='Enter description'/>
      <View style={styles.submitbutton}>
        <Button title='Submit Post' onPress={addpost}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textareacontainer:{
 
    justifyContent:'center',
    backgroundColor:'#fff',
    padding:10
  },
  texttitle:{
    marginTop:50,
    padding:20,
    borderWidth:2,
    borderColor:'#FF6666',
    borderRadius:20
  }
  ,
  textdescription:{
    height:150,
    marginTop:12,
    borderWidth:2,
    borderColor:'#FF6666',
    borderRadius:20,
    padding:10
  },
  submitbutton:{
    marginTop:15
  }
})