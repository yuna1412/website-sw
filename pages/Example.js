import Head from 'next/head'
import React, { useState } from 'react';
import { render } from 'react-dom'
import exp from '.module.scss'

export default function Example() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link 
                href='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js'
                rel='stylesheet'
            />
            </Head>
          <div>
            <h2>カウント:{count}</h2>
            <button onClick={()=> setCount(count + 1)}>
              Click
            </button>
          </div>

          <ul class="item_wap">
            <li class="item item_01">sap.to</li>
            <li class="item item_02">gsap.from</li>
            <li class="item item_03">gsap.fromTo</li>
          </ul>
        </>
      );  
}
