import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import mainImage from './images/doll.png';
import Title from './components/title/title.component';
import Timer from './components/timer/timer.component';
import Timeline from './components/timeline/timeline.component';
import k1 from './images/k1.jpg'
import k2 from './images/k2.jpg'
import k4 from './images/k4.jpg'
import k5 from './images/k5.jpg'
import k6 from './images/k6.jpg'
import k7 from './images/k7.jpg'
import back_mp3 from './images/kplay_back1.mp3'
import k8 from './images/k8.jpg'
import k9 from './images/k9.jpg'
import k10 from './images/k10.jpg'
import k11 from './images/k11.jpg'
import k12 from './images/k12.jpg'
import k13 from './images/k13.jpg'
import k14 from './images/k14.jpg'
import k15 from './images/k15.jpg'
import k16 from './images/k16.jpg'
import k17 from './images/k17.jpg'
import k18 from './images/k18.jpg'
import k19 from './images/k19.jpg'
import k20 from './images/k20.jpg'
import k21 from './images/k21.jpg'
import k22 from './images/k22.jpg'
let timer;

let timer2;

class App extends Component {

  componentDidMount = () => {

    // let doll = document.getElementById("doll")
    // window.addEventListener("mousemove", (e) => {
    //   var deg = (e.pageX / window.innerWidth) * 100;
    //   var deegg = 0;
    //   if (deg < 50) {
    //     deegg = Math.floor(Math.random() * -30) + -1
    //   }


    //   if (deg > 50) {
    //     deegg = Math.floor(Math.random() * 30) + 1;
    //   }

    //   doll.style.transform = "translate(-50%, -50%) rotate(" + deegg + "deg)";
    // })

    // doll.addEventListener("mouseover", e => {
    //   // dollChange();
    // });

    // this.firstPanel([
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1545497784/kashvi/k4.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498490/kashvi/k8.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k21.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k8.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k10.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k12.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k13.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k14.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k15.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k16.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k17.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k18.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k19.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k20.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k22.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k5.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k6.jpg"
    // ]);
    // this.secondPanel([
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498490/kashvi/k12.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k13.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k14.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k15.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k16.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k17.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k18.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k19.jpg",
    //   "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k20.jpg"
    // ]);
    // this.secondPanel([
    //   k12, k13, k14,k15, k16, k17,k18,k19,k20,k21,k22
    // ]);
    // this.thirdPanel([
    //   k4, k5, k6]);
  }

  firstPanel(imageloop) {
    let i = -1;

    if (timer) {
      clearInterval(timer);
    }

    timer = setInterval(e => {
      if (i == imageloop.length - 1) {
        i = -1
      }
      i++;
      let k_img = document.getElementById("kashvi_img");
      k_img.style.backgroundImage = `url(${imageloop[i]})`;
    }, 2000)
  }

  secondPanel(imageloop) {
    let i = -1;

    if (timer2) {
      clearInterval(timer2);
    }

    timer2 = setInterval(e => {
      if (i == imageloop.length - 1) {
        i = -1
      }
      i++;
      let k_img = document.getElementById("kashvi_img2");
      k_img.style.backgroundImage = `url(${imageloop[i]})`;
    }, 2000)
  }

  thirdPanel(imageloop) {
    let i = -1;

    setInterval(e => {
      if (i == imageloop.length - 1) {
        i = -1
      }
      i++;
      let k_img = document.getElementById("kashvi_img3");
      k_img.src = imageloop[i];
    }, 900)
  }

  updatePhotot(e) {
    this.firstPanel(e)
  }


  render() {

    let images = [
      "https://res.cloudinary.com/duxkaxgab/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1545497784/kashvi/k4.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498490/kashvi/k8.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k21.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k8.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k10.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k12.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k13.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k14.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k15.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k16.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k17.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k18.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k19.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k20.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k22.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k5.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k6.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498490/kashvi/k12.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k13.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k14.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k15.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k16.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k17.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k18.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k19.jpg",
      "https://res.cloudinary.com/duxkaxgab/image/upload/v1545498508/kashvi/k20.jpg"
    ]

    return (
      <div>

        {images.map((item, index) => {
          return (
            <div className="background_img" key={index} style={{ backgroundImage: `url(${item})` }}>
              <Title title="Kashvi Sri" slogan={`Month 1`}></Title>
            </div>
          )
        })}
       

        <iframe src={"/mp31"} allow={'autoplay'} style={{ display: 'none' }}></iframe>
        {/* <audio loop={true} autoPlay={true} style={{display:'none'}} controls={true}>
          <source src={"/mp31"} type="audio/mp3"></source>
        </audio> */}
        {/* <div className="box box1" id="box1">
          <img src={mainImage} />
        </div>
        <div className="box box2" id="box2">
          <div className="close-box"></div>
        </div>
        <div className="box box3" id="box3">
          <div className="close-box"></div>
        </div>
        <div className="box box4" id="box4"></div>
        <div className="box box5" id="box5"></div> */}

        <Timer type="mirrage" position="top-left"></Timer>
        <Timer type="birth" position="bottom-right"></Timer>
        <Timer type="birthinit" position="top-right"></Timer>

        {/* <Timeline></Timeline> */}
        {/* <img className={'imgss'} src={k1}></img> */}
        {/* <div className="monts_list transation_all">
            <div onClick={e => this.updatePhotot([
              k7, k7, k9, k8, k10
            ])}>
              <i className="fas fa-heart transation_all"></i>
              <label className="transation_all">1</label>
            </div>
            <div onClick={e => this.updatePhotot([
              k12, k13, k14,k15, k16, k17,k18,k19,k20,k21,k22
            ])}> <i className="fas fa-heart transation_all"></i> <label className="transation_all">2</label></div>
            <div onClick={e => this.updatePhotot([
              k4, k5, k6
            ])}> <i className="fas fa-heart transation_all"></i> <label className="transation_all">3</label></div>
          </div> */}
        {/* <div className="image_con1">
          <img src={k1} id="kashvi_img2"></img>
        </div>
        <div className="image_con2">
          <img src={k1} id="kashvi_img3"></img>
        </div> */}
      </div>
    );
  }
}

export default connect()(App);
