import React from 'react';
import Boton from '../components/Boton';
import appTheme from '../theme/appTheme';
import useCalculator from '../hooks/useCalculator';
import {Text, View} from 'react-native';

const Calculator = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    aramarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculator();

  return (
    <View style={appTheme.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={appTheme.subResultado}>{numeroAnterior}</Text>
      )}
      <Text style={appTheme.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={appTheme.fila}>
        <Boton texto="C" color="#9B9B9B" onPress={limpiar} />
        <Boton texto="+/-" color="#9B9B9B" onPress={positivoNegativo} />
        <Boton texto="del" color="#9B9B9B" onPress={btnDelete} />
        <Boton texto="/" color="#FF9427" onPress={btnDividir} />
      </View>
      <View style={appTheme.fila}>
        <Boton texto="7" onPress={aramarNumero} />
        <Boton texto="8" onPress={aramarNumero} />
        <Boton texto="9" onPress={aramarNumero} />
        <Boton texto="X" color="#FF9427" onPress={btnMultiplicar} />
      </View>
      <View style={appTheme.fila}>
        <Boton texto="4" onPress={aramarNumero} />
        <Boton texto="5" onPress={aramarNumero} />
        <Boton texto="6" onPress={aramarNumero} />
        <Boton texto="-" color="#FF9427" onPress={btnRestar} />
      </View>
      <View style={appTheme.fila}>
        <Boton texto="1" onPress={aramarNumero} />
        <Boton texto="2" onPress={aramarNumero} />
        <Boton texto="3" onPress={aramarNumero} />
        <Boton texto="+" color="#FF9427" onPress={btnSumar} />
      </View>
      <View style={appTheme.fila}>
        <Boton texto="0" ancho onPress={aramarNumero} />
        <Boton texto="." onPress={aramarNumero} />
        <Boton texto="=" color="#FF9427" onPress={calcular} />
      </View>
    </View>
  );
};

export default Calculator;
