import Head from 'next/head'
import { gsap }  from 'gsap';
import Modal from '../components/Modal';
import React, { useState, useRef, useEffect } from 'react';


export default function modal() {
  const [show, setShow] = useState(false)
  const modal= useRef();
  let isFirst = false

  

  useEffect(() => {
    if(isFirst) return
    isFirst = true
    window.addEventListener("mousedown", ()=>{
      gsap.set(modal.current, {
        opacity: 0,
      })        
      gsap.to(modal.current, {
        opacity: 1,
        duration:2.5
      })
    })
  });

  return(
    <div>
    {/* <button onClick={() => setShow(true)}>Click</button> */}
      <div ref={modal}>
        <Modal/>
      </div>
    </div>
  );  
}
