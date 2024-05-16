import { useEffect } from 'react'
import './App.scss'


function App() {

  useEffect(() => {
    const audio = new Audio("/audio.mp3")
    audio.play();

    window.addEventListener("click", () => {
      if (audio)
        console.log(audio.currentTime)
    })
  }, [])
  return (
    <div className='app'>
    </div>
  )
}

export default App
