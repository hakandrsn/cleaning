import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const Header = ({ id },props) => {
  const [path,setPath]=useState("")
  console.log(window.location.pathname.slice(1))
  useEffect(()=>{
    setPath(window.location.pathname.slice(1))
    console.log(path)
  },[window.location,path])
  return (
    <div id={id}>
      <div className='logo'>YılTem</div>
      <div>
        <Link className={`link-btn`} to="/">Ana Sayfa</Link>
        <Link className={`link-btn`} to="/hakkimizda">Hakkımızda</Link>
        <Link className={`link-btn`} to="/iletisim">İletişim</Link>
      </div>
    </div>
  )
}

export default Header