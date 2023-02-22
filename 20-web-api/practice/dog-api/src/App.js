import DogCard from './components/DogCard';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [dogImages, setDogImages] = useState([])
  const [options, setOptions] = useState([])
  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random/3').then(res => {
      console.log(res.data.message)
      setDogImages(res.data.message)
    })
    axios.get('https://dog.ceo/api/breeds/list/all').then(res => {
      console.log(res.data.message)
      setOptions(Object.keys(res.data.message))
    })
  }, [])

const handleChange = (e) => {
  e.preventdefault()
  axios.get(`https://dog.ceo/api/breeds/${e.target.value}/images/random/3`).then(res => {
    console.log(res.data.message)
    setDogImages(res.data.message)
})
}


  return (
    <div className='app'>    
    <Search options={options} handleChange={handleChange}/>
    <div className='dogCards'>  
    {
    // Map through dogs creating DogCards        
    dogImages.map((image, index) => {
      let dog = {image}
      return (
        <DogCard className="dogCard" dog={dog} key={index} />          
        )
    })
  }
  </div>
  </div>  
  );
}
export default App;
