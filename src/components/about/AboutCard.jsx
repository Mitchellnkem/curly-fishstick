/* eslint-disable no-unused-vars */
import React from 'react'
import Heading from '../common/heading/Heading'
import "./about.css"
import { homeAbout } from '../../dummydata'
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
	<>
	  <section className="aboutHome">
		<div className="contaimer flexSB">
		  <div className="left row"> 
			{/* <img src="./images/about.webp" alt='' /> */}
		  </div>
		  <div className="right row"> 
			<Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
		  </div>
		</div>
	  </section>
	</>
  )
}

export default AboutCard
