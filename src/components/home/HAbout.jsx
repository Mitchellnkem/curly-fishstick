/* eslint-disable react/jsx-key */
import React from "react"
import OnlineCourses from "../allcourses/OnlineClasses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <section className='homeAbout'>
      <div className='container'>
        <Heading subtitle='our courses' title='explore our popular online courses' />

        <div className='coursesCard'>
          <div className='grid2'>
            {coursesCard.slice(0, 3).map((val) => (
              <div key={val.id} className='items'>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={val.cover} alt={val.coursesName} />
                    </div>
                  </div>
                  <div className='text'>
                    <h1>{val.coursesName}</h1>
                    <div className='rate'>
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className='fa fa-star'></i>
                      ))}
                      <label>(5.0)</label>
                    </div>
                    <div className='details'>
                      {val.courTeacher.map((details, index) => (
                        <div key={index}>
                          <div className='box'>
                            <div className='dimg'>
                              <img src={details.dcover} alt={details.name} />
                            </div>
                            <div className='para'>
                              <h4>{details.name}</h4>
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='price'>
                  <h3>
                    {val.priceAll} / {val.pricePer}
                  </h3>
                </div>
                <button className='outline-btn'>ENROLL NOW !</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OnlineCourses />
    </section>
  )
}

export default HAbout
