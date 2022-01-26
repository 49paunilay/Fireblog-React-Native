import { View, Text,StyleSheet,SafeAreaView,ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function Home({navigation}) {
  const [blogpost,setBlog] = useState([])
  const postref = collection(db,"posts")
  useEffect(()=>{
    const getPost=async()=>{
      const querySnapshot = await getDocs(postref);
      setBlog(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getPost()
  })
  return (
    <SafeAreaView style={styles.container}>
      <Button title='Add A Post' onPress={()=>navigation.navigate('Createpost')}/>
      <ScrollView>
        {
          blogpost.map((post)=>(<Card title={post.title} authorName={post.authorName} description={post.description}/>))
        }
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
