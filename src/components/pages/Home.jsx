import React from 'react'
import Hero from '../Main/Hero'
import Row from '../Main/Row'
import requests from '../../reaquests'
const home = () => {
  return (
    <>
      <Hero/>
      <Row title='Top Rated' fetchURL={requests.requestPopular}/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>
    </>
  )
}

export default home