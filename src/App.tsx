import './App.css'
import { useEffect, useState } from 'react';
import {horarioAtual, dataAtual} from './utils/tempo';

function App() {
  const [hora, setHora] = useState(horarioAtual());
  const [data, setData] = useState(dataAtual());
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(horarioAtual());
      setData(dataAtual());
    }, 1000); 

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h1>{data[0]}/{data[1]}/{data[2]} {hora[0]}:{hora[1]}:{hora[2]}</h1>
    </>
  )
}

export default App
