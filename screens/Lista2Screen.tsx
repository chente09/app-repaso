import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Lista2Screen() {
    const API_TIENDA= 'https://fakestoreapi.com/products'
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch(API_TIENDA)
      .then(response => response.json())
      .then(datos=> setdata(datos))
      console.log(data);      
    }, [])
    
    type Producto ={
        title:string,
        image:string,
        price:number,
        description:string
    }

    function informacion(producto :Producto){
        Alert.alert('DETALLES', 'Descripción: '+ producto.description)
        // Alert.alert('DETALLES',`Descripición ${producto.description}`)
    }

return (
    <View style={styles.container}>
    <Text>Lista2Screen</Text>
        <FlatList
            data = {data }
            // horizontal
            renderItem={({item}:{item:Producto})=>
                <TouchableOpacity style={styles.item} onPress={()=> informacion(item)}>
                    <Text>{item.title}</Text>
                    <Image
                        source={{uri:item.image}}
                        style={styles.img}
                    />
                    <Text>$ {item.price}</Text>
                </TouchableOpacity>
            }
        />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1917f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item:{
        backgroundColor: '#a24b11f7',
        margin:10,
        // flexDirection:'row'
    },
    img:{
        height:80,
        width:80,
        resizeMode:'contain'
    }
})