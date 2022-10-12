// import '../styles/bootstrap.min.scss'
import Head from 'next/head'
import work from '../styles/work.module.scss'

export default function Work() {
    return (
      <>
        <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <table className={work.ta_wrapper}>
          <tbody>
            <tr>
              <td className={work.main}>
              <p className={work.juice}>「ラムネ瓶」</p>
              <img className={work.juice_img} src={"/image/juice.png"}/>
              </td>
              <td className={work.cen}></td>
              <td className={work.main}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={work.main}></td>
              <td className={work.cen}></td>
              <td className={work.main}>
              <p className={work.soba}>「ざるそば」</p>
              <img className={work.soba_img} src={"/image/soba.png"}/>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
}


