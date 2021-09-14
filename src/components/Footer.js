import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  border-top: 1px solid #d9d9d9;
  padding: 20px;
`

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <h1>footer</h1>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
