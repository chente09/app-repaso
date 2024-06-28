import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function LoginScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, color:'#28150bf7'}}>Login</Text>
      <TextInput
        placeholder='Ingresar nick'
        style={styles.input}
      />
      <TextInput
        placeholder='Ingrese contraseña'
        style={styles.input}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('BottomTab')}>
        <View style={styles.fila}>
          <Text style={{fontSize:20, marginHorizontal:20}}>INGRESAR</Text>
          <Image 
            source={require('../assets/image.png')}
            style={styles.img}
          />
        </View>
        
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#c3551df7',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  input:{
    backgroundColor: 'white',
    height:50,
    width:'80%',
    borderRadius:40,
    margin:10,
    fontSize:19,
    paddingHorizontal:10
  },
  btn:{
    backgroundColor:'#c8b9b1f7',
    borderRadius:40,
    height:70,
    width:'60%',
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    height:40,
    width:40
  },
  fila:{
    flexDirection:'row'
  }

})