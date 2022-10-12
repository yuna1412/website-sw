import Head from 'next/head'
import Link from 'next/link';
import { gsap }  from 'gsap';
import Anime from '../components/Anime';
import React, { useState, useRef, useEffect } from 'react';
import example from '../styles/example.module.scss'
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import { initScriptLoader } from 'next/script';


export default function anime() {
  const [show, setShow] = useState(false) //useState定義(初期値:false)

  //openModal setShowをtrueに
  const openModel = () => {
    setShow(true)
  }

  return(
    <>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
      <div>
         <button onClick={openModel}>Click</button> 
        <div>
          <Anime show={show} setShow={setShow}/>
        </div>
      </div>
      
      <div className={example.all}>
        <Link href="/"><a>モーダルページ</a></Link><br/>
        <Link href="/resume"><a>履歴書ページ</a></Link><br/>
        <Link href="/test"><a>ボタンページ</a></Link>
      </div>
    </>
  );  
}
