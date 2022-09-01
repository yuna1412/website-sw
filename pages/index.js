import Head from 'next/head'
import image from 'next/image'
import React from 'react'
import { render } from 'react-dom'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
      <>
        <div className="container">
          <div className="row">
            <h1>履歴書</h1>
          </div>
        </div>
        
          <div className="container">
          <div className="flex">
            <div className="col-2 debug"> 
              <img className="imag-responsive center-block" src={"/image/face.png"} width={"30%"}/>
            </div>
            <div className="col-5 debug">
              <p className="className">民谷友菜/19歳/女</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="parent">
              <span className="item">
                <h5>fusion360学生デザインコンテスト応募作品集</h5>
              </span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex">
            <div className="col-5 debug">
              <h2>「ラムネ瓶」</h2>
              <img className="imag-responsive center-block" src={"/image/ramunebin.png"} width={"30%"}/>
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
              <h3>「ざるそば」</h3>
              <img className="imag-responsive center-block" src={"/image/zarusoba.png"} width={"30%"}/>
              <p className>  </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 debug">
            <h4>資格・免許</h4>
            <p className="className2">・自動車運転免許</p>
            </div>
          </div>
        </div>
      </>
    );  
}
