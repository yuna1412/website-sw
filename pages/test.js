import Head from 'next/head'
import Example from '../components/Example';

export default function test() {
    return (
        <>
          <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
          <Example/>
        </>
      );  
}
