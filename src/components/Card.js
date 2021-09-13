import React from 'react'
import { useHistory } from 'react-router-dom'
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

const CardImage = styled.img`
  width: 200px;
  height: 200px;
`


const Card = ({ card, deleteCard }) => {
  const { title, body, date, time, id, imageUrl } = Object.values(card)[0]

  console.log('card card', card);

  console.log('card list cards key', Object.values(card));

  const history = useHistory()

  console.log('imgUrl', imageUrl);

  return (
    <CardItem>
      <CardImage
        src={imageUrl}
        alt="card-img"
      />
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
      <button
        onClick={() => history.push(`/cards/${id}`)}
      >
        Open
      </button>
    </CardItem>

  )
}

export default Card
