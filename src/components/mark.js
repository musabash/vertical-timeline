import { useState, useEffect, useContext } from 'react'
import { Mark } from './styles'
import { IntervalContext } from './index'

export default function TimelineMark({initialVerPos,...restProps}) {
  const [verPos, setVerPos] = useState(initialVerPos)
  const {tick} = useContext(IntervalContext)

  useEffect(() => {
    setVerPos(prev => prev + 10)
  }, [tick])

  return (
    <Mark verPos={verPos} {...restProps}/>
  )
}