import React, { useState } from "react";
import "./App.css";
import Abouts from "./components/AboutsGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TimeLine from "./components/Timeline";
import { historiesData } from "./data/histories";
import { educationsData } from "./data/educations";
import Works from "./components/WorksGrid";
import { BsPersonVcard } from "react-icons/bs";
import { FaSchool, FaLinkedin, FaHistory, FaAward } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { MdWorkOutline, MdMailOutline } from "react-icons/md";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";

const App = () => {
  const [showAbouts, setShowAbouts] = useState(false);
  const [showEducations, setShowEducations] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showWorks, setShowWorks] = useState(false);
  const [showAwards, setShowAwards] = useState(false);

  const toggleAbouts = () => setShowAbouts(!showAbouts);
  const toggleEducations = () => setShowEducations(!showEducations);
  const toggleHistory = () => setShowHistory(!showHistory);
  const toggleWorks = () => setShowWorks(!showWorks);
  const toggleAwards = () => setShowAwards(!showAwards);

  return (
    <div className="App">
      <Navbar />
      <div className="even">
        <div className="contents">
          <div className="parent">
            <img src="../../cat.png" className="child" />
          </div>
          <div>
            <h2>中島 啓太（Keita Nakajima）</h2>
            <h4>
              東京工業大学
              <br />
              情報理工学院 情報工学系 修士課程2年
              <br />
              Defago研究室
            </h4>
            <div>
              <a className="icon" href="https://atcoder.jp/users/Nanashima">
                <img width="30px" height="30px" src="../../atcoder.png" />
              </a>
              <a className="icon" href="https://twitter.com/_Nanashima_">
                <FaXTwitter size="30px" />
              </a>
              <a className="icon" href="https://github.com/Nanashima21">
                <ImGithub size="30px" />
              </a>
              <a className="icon" href="https://www.linkedin.com/in/nanashima/">
                <FaLinkedin size="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="odd">
        <div className="title">
          <button className="toggleButton" onClick={toggleAbouts}>
            {showAbouts ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </button>
          <a className="icon">
            <BsPersonVcard size="40px" />
          </a>
          <h1>Abouts</h1>
        </div>
        {showAbouts && <Abouts />}
      </div>
      <div className="even">
        <div className="title">
          <button className="toggleButton" onClick={toggleEducations}>
            {showEducations ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </button>
          <a className="icon">
            <FaSchool size="40px" />
          </a>
          <h1>Educations</h1>
        </div>
        {showEducations && <TimeLine datas={educationsData} />}
      </div>
      <div className="odd">
        <div className="title">
          <button className="toggleButton" onClick={toggleHistory}>
            {showHistory ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </button>
          <a className="icon">
            <FaHistory size="40px" />
          </a>
          <h1>Experience / History</h1>
        </div>
        {showHistory && <TimeLine datas={historiesData} />}
      </div>
      <div className="even">
        <div className="title">
          <button className="toggleButton" onClick={toggleWorks}>
            {showWorks ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </button>
          <a className="icon">
            <MdWorkOutline size="40px" />
          </a>
          <h1>Works</h1>
        </div>
        {showWorks && <Works />}
      </div>
      <div className="odd">
        <div className="title">
          <button className="toggleButton" onClick={toggleAwards}>
            {showAwards ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </button>
          <a className="icon">
            <FaAward size="40px" />
          </a>
          <h1>Awards</h1>
        </div>
        {showAwards && (
          <h4>
            <ul className="contents_ul">
              <li className="contents_li">
                ・2024年1月 技育CAMP マンスリーハッカソン vol.13
                ウイングアーク1st株式会社賞 作品名「ToGather」
              </li>
              <li className="contents_li">
                ・2023年9月 情報科学ワークショップ
                優秀プレゼンテーション賞「Efficient Simulations of
                Energy-Restricted Mobile Robots」
              </li>
              <li className="contents_li">
                ・2023年3月 法政大学理工学部 卒業論文審査会
                最優秀研究賞「誤認ライトモデルにおける2台の自律分散ロボットに対するランデブーアルゴリズムについて」
              </li>
            </ul>
          </h4>
        )}
      </div>

      <div className="even">
        <div className="title">
          <a className="icon">
            <MdMailOutline size="40px" />
          </a>
          <h1>Contact</h1>
        </div>
        <h4>School : keita.nakajima.au [at] m.titech.ac.jp</h4>
        <h4>Personal : confi2100 [at] gmail.com</h4>
      </div>
      <Footer />
    </div>
  );
};

export default App;
