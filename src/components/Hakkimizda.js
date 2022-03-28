import React from 'react'
import { hakkimizda } from '../textContent'

const Hakkimizda = () => {
    return (
        <div className='hakkimizda-con'>
            <h1>Hakkımızda</h1>
            <ol>
                <li>
                    Biz Kimiz
                    <ul>
                        <li>12 yıldır temizlik sektöründe çalışanlarız</li>
                        <li>Müşteri memnuniyeti anlayışıyla çalışanlarız</li>
                    </ul>
                </li>
                <li>
                    Ne Yaparız
                    <ul>
                        <li>Ev, ofis ve apartman gibi temizlikleri</li>
                        <li>Mobilya temizliği</li>
                        <li>İnşaat temizliği</li>
                        <li>Güvenlik Temini</li>
                        <li>Hamal Temini</li>
                        <li>Tadilat ve Tamirat için usta temini</li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}

export default Hakkimizda