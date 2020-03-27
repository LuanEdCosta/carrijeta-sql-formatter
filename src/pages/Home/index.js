import React, { useState } from 'react'
import AutoHeightInput from '../../components/AutoHeightInput'
import { Container } from './styles'
import Header from '../../components/Header'

const Home = () => {
  const [unformattedSql, setUnformattedSql] = useState('')

  return (
    <Container>
      <Header />
      <AutoHeightInput text={unformattedSql} setText={setUnformattedSql} />
    </Container>
  )
}

export default Home
