import Head from 'next/head'
import top from '../styles/top.module.css'
import production from '../styles/production.module.css'
import work from '../styles/work.module.css'

export default function Production_Work() {
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
      </>
    );
}
