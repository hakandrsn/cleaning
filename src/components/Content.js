import React from 'react'
import { contentMap } from '../contentMap'
import screen from "./screen"
import { communication } from '../textContent'
const Content = ({ id }) => {
  const { width } = screen()
  return (
    <div id={id}>
      <div className='for-call'>
        <h2>Detaylı Bilgi İçin</h2>
        <a href={`tel:${communication.phone}`}>Ara</a>
      </div>
      {contentMap.map((one, i) => {
        return (<div key={i} className={`row row-${i + 1}`}>
          <h1>{one.title}</h1>
          <a href={`tel:${communication.phone}`}>
          <img src={one.img} />
          </a>
          <p style={{ width: `${width - 50}px` }}>{one.content}</p>
        </div>)
      })}

    </div>
  )
}

export default Content