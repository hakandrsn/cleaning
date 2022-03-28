import React from 'react'
import screen from "./screen"
import { refs } from '../refs'

const Referans = ({ id }) => {
  const { width, height } = screen()
  return (
    <div id={id}>
      <h2>Referanslarımız</h2>
      <div className='ref-container' style={{ width: width }}>
        {refs.map((one, i) => {
          return (
            <div key={i} className='ref-row ref-row-1'>
              <img src={one.img} alt={one.content}/>
              <span>{one.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Referans