import Head from 'next/head'
import Modal from '../components/Modal';
import React, { useState } from 'react';


export default function modal() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(true)}>Click</button>
      <Modal show={show} setShow={setShow}/>
    </div>
  );  
}
