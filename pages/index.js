import Head from 'next/head'
import image from 'next/image'
import React from 'react'
import Top from '../components/Top';
import Production from '../components/Production';
import Work from '../components/Work';
import Qualification from '../components/Qualification';
import { render } from 'react-dom'
import styles from '../styles/Index.module.css'
import top from '../styles/top.module.css'
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

        <Top/>
        <Production/>
        <Work/>
        <Qualification/>
      </>
    );  
}
