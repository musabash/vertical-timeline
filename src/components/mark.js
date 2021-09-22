import { useState, useEffect, useContext } from 'react'
import { Mark } from './styles'
import { IntervalContext } from './index'

export default function TimelineMark({...restProps}) {
  const [verPos, setVerPos] = useState(-15)
  const {tick} = useContext(IntervalContext)

  useEffect(() => {
    setVerPos(prev => prev + 10)
  }, [tick])

  return (
    <Mark verPos={verPos} {...restProps}/>
  )
}