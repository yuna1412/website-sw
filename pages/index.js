import Head from 'next/head'
import image from 'next/image'
import React from 'react'
import Top from '../components/Top';
import Production from '../components/Production';
import Work from '../components/Work';
import Qualification from '../components/Qualification';
import { render } from 'react-dom'

export default function Index() {
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

        <Top/>
        <Production/>
        <Work/>
        <Qualification/>

        
      </>
    );  
}
