import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './Details';
import Nav from './Nav';
import { PreviousDay, RandomDay, OpenGitHub } from './Helpers'; //Only functionality currently implemented is the OpenGitHub button.


const URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    function grabPhoto () {
      axios.get(URL) //Use axios to fetch data from a certain API -> Nasa APOD
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })  
    }

    grabPhoto();
    
  }, []) //Run on first render, nothing else

  if(!data) return <p>Loading photo of the day...</p>
  return (
    <div>
      <Nav date={data.date} randomDate={RandomDay} openGitHub={OpenGitHub}/> {/** Pass in the functions so th buttons can use them in the Nav component */}

      

      {
        data && <Details title={data.title} description={data.explanation} imgSrc={data.url}/>
      }
    </div>
  )
}

export default App
