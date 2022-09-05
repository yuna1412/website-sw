import Head from 'next/head'
import React from 'react'
import top from '../styles/top.module.css'
import name from '../styles/name.module.css'


export default function Top_Name() {
    return(
        <>
            <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <h1 className={top.title}>履歴書</h1>
            <div className={name.beside}>
              <img className={name.img_F} src={"/image/face.png"}/>
              <p className={name.myName}>民谷友菜/19歳/女</p>
            </div>
        </>
    );
}