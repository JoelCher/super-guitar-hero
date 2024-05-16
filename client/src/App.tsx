import { useEffect, useState } from 'react'
import './App.scss'
import { useAudio } from './hooks/use-audio'
import { GameCounter, GameItem } from './types/game-counter'
import { game1 } from './assets/game-counters/game1'

/** This means that if a certain item is in the radius of a 100 mills from the current time , it will be displayed */
const DISPLAY_TIME_RADIUS = 100;
function App() {
  const [playing, toggle, audio] = useAudio("/audio.mp3")

  //describes the next icon to display to the screen
  const [stepCounter, setStepCounter] = useState({
    "right": 0,
    "left": 0
  })


  function getDisplayedItems(currTime: number) {
    if (!playing) return;
    //go over every item
    const nextTimes = {
      "right": game1.right[stepCounter.right],
      "left": game1.left[stepCounter.left]
    }
    const res: GameItem[] = [];
    Object.keys(nextTimes).forEach(key => {
      const time = nextTimes[key as GameItem];
      if (Math.abs(time - currTime) <= 200) res.push(key as GameItem)
    })

    return res;
  }

  useEffect(() => {
    window.addEventListener("click", () => {
      toggle();
    })


    let interval = setInterval(() => {
      if (!playing) return;
      const currTime = audio.currentTime;
      const items = getDisplayedItems(currTime * 1000);
      if (items.length)
        console.log(items);
      console.log("CUrrent time is ", currTime)
    }, 100)


    return () => {
      clearInterval(interval);
      window.removeEventListener("click", toggle)
    }
  }, [playing])

  return (
    <div className='app'>
    </div>
  )
}

export default App

