import React from 'react'
import {communication} from '../textContent'
import { contentMap } from '../contentMap'
const Footer = ({ id }) => {
  return (
    <div id={id}>
      <div className='fotoer-con'>
        <div>
          <h3>Yaptığımız İşler</h3>
          {contentMap.map((one,i)=>{
            return(
              <span key={i}>{one.title}</span>
            )
          })}
        </div>
        <div>
          <h3>İletişim</h3>
          <a href={`tel:${communication.phone}`}>{communication.phone}</a>
          <a>İş : 0216 342 88 76</a>
          <a target="_blank" href="https://www.google.com.tr/maps/place/40%C2%B058'02.2%22N+29%C2%B015'53.5%22E/@40.967275,29.2626593,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0xa10de9a46b314f46!7e2!8m2!3d40.9672748!4d29.2648483?hl=tr">Adress : Adnan menderes mah ziya ak sokan sok</a>
        </div>
        <div>
          <h3>Bizimle Alakalı</h3>
          <span>Temizlik Uzmanları</span>
          <span>Personel Temini</span>
        </div>
      </div>
      <div className='for-hakan'>Powered By Hakan Dursun and Lej Company</div>
    </div>
  )
}

export default Footer