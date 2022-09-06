import Head from 'next/head'
import React from 'react'
import top from '../styles/top.module.css'


export default function Top() {
    return(
        <>
            <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <h1 className={top.title}>履歴書</h1>
            <div className={top.beside}>
              <img className={top.img_F} src={"/image/face.png"}/>
              <p className={top.myName}>民谷友菜/19歳/女</p>
            </div>
        </>
    );
}