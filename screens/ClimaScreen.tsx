import { Alert, Button, ImageBackground, StyleSheet, Text, TextComponent, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ClimaScreen() {
    const [ciudad, setciudad] = useState("")
    const [temperatura, settemperatura] = useState(0)

    function mensaje(){
        Alert.alert("Clima", "El Clima de "+ ciudad +" es de "+temperatura)
    }
  return (
    <ImageBackground 
    source={{uri:"https://4kwallpapers.com/images/walls/thumbs_3t/5087.jpg"}}
    style={styles.container}
    >
        <Text style={{color:'white', fontSize:50}}>CLIMA</Text>
        <TextInput
            placeholder='Ingrese Ciudad'
            placeholderTextColor={'white'}
            style={styles.input}
            onChangeText={(text)=> setciudad(text)}
        />
        <TextInput
            placeholder='Ingresar Clima'
            placeholderTextColor={'white'}
            style={styles.input}
            onChangeText={(text)=> settemperatura(+text)}
            keyboardType='numeric'
        />
        <Button title='Aceptar' color={'orange'} onPress={mensaje}/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        backgroundColor:"#666",
        height:50,
        width:"80%",
        marginBottom:10,
        borderRadius:20,
        paddingHorizontal:20,
        fontSize:25,
        color: 'white'
    }
})