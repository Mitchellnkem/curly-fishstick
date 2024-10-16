/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <div className="price-card-container">
      {price.map((val, index) => (
        <div key={val.id || index} className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="outline-btn">GET STARTED</button>
        </div>
      ))}
    </div>
  )
}

export default PriceCard
