import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Caricaturas(props: any) {
    console.log(props.data.title);
    
  return (
    <View>
      <Text style={styles.text}>{props.data.title}</Text>
      <Image 
      source={{uri:props.data.image}}
      style={styles.img}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontSize:30
    },
    img:{
      height:200,
      width:200,
      resizeMode:'contain'
    },
})