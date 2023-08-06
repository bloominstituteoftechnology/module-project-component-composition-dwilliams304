import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './Details';
import Nav from './Nav';
import URL from '../constants/constants';

// const API_KEY = 'DEMO_KEY';
// const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    function grabPhoto () {
      axios.get(URL)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })  
    }

    // grabPhoto();
    setData({
      date: "2023-08-06",
      explanation: "What created this unusual space ribbon?  The answer: one of the most violent explosions ever witnessed by ancient humans. Back in the year 1006 AD, light reached Earth from a stellar explosion in the constellation of the Wolf (Lupus), creating a \"guest star\" in the sky that appeared brighter than Venus and lasted for over two years. The supernova, now cataloged at SN 1006, occurred about 7,000 light years away and has left a large remnant that continues to expand and fade today.  Pictured here is a small part of that expanding supernova remnant dominated by a thin and outwardly moving shock front that heats and ionizes surrounding ambient gas. The supernova remnant SN 1006 now has a diameter of nearly 60 light years.",
      hdurl: "https://apod.nasa.gov/apod/image/2308/SN1006_Hubble_4940.jpg",
      media_type: "image",
      service_version: "v1",
      title: "SN 1006: A Supernova Ribbon from Hubble",
      url: "https://apod.nasa.gov/apod/image/2308/SN1006_Hubble_960.jpg"
    })
    
  }, [])

  if(!data) return <p>Loading photo of the day...</p>
  return (
    <div>
      <Nav date={data.date}/>

      <img src={data.url} className='main-pic'/>

      {
        data && <Details title={data.title} description={data.explanation}/>
      }
    </div>
  )
}

export default App
