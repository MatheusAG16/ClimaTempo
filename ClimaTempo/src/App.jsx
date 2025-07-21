import './App.css'
import { useEffect, useState } from 'react'
import BarraDePesquisa from './components/BarraDePesquisa'
import ClimaInformacoes from './components/ClimaInformacoes'

function App() {

  ***REMOVED***

  const [cidade, setCidade] = useState('')
  const [cidadeFinal, setCidadeFinal] = useState('')
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

  useEffect(() => {
    // Obtem a localização atual do usuário se ele permitir!
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setCoords({lat: latitude, lon: longitude})
      })
  }, [])

  // Após as coordenadas serem setadas pela API Geolizalize, o useEffect entra em ação, busca os dados na API de Clima e seta os dados nos States.
  useEffect(() => {
    if(coords.lat && coords.lon){
      console.log('Pesquisando clima...')
      console.log(coords.lat, coords.lon)

      // Requisição na API para retornar os dados sobre o clima
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&lang=pt_br&units=metric&appid=${ApiKey}`).then(response => {
        if(!response.ok){
          throw new Error("API fora do ar, tente novamente mais tarde.")
        }
        return(response.json())
      })
      .then(data => {
        setWeatherData(data)
        cidade ? setCidadeFinal(cidade) : setCidadeFinal(data.name)
      })
      .catch((err) => {
        console.error("Erro da API ", err)
      })
    }
  }, [coords])

  return (
    <main>
      <BarraDePesquisa cidade={cidade} onValueChange={handleChange} onPesquisar={handlePesquisar}/>
      {weatherData ? <ClimaInformacoes data={weatherData} cidadeFinal={cidadeFinal} /> : <p>Carregando...</p>}
    </main>
  )
}

export default App
