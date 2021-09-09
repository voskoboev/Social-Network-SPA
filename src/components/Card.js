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


const Card = ({ card, deleteCard }) => {
  const { title, body, date, time } = card

  return (
    <CardItem>
      <CardItemTitle>
        {title}
      </CardItemTitle>
      <div>
        {body}
      </div>
      <div>
        {date}
      </div>
      <div>
        {time}
      </div>
      <button
        onClick={() => deleteCard(card)}
      >
        Delete
      </button>
    </CardItem>

  )
}

export default Card
