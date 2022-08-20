import React from 'react'
import Hero from '../Main/Hero'
import Row from '../Main/Row'
import requests from '../../reaquests'
const home = () => {
  return (
    <>
      <Hero/>
      <Row rowID = '1' title='Top Rated' fetchURL={requests.requestPopular}/>
      <Row rowID = '2' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID = '3' title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row rowID = '4' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID = '5' title='Horror' fetchURL={requests.requestHorror}/>
    </>
  )
}

export default home