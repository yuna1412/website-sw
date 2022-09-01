import Head from 'next/head'
import image from 'next/image'
import React from 'react'
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
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        </Head>

          <h1 className={top.title}>履歴書</h1>
          <name className={name.beside}>
              <img className="imag-responsive center-block" src={"/image/face.png"} width={"30%"}/>
              <p className={name.myName}>民谷友菜/19歳/女</p>
          </name>

          <production className={production.parent}>
              <div className={production.wrapper}><h2 className={production.title}>fusion360学生デザインコンテスト応募作品集</h2></div>
          </production>

          <work className={work.beside}>
            <work className={work.group}>
              <h3 className={work.juice}>「ラムネ瓶」</h3>
              <img className="imag-responsive center-block" src={"/image/juice.png"} width={"50%"}/>
            <work className={work.group}></work>
            <work className={work.group}>
              <h4 className={work.soba}>「ざるそば」</h4>
              <img className="imag-responsive center-block" src={"/image/soba.png"} width={"50%"}/>
            </work>
          </work>

          <h5 className={qualification.qualification}>資格・免許</h5>
          <p className={qualification.name}>・自動車運転免許（仮）</p>
      </>
    );  
}
