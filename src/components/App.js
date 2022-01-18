import '../styles/App.css';
import { useEffect, useState } from 'react';
import getAdalabers from '../services/api'

function App() {
  //Variables useState
  const [adalabersData, setAdalabersData] = useState([]);


  //Variables normales

  //Llamada a la api
  useEffect( ()=>getAdalabers().then(response => setAdalabersData(response)) ,[]);

  //Funciones


    //Pintar datos
    const renderAdalabers = () => {
      return adalabersData.map( adalaber => {
        return(
          <tr key={adalaber.id}>
            <td>{adalaber.name}</td>
            <td>{adalaber.counselor}</td>
            <td>{adalaber.speciality}</td>
          </tr>
        )
      })
    }

  return (
    <div>
   <table>

  <thead><tr>
    <th>Nombre</th>
    <th>Tutora</th>
    <th>Especialidad</th>
  </tr></thead>
  <tbody>
    {renderAdalabers()}
  </tbody>
</table>
     
    </div>
  );
}

export default App;
