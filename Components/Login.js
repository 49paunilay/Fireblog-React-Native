import { View, Text ,KeyboardAvoidingView,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';



export default function Login({navigation}) {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const handleRegister = ()=>{
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user = userCredential.user;
            alert(`Welcome ${user.email}`)
            navigation.navigate('Home')
        }).catch((error)=>alert(error.message))
    }
    const handleSignIn = ()=>{
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user = userCredential.user;
            alert(`Welcome back ${user.email}`)
            navigation.navigate('Home')
        }).catch((error)=>alert(error.message))
    }
  return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} placeholder='Enter email'/>
              <TextInput style={styles.input} value={password} onChangeText={(text)=>setPassword(text)} placeholder='Enter password' secureTextEntry/>
          </View>
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttons} onPress={handleSignIn}>
                  <Text style={{alignSelf:'center',color:'white'}}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons} onPress={handleRegister}>
                  <Text style={{alignSelf:'center',color:'white'}}>Register</Text>
              </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    buttonContainer:{
      width:'60%',
      alignItems:'center',
      justifyContent:'center',
      marginTop:30,  
    },
    buttons:{
        backgroundColor:'#0782F9',
        padding:10,
        borderRadius:10,
        width:'100%',
        marginTop:5
    },
    inputContainer:{
        width:"80%"
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5
    }
})