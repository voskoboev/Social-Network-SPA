import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import CardList from '../components/CardList'
import Loader from '../components/UI/Loader'

// const MainWrapper = styled.div`
//   background-color: lightblue;
// `

const Main = () => {
  const [images, setImages] = useState([])

  // const ACCESS_KEY = process.env.REACT_APP_API_ACCESS_KEY

  // const fetchImages = async () => {
  //   try {
  //     await axios.get(`
  //       https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&count=10 
  //    `).then(response => setImages(response.data))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  useEffect(() => {
    // fetchImages()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h1>
        Main
      </h1>

      
      {/* {
        images.length === 0
          ? <Loader />
          : <CardList
            images={images}
          />
      } */}
    </>
  )

}

export default Main
