import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  
  grid-gap: 30px;
  padding-top: 40px;
  padding-bottom: 40px;
`

const CardList = ({ cards, deleteCard }) => {

  console.log('card list cards', cards);

  return (
    
      <List>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              // deleteCard={deleteCard}
            />
          )
        })}
      </List>

  )
}

export default CardList
