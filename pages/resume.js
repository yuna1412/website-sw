import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Top from '../components/Top';
import Production from '../components/Production';
import Work from '../components/Work';
import Qualification from '../components/Qualification';
import example from '../styles/example.module.scss'

export default function resume() {
    return (
      <>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport"/>
        </Head>

        <Top/>
        <Production/>
        <Work/>
        <Qualification/>

        <div className={example.link}>
          <Link href="/test"><a>ボタンページ</a></Link><br/>
          <Link href="/modal"><a>モーダルページ</a></Link><br/>
          <Link href="/anime"><a>テキストアニメーションページ</a></Link>
        </div>
        
      </>
    );  
}
