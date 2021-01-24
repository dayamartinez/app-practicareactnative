import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import imageSilueta from './assets/silueta.jpg'
import * as imagePicker from 'expo-image-picker'
import * as sharing from 'expo-sharing'

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permission = await imagePicker.requestMediaLibraryPermissionsAsync() // permite el acceso para abrir la galeria
    if(permission.granted === 'false'){
      Alert.alert('Los permisos para acceder a la galeria son requeridos')
      return;
    } 

    const pickerResult = await imagePicker.launchImageLibraryAsync() // abre la galeria y érmite seleccionar una imagen
    if(pickerResult.cancelled === true) return; //si el usuario no selecciona una imagen, continuamos sin hacer nada
    setSelectedImage({localUri: pickerResult.uri()})
  }

  const openShereImage = () => {

  }

  return (
    <View style={style.conteiner}>
      <Text style={style.title}>selecciona una imagen</Text>
      <Image
        source={selectedImage === null ? imageSilueta : selectedImage.localuRI}
        style={style.image} 
      />
      <TouchableOpacity
        style={style.button}
        onPress={openImagePickerAsync}
      >
        <Text style={style.buttonText}> Seleccionar </Text>
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