import Head from 'next/head'
import Link from 'next/link';
import { gsap }  from 'gsap';
import Modal from '../components/Modal';
import React, { useState, useRef, useEffect } from 'react';
import example from '../styles/example.module.scss'
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import { initScriptLoader } from 'next/script';


export default function modal() {
  const [show, setShow] = useState(false)
  const modal= useRef();

  
  const openModel = () => {
    gsap.set(modal.current, {
      opacity: 0,
    })
    gsap.to(modal.current, {
      opacity: 1,
      duration: 2,
      onComplete: ()=>{
       setShow(true)
      }
    });
  }

  return(
    <>
      <div>
         <button onClick={openModel}>Click</button> 
          <div style={{display: 'block'}} ref={modal}>
            <Modal show={show} setShow={setShow}/>
          </div>
      </div>
      
      <div className={example.all}>
        <Link href="/resume"><a>履歴書ページ</a></Link><br/>
        <Link href="/test"><a>ボタンページ</a></Link>
      </div>
    </>
  );  
}
