import {useState} from 'react'
import Slider from '@react-native-community/slider';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import {ModalPassword} from './src/components/modal/index'

let charset = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ123456789"

export default function HomeScreen() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState ("")
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
        

    <Text style={styles.title}>{size} caracteres </Text>
    
    <View style={styles.area}>
      <Slider
        style={{ height: 50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='gray'
        minimumTrackTintColor='blue'
        thumbTintColor='#392de9'
        value={size}
        onValueChange={ (value) => setSize(value.toFixed(0))}
        />
    </View>
    <TouchableOpacity style={styles.button} onPress={generatePassword}>
      <Text style={styles.buttonText}>Gerar Senha</Text>
    </TouchableOpacity>

    <Modal visible={modalVisible} animationType='fade' transparent={true}>
      <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
    </Modal>

        </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 68,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: "#fff",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  }
})
