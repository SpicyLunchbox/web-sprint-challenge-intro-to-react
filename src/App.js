import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Character from './components/Character.js'

const App = () => {
  const [characterData, setCharacterData] = useState([])
  

  
  
  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacterData(res.data)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className="App">
      {<Header/>}
      <h2 className="Header">Characters</h2>
      {
        characterData.map(individual => {
          return <Character individual={individual}/>
        })
      }
      {<Footer/>}
    </div>
  )
}

export default App;
