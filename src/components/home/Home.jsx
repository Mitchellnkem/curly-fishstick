/* eslint-disable no-unused-vars */
import React from 'react'
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from './HAbout'
import Hero from "./hero/Hero"
import Testimonal from './testimonial/Testimonial'
import Hprice from './Hprice'

const Home = () => {
  return (
	<>
	  <Hero />
	  <AboutCard />
	  <HAbout />
	  <Testimonal />
	  <Hblog />
	  <Hprice />
	</>
  )

}

export default Home
