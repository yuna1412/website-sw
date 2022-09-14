import Head from 'next/head'
import { gsap }  from 'gsap';
import React, { useState, useEffect, useRef, createRef, forwardRef, useImperativeHandle } from 'react';
import fadeSheet from '../styles/fade.module.scss'
import { render } from 'react-dom'


const _Fade = ( {show, setShow}, ref )=> {
  
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();

  useImperativeHandle(ref, () => ({
    start () {
      gsap.set(text1.current, {
        y: 200,
      })
      gsap.to(text1.current, {
        opacity:1,
        duration:1.5,
        y: 0,
        ease: "Bounce.easeOut",
      })
      gsap.set(text2.current, {
        y: 200,
      })
      gsap.to(text2.current, {
        opacity:1,
        duration:1.5,
        delay:0.1,
        y: 0,
        ease: "Bounce.easeOut",
      })
      gsap.set(text3.current, {
        y: 200,
      })
      gsap.to(text3.current, {
        opacity:1,
        duration:1.5,
        delay:0.2,
        y: 0,
        ease: "Bounce.easeOut",
      })
    },
    end () {
      gsap.set(text1.current, {
        y: 0,
      })
      gsap.to(text1.current, {
        opacity:0,
        duration:1.5,
        delay:0.2,
        y: 200,
        ease: "Bounce.easeOut",
      })
      gsap.set(text2.current, {
        y: 0,
      })
      gsap.to(text2.current, {
        opacity:0,
        duration:1.5,
        delay:0.1,
        y: 200,
        ease: "Bounce.easeOut",
      })
      gsap.set(text3.current, {
        y: 0,
      })
      gsap.to(text3.current, {
        opacity:0,
        duration:1.5,
        y: 200,
        ease: "Bounce.easeOut",
      })
    }
  }));

  return(
    <div>
      {show ? 
        <div>
          <div className={fadeSheet.overlay}>
              <p className={fadeSheet.fadeIn} ref={text1}>モーダルウィンドウ</p>
              <p className={fadeSheet.fadeIn} ref={text2}>モーダルウィンドウ</p>
              <p className={fadeSheet.fadeIn} ref={text3}>モーダルウィンドウ</p>
          </div>
        </div>
      :
        null
      }
    </div>
  )
}

const Fade = forwardRef(_Fade);
export default Fade