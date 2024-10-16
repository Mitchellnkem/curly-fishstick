/* eslint-disable react/jsx-key */
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
			<div className="container flexSB">
				<div className="left row">
					<img src="../images/about.png" alt="" />
				</div>
				<div className="right row">
					<Heading subtitle="LEARN ANYTHING AT ANYTIME" title='Benefits About Online Learning'  />
					<div className="items">
						{homeAbout.map((val, index) => (
								<div className="item flexSB" key={index}>
									<div className="img">
										<img src={val.cover} alt="{val.title}" />
									</div>
									<div className="text">
										<h2>{val.title}</h2>
										<p>{val.desc}</p>
									</div>
								</div>
						))}
					</div>
				</div>
			</div>
	  	</section>
	  <Awrapper />
	</>
  )
}
export default AboutCard
