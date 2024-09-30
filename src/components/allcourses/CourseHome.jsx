/* eslint-disable no-unused-vars */
import React from 'react'
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineClasses"

const CourseHome = () => {
  return (
		<>
			<Back title='Explore Now' />
			<CoursesCard />
			<OnlineCourses />
		
		</>
  )
}

export default CourseHome
