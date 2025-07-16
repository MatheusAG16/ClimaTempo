import './App.css'
import { useEffect, useState } from 'react'
import BarraDePesquisa from './components/BarraDePesquisa'
import ClimaInformacoes from './components/ClimaInformacoes'

function App() {

  ***REMOVED***

  const [cidade, setCidade] = useState('')
  const [coords, setCoords] = useState({lat: null, lon: null})
  const [weatherData, setWeatherData] = useState(null)

  // Atualiza a cidade conforme o usuário digita no input
  const handleChange = (e) => {
      setCidade(e.target.value)
  }

  // Pesquisa as coordenadas conforme o nome da cidade digitado
  const handlePesquisar = (e) => {
    e.preventDefault();
    
    // Requisição a API para trazer a lat e lon da cidade
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=${'1'}&appid=${ApiKey}`).then(response => {
          if(!response.ok) {
            throw new Error("Cidade não encontrada.");
          }
          return response.json();
        })
        .then(data => {
          if(data.length === 0) {
            throw new Error("Nehuma coordenada encontrada.")
          }
          setCoords({ lat: data[0].lat, lon: data[0].lon })
        })
        .catch(err => {
          console.error(err)
        });
  }


  // Mostra no console as coordenadas buscadas
  useEffect(() => {
    if(coords.lat && coords.lon){
      console.log('Pesquisando clima...')
      console.log(coords.lat, coords.lon)

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`).then(response => {
        if(!response.ok){
          throw new Error("Erro")
        }
        return(response.json())
      })
      .then(data => {
        setWeatherData(data)
      })
    }
  }, [coords])

  if(weatherData){
    console.log(weatherData.main.temp - 273.15)
  }

  return (
    <main>
      <BarraDePesquisa cidade={cidade} onValueChange={handleChange} onPesquisar={handlePesquisar}/>
      {weatherData ? <ClimaInformacoes data={weatherData} cidade={cidade} /> : <p>Busque sua cidade!</p>}
    </main>
  )
}

export default App
