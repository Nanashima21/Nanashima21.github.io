import React from 'react';
import './App.css';
import Abouts from './components/AboutsGrid';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TimeLine from './components/Timeline';
import { historiesData } from './data/histories';
import { educationsData } from './data/educations';
import Works from './components/WorksGrid';

const App = () => {
  return (
    <div className="App">
      <div className='even'>
        <h1>Portfolio</h1>
        <div className='contents'>
          <div className='parent'>
            <img src='../../cat.png' className='child' />
          </div>
          <h2>中島 啓太（Keita Nakajima）</h2>
        </div>
      </div>
      <div className='odd'>
        <h1>Abouts</h1>
        <Abouts />
      </div>
      <div className='even'>
        <h1>Educations</h1>
        <TimeLine datas={educationsData} />
      </div>
      <div className='odd'>
        <h1>Experience / History</h1>
        <TimeLine datas={historiesData} />
      </div>
      <div className='even'>
        <h1>Works</h1>
        <Works />
      </div>
      <div className='odd'>
        <h1>Awards</h1>
        <h3>
          <ul className='contents_ul'>
            <li className='contents_li'>・2023年9月 情報科学ワークショップ 優秀プレゼンテーション賞「Efficient Simulations of Energy-Restricted Mobile Robots」</li>
            <li className='contents_li'>・2023年3月 法政大学理工学部 卒業論文審査会 最優秀研究賞「誤認ライトモデルにおける2台の自律分散ロボットに対するランデブーアルゴリズムについて」</li>
          </ul>
        </h3>
      </div>
      
      <div className='even'>
        <h1>Contact</h1>
        <h3>School : keita.nakajima.au [at] m.titech.ac.jp, Personal : confi2100 [at] gmail.com</h3>
        <h3>X: @_Nanashima_</h3>
      </div>
      <Footer />
    </div>
  );
}

export default App;
