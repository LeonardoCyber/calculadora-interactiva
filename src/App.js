import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { evaluate } from 'mathjs';

const animateWithScrollReveal = (selector, duration, origin, distance) => {
  const sr = ScrollReveal();
  sr.reveal(selector, {
    duration,
    origin,
    distance,
  });
};

function App() {
  const [input, setInput] = useState('');
  const agregarInput = val => {
    if (val === '+' || val === '-' || val === '*' || val === '/') {
      if (input.length === 0 || "+-*/".includes(input.charAt(input.length - 1))) {
        return;
      }
    }
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      if (/[\+\-\*\/]/.test(input)) {
        setInput(evaluate(input));
      } else {
        setInput('');
        alert('Entrada no válida. Por favor, ingrese una expresión matemática válida.');
      }
    } else {
      setInput('');
      alert('Por favor ingresar valores para realizar los cálculos');
    }
  };

  useEffect(() => {
    animateWithScrollReveal('.top_scroll', 2000, 'top', '60px');
  }, []);

  return (
    <div className="App top_scroll">
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={() => agregarInput(1)}>1</Boton>
          <Boton manejarClick={() => agregarInput(2)}>2</Boton>
          <Boton manejarClick={() => agregarInput(3)}>3</Boton>
          <Boton manejarClick={() => agregarInput('+')}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={() => agregarInput(4)}>4</Boton>
          <Boton manejarClick={() => agregarInput(5)}>5</Boton>
          <Boton manejarClick={() => agregarInput(6)}>6</Boton>
          <Boton manejarClick={() => agregarInput('-')}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={() => agregarInput(7)}>7</Boton>
          <Boton manejarClick={() => agregarInput(8)}>8</Boton>
          <Boton manejarClick={() => agregarInput(9)}>9</Boton>
          <Boton manejarClick={() => agregarInput('*')}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={() => agregarInput(0)}>0</Boton>
          <Boton manejarClick={() => agregarInput('.')}>.</Boton>
          <Boton manejarClick={() => agregarInput('/')}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
