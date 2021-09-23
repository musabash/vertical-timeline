import React, {useContext} from 'react'
import { Modal, Close, Description } from './styles'
import { IntervalContext } from './index'

export default function NewModal ({ children}) {
  const {description, modalIsVisible, handleClick} = useContext(IntervalContext)
  return (
    <Modal visible={modalIsVisible}>
      {children}
      <Description>{description}</Description>
      <Close onClick={() => handleClick("")}>close</Close>
    </Modal>
  )
}