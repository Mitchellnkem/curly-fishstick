
// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { team } from 'react-router-dom'

const TeamCard = ({ team }) => {
  return (
	<>
	  {team.map((val) => (
		// eslint-disable-next-line react/jsx-key
		<div key={val.id} className="items shadow">
			<div className="img">
				<img src={val.cover} alt="{val.name}" />
				<div className="overlay">
					<i className='fab fa-facebook-f icon'></i>
					<i className='fab fa-twitter'></i>
					<i className='fab fa-instagram icon'></i>
					<i className='fab fa-tiktok icon'></i>
				</div>
			</div>
			<div className="details">
				<h2>{val.name}</h2>
				<p>{val.work}</p>
			</div>
		</div>
	  ) )}
	</>
  )
}

export default TeamCard
