import Head from 'next/head'
import React from 'react'
import top from '../styles/top.module.css'
import qualification from '../styles/qualification.module.css'

export default function Qualification() {
    return (
      <>
        <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className={qualification.all}>  
            <h4 className={qualification.qualification}>資格・免許</h4>
            <p className={qualification.name}>・自動車運転免許（仮）</p>
        </div>
      </>
    );
}