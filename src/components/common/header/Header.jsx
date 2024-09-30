/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './header.css'
import Head from './Head'

const Header = () => {
	const [click, setClick] = useState(false)
  return (
	<div>
	  <Head />
	  <header>
		<nav className="flexSB">
			<ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/courses">All Courses</Link>
				</li>

				<li>
					<Link to="/about">About</Link>
				</li>

				<li>
					<Link to="/team">Team</Link>
				</li>

				<li>
					<Link to="/pricing">Team</Link>
				</li>

				<li>
					<Link to="/journal">Journal</Link>
				</li>

				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>

			<div className="start">
				<div className="button">GET HELP</div>
			</div>

			<button className="toggle" onClick={() => setClick(!click)}>
				{click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
			</button>
			
		</nav>
	  </header>



	</div>
  )
}

export default Header