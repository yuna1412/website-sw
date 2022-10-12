import Head from 'next/head'
import Link from 'next/link';
import { gsap }  from 'gsap';
import Nav from '../components/Nav';
import React, { useState, useRef, useEffect } from 'react';
import example from '../styles/example.module.scss'
import navSheet from '../styles/nav.module.scss'
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import { initScriptLoader } from 'next/script';


export default function nav() {
  const [show, setShow] = useState(false) //useState定義(初期値:false)
  const navRef = useRef()
  const window =useRef()

  //openModal setShowをtrueに
  const openModel = () => {
    gsap.set(window.current, {
      opacity:0,
    })
    gsap.to(window.current, {
      opacity:1,
      duration:0.1,
      onStart: () => {
        // navRef.current.start() 
        console.log(navRef.current)
      }
    })
    setShow(true)
  }

  return(
    <>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
      <div>
         <a href="#" className={navSheet.button} onClick={openModel}>Click</a> 
         <div  ref={window}>
          <Nav ref={navRef} show={show} setShow={setShow}/>
        </div>
      </div>
      
      <div className={example.all}>
        <Link href="/resume"><a>履歴書ページ</a></Link><br/>
        <Link href="/test"><a>ボタンページ</a></Link><br/>
        <Link href="/anime"><a>テキストアニメーションページ</a></Link>
      </div>
    </>
  );  
}
