import Head from 'next/head'
import { gsap }  from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom'
import modal from '../styles/modal.module.scss'


export default function Modal({show, setShow}) {
  const text = useRef();

  const closeModel = () => {
    gsap.to(text.current, {
      opacity: 0,
      onComplete: ()=>{
        // setShow(false)
      }
    });
  }

  // if(show) {
    return (
        <div className={modal.overlay}>
          <div className={modal.content}>
            <p ref={text}>モーダルウィンドウ</p>
            <button onClick={closeModel}>close</button>
          </div>
        </div>
    )
  // } else {
  //   return null;
  // }
}