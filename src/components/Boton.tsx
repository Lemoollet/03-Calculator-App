import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  onPress: (numeroTexto: string) => void;
}

const Boton = (props: Props) => {
  const {texto, color = '#2D2D2D', ancho = false, onPress} = props;

  return (
    <TouchableOpacity
      onPress={() => onPress(texto)}
      style={{
        ...styles.boton,
        backgroundColor: color,
        width: ancho ? 170 : 75,
      }}>
      <Text
        style={{
          ...styles.textBoton,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
  boton: {
    height: 75,
    width: 75,
    borderRadius: 100,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textBoton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '400',
  },
});
