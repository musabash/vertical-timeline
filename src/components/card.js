import { useState, useEffect, useContext } from 'react'
import { CardContainer, Time, Title, Description} from './styles'
import { IntervalContext } from './index'

export default function Card({event, isOnLeft,...restProps}) {
  const [verPos, setVerPos] = useState(-17)
  const {tick} = useContext(IntervalContext)

  useEffect(() => {
    setVerPos(prev => prev + 10)
  }, [tick])

  return (
    <CardContainer verPos={verPos} isOnLeft={isOnLeft}>
      <Time><span>{event.time}</span></Time>
      <Title>{event.title}</Title>
      <Description>{event.description}</Description>
    </CardContainer> 
  )
}