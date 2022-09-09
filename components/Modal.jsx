import Head from 'next/head'
import { gsap }  from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import modal from '../styles/modal.module.scss'
import { render } from 'react-dom'


export default function Modal({show, setShow}) {
  not.style.display = "none"
  const text = useRef();

  const closeModel = () => {
    gsap.to(text.current, {
      opacity: 0,
      onComplete: ()=>{
       setShow(false)
      }
    });
  }

    return (
        <div className={modal.overlay}>
          <div className={modal.content}>
            <p ref={text}>モーダルウィンドウ</p>
            <button onClick={closeModel}>close</button>
          </div>
        </div>
    )
}