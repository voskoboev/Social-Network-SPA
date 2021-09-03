import React from 'react'
import styled from 'styled-components'

const CardItem = styled.div`
  padding: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardItemTitle = styled.h2`
  margin-bottom: 20px;
`


const Card = ({ card }) => {
  const { title, body } = card

  return (
    <CardItem>
      <CardItemTitle>
        {title}
      </CardItemTitle>
      <div>
        {body}
      </div>
    </CardItem>

  )
}

export default Card
