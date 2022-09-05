import Head from 'next/head'
import top from '../styles/top.module.css'
import name from '../styles/name.module.css'


export default function Top() {
    return(
        <>
            <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link
                href='/styles/Reset.css'
                rel="stylesheet"/>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"             
                crossorigin="anonymous"/>
            </Head>
            <h1 className={top.title}>履歴書</h1>
            <div className={name.beside}>
              <img className={name.img_F} src={"/image/face.png"}/>
              <p className={name.myName}>民谷友菜/19歳/女</p>
            </div>
        </>
    );
}