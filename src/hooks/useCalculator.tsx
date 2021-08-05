import {useRef, useState} from 'react';

enum Operadores {
  suma,
  multiplicar,
  dividir,
  restar,
}

const useCalculator = () => {
  const ultimaOperacion = useRef<Operadores>();

  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = (): void => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const aramarNumero = (numeroTexto: string): void => {
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = (): void => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = (): void => {
    if (numero.includes('-') && numero.length === 2) {
      setNumero('0');
    } else if (numero.length === 1) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, numero.length - 1));
    }
  };

  const cambiarNumPorAnterior = (): void => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = (): void => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = (): void => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  }; 

  const btnRestar = (): void => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = (): void => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.suma;
  };

  const calcular = () => {
    const num1: number = Number(numero);
    const num2: number = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }
    setNumeroAnterior('0');
  };

  return {
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
  };
};

export default useCalculator;
