import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import imageSilueta from './assets/silueta.jpg'

const App = () => {
  return (
    <View style={style.conteiner}>
      <Text style={style.title}> Hello</Text>
      <Image
        source={imageSilueta}
        style={style.image} 
      />
      <TouchableOpacity
      style={style.button}
        onPress={() => Alert.alert('Hi :)')}

      >
        <Text style={style.buttonText}>PRESS ME</Text>
      </TouchableOpacity>
    </View>

  )
}

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  title: {
    fontSize: 30,
    color: 'white',
    padding: 15,
    margin: 5
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin:10
  },
  button: {
    width: 90,
    height: 25,
    backgroundColor: 'deepskyblue',
    padding: 3
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
})

export default App