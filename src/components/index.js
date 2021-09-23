import Card from "./card"
import { useState, useEffect, createContext } from 'react'
import { Container } from "./styles"
import TimelineMark from "./mark"
import NewModal from "./modal"

const IntervalContext = createContext()

export default function VerticalTimeline({events, interval, ...restProps}){
  const [tick, setTick] = useState(0)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [time, setTime] = useState(3000)
  const [isOnLeft, setIsOnLeft] = useState(true)
  const [cards, setCards] = useState([])
  const [marks, setMarks] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [description, setDescription] = useState("")


  useEffect(() => {
    events && setTimeout(() => {
      setIsOnLeft(prev => !prev)
      setMarks(prev => [<TimelineMark
                    key={events[tick].id}
                  />, ...prev.slice(0, 5)])
      setCards(prev => [<Card
                    key={events[tick].id}
                    isOnLeft={isOnLeft}
                    event={events[tick]}
                  />, ...prev.slice(0, 5)])
      setTick(prev => prev < events.length -1 ? prev + 1 : 0 )
    }, time)

    if (isFirstLoad){
      setTime(Math.max(3000, interval || 0))
      setIsFirstLoad(false)
    }      
  }, [tick])

  function handleClick(description){
    setModalIsVisible(prev => !prev)
    setDescription(description)
  }

  const value = {
    tick,
    handleClick,
    modalIsVisible,
    setModalIsVisible,
    description,
    setDescription
  }
  
  return (
    <IntervalContext.Provider value={value}>
      <Container >
          {cards}
          {marks}
      </Container>
      <NewModal />
    </IntervalContext.Provider>
  )
}

export {IntervalContext}