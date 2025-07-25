import './App.css'
import { useEffect, useState } from 'react';
import {horarioAtual} from './utils/tempo';

function App() {
  const [hora, setHora] = useState(horarioAtual())
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(horarioAtual());
    }, 1000); 

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h1>{hora[0]}:{hora[1]}:{hora[2]}</h1>
    </>
  )
}

export default App
