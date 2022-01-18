import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getAdalabers from '../services/api'

function App() {
  //State variables
  const [adalabersData, setAdalabersData] = useState([]);
  const [adalaber, setAdalaber] = useState({});
  const [searchInput, setSearchInput] = useState('');


  //Variables

  //Call to api
  useEffect( ()=>getAdalabers().then(response => setAdalabersData(response)) ,[]);

  //Functions

    //Render data
    const renderAdalabers = () => {
      return adalabersData.filter((adalaber)=>{
        return adalaber.name.toLowerCase().includes(searchInput.toLowerCase());
      })
      .map( adalaber => {
        return(
          <tr key={adalaber.id}>
            <td>{adalaber.name}</td>
            <td>{adalaber.counselor}</td>
            <td>{adalaber.speciality}</td>
          </tr>
        )
      })
    }
    //Events
    const handleSubmit = (event)=>{
      event.preventDefault();
      setAdalabersData([...adalabersData, adalaber]);
      //Reset the object for the new incoming data
      setAdalaber({
        name : '',
        counselor: '',
        speciality: '',
      });
    }
    const handleInput = (event)=>{
      const inputValue = event.target.value;
      const inputName = event.target.name;
      setAdalaber({...adalaber, [inputName] : inputValue});
    }
    const handleInputSearch = (event)=>{
      const inputSearchValue = event.target.value;
      setSearchInput(inputSearchValue);
    }
    

  return (
    <div>
      <header>
        <h1>Adalabers</h1>
      </header>
      <section>
        <form onSubmit={(event)=>{event.preventDefault()}}>
          <label htmlFor="searchInput" className='search__label'>Busar por nombre: 
            <input type="text" name="searchInput" id="searchInput" onChange={handleInputSearch} value={searchInput}/>
          </label>
        </form>
        <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {renderAdalabers()}
        </tbody>
        </table>
      </section>
      <section>
        <h2>Añadir una adalaber</h2>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:
            <input type="text" name="name" id="name"
            onChange={handleInput}
            value={adalaber.name} />
          </label>
          <label htmlFor="counselor">Tutora:
            <input type="text" name="counselor" id="counselor"
            onChange={handleInput}
            value={adalaber.counselor} />
          </label>
          <label htmlFor="speciality">Especialidad:
            <input type="text" name="speciality" id="speciality"
            onChange={handleInput}
            value={adalaber.speciality} />
          </label>
          <button type="submit">Añadir una nueva adalaber</button>
        </form>
      </section>
     
    </div>
  );
}

export default App;
