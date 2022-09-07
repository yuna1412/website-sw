import Head from 'next/head'
import { gsap }  from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom'
import example from '../styles/example.module.scss'

export default function Example() {
    const countText = useRef();
    let flg = false 

    const handOffClick = () => {
    if(flg == false){
        gsap.to(countText.current, {
            opacity: 0
            });
        flg=true
    }else{
        gsap.to(countText.current, {
            opacity: 1
            });
        flg=false
    }
    }

    return (
        <>
          <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
          <div className={example.all}>
            <h2 ref={countText}>カウント</h2>
            <button onClick={handOffClick}>
              Click
            </button>
          </div>
        </>
      );  
}