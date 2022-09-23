import React from 'react'
import Header from '../../components/Home/Header'
import Main from '../../components/Home/Main'
import '../../styles/Home.css'

function Home() {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  )
}

export default Home