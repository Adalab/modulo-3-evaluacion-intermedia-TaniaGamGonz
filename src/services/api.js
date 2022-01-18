// Fichero src/services/api.js
const getAdalabers = () => {

    return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json') 
      .then(response => response.json())
      .then(response => {
       //Limpieza de datos simple
        const results = response.results
        return results;
      });
  };
  
  export default getAdalabers;