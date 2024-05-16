import { useEffect } from 'react'
import './App.scss'
import { useAudio } from './hooks/use-audio'


function App() {
  const [playing, toggle] = useAudio("/audio.mp3")

  useEffect(() => {
    window.addEventListener("click", () => {
      toggle();
    })


    // return () => {
    //   window.removeEventListener("click")
    // }
  }, [])

  return (
    <div className='app'>
    </div>
  )
}

export default App

