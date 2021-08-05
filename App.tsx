import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Calculator from './src/screens/Calculator';
import mainStyles from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={mainStyles.mainContainer}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
