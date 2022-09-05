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
        <div className={production.parent}>
          <div className={production.wrapper}>
          <h5 className={production.title}>fusion360学生デザインコンテスト応募作品集</h5>
          </div>
        </div>

        <table className='ta_wrapper'>
          <tbody>
            <tr>
              <td className='main'>
              <p className={work.juice}>「ラムネ瓶」</p>
              <img className={work.img_J} src={"/image/juice.png"}/>
              </td>
              <td className='cen'></td>
              <td className='main'></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className='main'></td>
              <td className='cen'></td>
              <td className='main'>
              <p className={work.soba}>「ざるそば」</p>
              <img className={work.img_S} src={"/image/soba.png"}/>
              </td>
            </tr>
          </tbody>
        </table>

        <Link href="/"><a>トップページへ</a></Link>
      </>
    );
}
