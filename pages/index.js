import Head from 'next/head'
import image from 'next/image'
import React from 'react'
import Top_Name from '../components/Top_Name';
import Production_Work from '../components/Production_Work';
import Qualification from '../components/Qualification';
import { render } from 'react-dom'
import styles from '../styles/Home.module.css'
import top from '../styles/top.module.css'
import name from '../styles/name.module.css'
import production from '../styles/production.module.css'
import work from '../styles/work.module.css'
import qualification from '../styles/qualification.module.css'

export default function Index() {
    return (
      <>
        <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <Top_Name/>
        <Production_Work/>
        <Qualification/>
      </>
    );  
}
