import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [slapbot, getSlap] = useState('')

  useEffect(() => {
    axios.get('https://markmscott-slapbot-v1.p.rapidapi.com/Twister')
    .then(res => {
      console.log(res.data.value)
      getSlap(res.data.value)
    })
  })
  return (
    <div className="Joke">
     <p>{slapbot}</p>
    </div>
  );
}

export default App;
