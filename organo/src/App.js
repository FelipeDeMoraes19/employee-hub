import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react'
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])

  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome= "Programação" />
      <Time nome= "Frontend" />
      <Time nome= "Data Science" />
    </div>
  );
}
export default App;
