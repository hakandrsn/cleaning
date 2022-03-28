import React from 'react'
import { communication } from '../textContent'

const Iletisim = () => {
  return (
    <div className='iletisim-con'>
      <h2>İLETİŞİM</h2>
      <a className='info-a' href={`tel:${communication.phone}`}>Telefon Numaramız : {communication.phone}</a>
      <a className='info-a' target="_blank" href="https://www.google.com.tr/maps/place/40%C2%B058'02.2%22N+29%C2%B015'53.5%22E/@40.967275,29.2626593,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0xa10de9a46b314f46!7e2!8m2!3d40.9672748!4d29.2648483?hl=tr">Adress : Adnan menderes mah ziya ak sokan sok</a>
      <a href={`tel:${communication.phone}`} className='standart-a'>Ulaşmak İçin Tıkla</a>      
      <span></span>
    </div>
  )
}

export default Iletisim