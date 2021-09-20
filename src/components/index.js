import Card from "./card"
import { useState, useEffect, createContext } from 'react'
import { Container } from "./styles"
import TimelineMark from "./mark"

const IntervalContext = createContext()

export default function VerticalTimeline({events, interval, ...restProps}){
  const [tick, setTick] = useState(0)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [time, setTime] = useState(3000)
  const [isOnLeft, setIsOnLeft] = useState(true)
  const [cards, setCards] = useState([])
  const [marks, setMarks] = useState([])

  useEffect(() => {
    events && setTimeout(() => {
      setIsOnLeft(prev => !prev)
      setMarks(prev => [<TimelineMark
                    key={events[tick].id}
                    initialVerPos={-15}
                  />, ...prev.slice(0, 5)])
      setCards(prev => [<Card
                    key={events[tick].id}
                    isOnLeft={isOnLeft}
                    event={events[tick]}
                    initialVerPos={-17}
                  />, ...prev.slice(0, 5)])
      setTick(prev => prev < events.length -1 ? prev + 1 : 0 )
    }, time)

    if (isFirstLoad){
      setTime(Math.max(3000, interval || 0))
      setIsFirstLoad(false)
    }      
  }, [tick])
  
  return (
    <IntervalContext.Provider value={{tick}}>
      <Container {...restProps}>
          {cards}
          {marks}
      </Container>
    </IntervalContext.Provider>
  )
}

export {IntervalContext}