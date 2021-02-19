import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Character from './components/Character.js'

const App = () => {
  const [characterData, setCharacterData] = useState([])  // state container for data fetched from API
  

  
  
  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`) // fetches data from API
      .then(res => {
        setCharacterData(res.data)  // puts data into characterData

      })
      .catch(err => {
        console.log(`I feel a disturbance in the Force: ${err}`)
      })
  }, [])

//code below mounts components on webpage, with app being the parent component.
  return (
    <div className="App">
      {<Header/>}
      {
        characterData.map(individual => {// this function iterates over each object in the characterData array and returns a distinct component for each one
          return <Character individual={individual}/>// each component is marked up and styled based off of the character.js file
        })
      }
      {<Footer/>}
    </div>
  )
}

export default App;
