import React from 'react'
import { Link } from 'react-router-dom'
import style from './TourDomestic.module.css'
export default function HaNoi() {
  return (
    <div>
        <div><Link to="/">Trang chủ</Link> &gt; <span style={{color: '#1ba0e2'}}>Du lịch Hà Nội</span></div>
        <div className={style.Before} style={{textAlign: 'center', color: '#1ba0e2', fontSize: 25, position: 'relative', fontWeight: 500}}>Du lịch Hà Nội</div>
    </div>
  )
}
