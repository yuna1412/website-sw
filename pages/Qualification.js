import Head from 'next/head'
import image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { render } from 'react-dom'
import styles from '../styles/Home.module.css'
import top from '../styles/top.module.css'
import name from '../styles/name.module.css'
import production from '../styles/production.module.css'
import work from '../styles/work.module.css'
import qualification from '../styles/qualification.module.css'

export default function Production() {
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

        <div className={qualification.all}>  
            <h4 className={qualification.qualification}>資格・免許</h4>
            <p className={qualification.name}>・自動車運転免許（仮）</p>
        </div>
        <Link href="/"><a>トップページへ</a></Link>
      </>
    );
}