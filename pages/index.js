import Head from 'next/head'
import image from 'next/image'
import React from 'react'
import { render } from 'react-dom'
import styles from '../styles/Home.module.css'
import top from '../styles/top.module.css'
import name from '../styles/name.module.css'
import production from '../styles/production.module.css'
import theWork from '../styles/theWork.module.css'
import qualification from '../styles/qualification.module.css'


export default function Home() {
    return (
      <>
        <div className="top">
          <div className="row">
            <h1 className={top.title}>履歴書</h1>
          </div>
        </div>
        
          <div className="name">
          <div className="flex">
            <div className="col-2 debug"> 
              <img className="imag-responsive center-block" src={"/image/face.png"} width={"30%"}/>
            </div>
            <div className="col-5 debug">
              <p className={name.myName}>民谷友菜/19歳/女</p>
            </div>
          </div>
        </div>

        <div className="production">
          <div className="row">
            <div className={production.parent}>
              <span className="item">
                <h2 title={production.title}>fusion360学生デザインコンテスト応募作品集</h2>
              </span>
            </div>
          </div>
        </div>

        <div className="theWork">
          <div className="flex">
            <div className="col-5 debug">
              <h3 className={theWork.juice}>「ラムネ瓶」</h3>
              <img className="imag-responsive center-block" src={"/image/juice.png"} width={"30%"}/>
            </div>
            <div className="col-2 debug"> </div>
            <div className="col-5 debug">
              <p className>  </p>
            </div>
            <div className="col-5 debug">
              <p className>  </p>
            </div>
            <div className="col-2 debug"></div>
            <div className="col-5 debug">
              <h4 className={theWork.soba}>「ざるそば」</h4>
              <img className="imag-responsive center-block" src={"/image/soba.png"} width={"30%"}/>
              <p className>  </p>
            </div>
          </div>
        </div>

        <div className="qualification">
          <div className="row">
            <div className="col-12 debug">
            <h5 className={qualification.qualification}>資格・免許</h5>
            <p className={qualification.name}>・自動車運転免許</p>
            </div>
          </div>
        </div>
      </>
    );  
}
