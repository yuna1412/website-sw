import Head from 'next/head'
import { gsap }  from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom'
import modal from '../styles/modal.module.scss'


export default function Modal({show, setShow}) {
  const closeModel = () => {
    setShow(false)
  }
  if(show) {
    return (
      <div className={modal.overlay} onClick={closeModel}>
        <div className={modal.content} onClick={(e) => e.stopPropagation()}>
          <p>モーダルウィンドウ</p>
          <button onClick={() => setShow(false)}>close</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}