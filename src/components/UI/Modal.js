import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);

  display: ${props => props.elemVisibility ? 'flex' : 'none'};
  align-items: center;
`

const ExitCross = styled.div`
  
`

const ModalInner = styled.div`
  margin: 0 auto;
  padding: 60px;
  background-color: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

const Modal = ({ children, visibility, setVisibility }) => {
  return (
    <ModalWrapper
      elemVisibility={visibility}
      onClick={() => setVisibility(false)}
    >
      <ExitCross>

      </ExitCross>
      <ModalInner
        onClick={ev => ev.stopPropagation()}
      >
        {children}
      </ModalInner>
    </ModalWrapper>
  )
}

export default Modal
