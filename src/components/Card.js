import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const CardItem = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const CardItemTitle = styled.h2`

`

const CardImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`

const DateAndTimeContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`

const Date = styled.div`
  color: #c9c9c9;
`

const CardBtn = styled.button`
  width: 100%;
  border: none;
  padding: 15px;
  cursor: pointer;
  transition: .3s all ease;
  background-color: #d9d9d9;
  
  &:hover {
    background-color: red;
    transition: .3s all ease;
  }
`


const Card = ({ card, deleteCard }) => {
  const { title, body, date, time, id, imageUrl } = card

  const history = useHistory()

  return (
    <CardItem>
      <CardImage
        src={imageUrl}
        alt="card-img"
      />
      {/* <CardItemTitle>
        {title}
      </CardItemTitle>
      <div>
        {body}
      </div> */}
      <DateAndTimeContainer>
        <Date>
          {date}
        </Date>
        <div>
          {time}
        </div>
      </DateAndTimeContainer>
      {/* <button
        onClick={() => deleteCard(card)}
      >
        Delete
      </button> */}
      <CardBtn
        onClick={() => history.push(`/cards/${id}`)}
      >
        Open
      </CardBtn>
    </CardItem>

  )
}

export default Card
