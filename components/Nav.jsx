import Head from 'next/head'
import { gsap }  from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import navSheet from '../styles/nav.module.scss'
import { render } from 'react-dom'


export default function Nav({show, setShow}) {
  const text = useRef();
  const container = useRef();

  //closeModel setShowをfalseに
  const closeModel = () => {
    gsap.to(container.current, {
      opacity:0,
      duration:0.1,
      onComplete: () => {  //アニメーション終了時の処理
        setShow(false)
      }
    })
  }

  const start = () => {
    gsap.to(text.current, {
      opacity:1,
      y: -500,
      ease: "Bounce.easeOut" 
    })
  }

  return(
    <div>
      {show ? 
        <div ref={container}>
          <div className={navSheet.overlay}  onClick={closeModel}>
              <p className={navSheet.fadeIn} ref={text}>モーダルウィンドウ</p>
              <p className={navSheet.fadeIn} ref={text}>モーダルウィンドウ</p>
              <p className={navSheet.fadeIn} ref={text}>モーダルウィンドウ</p>
          </div>
        </div>
      :
        null
      }
    </div>
  )
}