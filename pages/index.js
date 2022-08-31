import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Grid, Row, Col} from 'react-bootstrap';

export default function Home() {
  return (
    <Grid>
      <div className="title">
        <Row>
          <h1>履歴書</h1>
        </Row>
      </div>
      <div className="name">
        <Row>
        <Image src="/face.png" width={'100%'}/>
        </Row>
      </div>
    </Grid>
  );
}
