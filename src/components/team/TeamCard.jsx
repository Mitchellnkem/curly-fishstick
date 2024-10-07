import React from 'react'

const team = [
  {
    cover: 'image1.jpg', // Replace with actual image path
    name: 'John Doe',
    work: 'Developer',
  },
  {
    cover: 'image2.jpg',
    name: 'Jane Smith',
    work: 'Designer',
  },
  // Add more team members as needed
]

const TeamCard = () => {
  return (
    <>
      {team.map((val, index) => (
        <div key={index} className="items shadow">
          <div className="img">
            <img src={val.cover} alt={val.name} />
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
      ))}
    </>
  )
}

export default TeamCard

















// import React from 'react'
// import { team } from 'react-router-dom'
// // import team from 'react-router'

// const TeamCard = () => {
//   return (
// 	<>
// 	  {team.map((val) => (
// 		// eslint-disable-next-line react/jsx-key
// 		<div className="items shadow">
// 			<div className="img">
// 				<img src={val.cover} alt="" />
// 				<div className="overlay">
// 					<i className='fab fa-facebook-f icon'></i>
// 					<i className='fab fa-twitter'></i>
// 					<i className='fab fa-instagram icon'></i>
// 					<i className='fab fa-tiktok icon'></i>
// 				</div>
// 			</div>
// 			<div className="details">
// 				<h2>{val.name}</h2>
// 				<p>{val.work}</p>
// 			</div>
// 		</div>
// 	  ) )}
// 	</>
//   )
// }

// export default TeamCard
