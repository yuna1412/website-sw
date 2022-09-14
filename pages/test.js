import Head from 'next/head'
import Link from 'next/link';
import Example from '../components/Example';
import example from '../styles/example.module.scss'

export default function test() {
    return (
        <>
          <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
          <Example/>

          <div className={example.link}>
            <Link href="/resume"><a>履歴書ページ</a></Link><br/>
            <Link href="/modal"><a>モーダルページ</a></Link><br/>
            <Link href="/anime"><a>テキストアニメーションページ</a></Link>

          </div>
        </>
      );  
}
