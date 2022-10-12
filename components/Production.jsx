// import '../styles/bootstrap.min.scss'
import Head from 'next/head'
import production from '../styles/production.module.scss'

export default function Production() {
    
    return (
      <>
        <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <div className={production.parent}>
          <div className={production.wrapper}>
          <h5 className={production.title}>fusion360学生デザインコンテスト応募作品集</h5>
          </div>
        </div>
      </>
    );
}
