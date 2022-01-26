import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Card({title,authorName,description}) {
  return (
    <View style={styles.card_container}>
        <View style={styles.upperhalf}>
            <Text style={{fontSize:22}}>
            {title}
            </Text>
            <Text style={{fontSize:22}}>
                X
            </Text>
        </View>
        <View style={styles.lowerhalf}>
            <Text>
                {description}
            </Text>
            <Text>
            {`@ ${authorName}`}
            </Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    card_container:{
        backgroundColor:'#23C4ED',
        margin:5,
        borderRadius:10,
        
    },
    upperhalf:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:5,
    },
    lowerhalf:{
        backgroundColor:'#fff',
        margin:2,
        borderRadius:10,
    }
})
