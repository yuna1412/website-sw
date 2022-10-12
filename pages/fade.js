import Head from 'next/head'
import Link from 'next/link';
import { gsap }  from 'gsap';
import Fade from '../components/Fade';
import React, { useState, useRef, useEffect } from 'react';
import example from '../styles/example.module.scss'
import fadeSheet from '../styles/fade.module.scss'
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import { initScriptLoader } from 'next/script';


export default function fade() {
  const [show, setShow] = useState(false) //useState定義(初期値:false)
  const fadeRef = useRef()
  const window =useRef()

  //openModal setShowをtrueに
  const openModel = () => {
    if(show==false){
      gsap.to(window.current, {
        duration:3,
        onStart: () => {
          fadeRef.current.start()
        }
      })
      setShow(true)
      console.log(true)
    }else if(show==true){
      gsap.to(window.current, {
        duration:3,
        onStart: () => {
          fadeRef.current.end()
        },
        onComplete: () => {
          setShow(false)
        }
      })
      console.log(false)
    }else{
      return null;
    }
  }

  return(
    <>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
      <div>
         <a href="#" className={fadeSheet.button} onClick={openModel}>Click</a> 
         <div  ref={window}>
          <Fade ref={fadeRef} show={show} setShow={setShow}/>
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
