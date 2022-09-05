import Head from 'next/head'
import image from 'next/image'
import React from 'react'
import Link from 'next/link';
import Top from '../components/Top';
import { render } from 'react-dom'
import styles from '../styles/Home.module.css'
import top from '../styles/top.module.css'
import name from '../styles/name.module.css'
import production from '../styles/production.module.css'
import work from '../styles/work.module.css'
import qualification from '../styles/qualification.module.css'


export default function Home() {
    return (
      <>
        <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link
          href='/styles/Reset.css'
          rel="stylesheet"/>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"             
          crossorigin="anonymous"/>
        </Head>
        <Top></Top>

        <div>
        <h2>fusion360学生デザインコンテスト応募作品集 一覧</h2>
        <Link href="/Production"><a>ここから</a></Link>

        <h2>資格・免許</h2>
        <Link href="/Qualification"><a>ここから</a></Link>
        </div>
      </>
    );  
}
