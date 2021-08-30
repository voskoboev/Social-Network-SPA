import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 200px;
  height: 200px;
`

const Card = ({ image }) => (
  <li>
    <Image
      src={image.urls.small}
      alt="images"
    />
  </li>
)

export default Card
