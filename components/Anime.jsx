import Head from 'next/head'
import { gsap }  from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import anime from '../styles/anime.module.scss'
import { render } from 'react-dom'



export default function Anime({show, setShow}) {
  const text = useRef();
  const back = useRef();
  const container = useRef();
  

  //useEffect(この処理は毎回レンダーされると発生する)
  //レンダーの結果が反映された後に動作（実行タイミングをレンダリング後まで遅らせる）
  useEffect(() => {
    console.log(show) //showの値をコンソールで表示(true・false)
    if (show == true) {
      gsap.to(container.current, {  //アニメーション（フェードイン）
        opacity:1, 
        duration:1,
        overwrite: true,  //常に上書き（強制終了）
      })
      container.current.style.display = "block";  //container(ref要素)の中(current)にstyle("block")
    } else {
      gsap.to(container.current, {  //アニメーション（フェードアウト）
        opacity:0, 
        duration:1,
        overwrite: true,  //常に上書き（強制終了）
        onComplete: () => { //アニメーション完了時
          container.current.style.display = "none"; //container(ref要素)の中(current)にstyle("none")
        }
      })
    }
  }, [show])  //showを監視・showに依存（制御のタイミングを決めている）



  //closeModel setShowをfalseに
  const closeModel = () => {
    setShow(false)
  }

    return (
      <div ref={container}>
        <div className={anime.overlay}  onClick={closeModel}>
          <div className={anime.content} onClick={(event) => event.stopPropagation()}>
            <p className={anime.fadeIn}>モーダルウィンドウ</p>
            <button onClick={closeModel}>close</button>
          </div>
        </div>
      </div>
    )
}