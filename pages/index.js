import Head from 'next/head'
import image from 'next/image'
import React from 'react'
import { render } from 'react-dom'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
      <>
        <div className="title">
          <div class="row">
            <h1>履歴書</h1>
          </div>
        </div>
        
          <div class="name">
          <div class="row">
            <div class="col-2 debug"> 
              <img className="imag-responsive center-block" src={"/image/face.png"} width={"100%"}/>
            </div>
            <div class="col-8 debug">
              <p class="class">民谷友菜/19歳/女</p>
            </div>
          </div>
        </div>

        <div class="fusiontitle">
          <div class="row">
            <div class="parent">
              <span class="item">
                <h5>fusion360学生デザインコンテスト応募作品集</h5>
              </span>
            </div>
          </div>
        </div>

        <div class="sakuhinn">
          <div class="row">
            <div class="col-5 debug">
              <h2>「ラムネ瓶」</h2>
              <img class="imag-responsive center-block" src={"/image/ramunebin.png"} width={"100%"}/>
            </div>
            <div class="col-2 debug"></div>
            <div class="col-5 debug">
              <p class>  </p>
            </div>
            <div class="col-5 debug">
              <p class>  </p>
            </div>
            <div class="col-2 debug"></div>
            <div class="col-5 debug">
              <h3>「ざるそば」</h3>
              <img class="imag-responsive center-block" src={"/image/zarusoba.png"} width={"100%"}/>
              <p class>  </p>
            </div>
          </div>
        </div>

        <div className="skilltitle">
          <div class="row">
            <div class="col-12 debug">
            <h4>資格・免許</h4>
            <p class="class2">・自動車運転免許</p>
            </div>
          </div>
        </div>
      </>
    );  
}
