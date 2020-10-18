import React from "react";
import "./styles.css";
import gsap from "gsap";
import black from "./images/black.jpeg";
import blue from "./images/blue.jpeg";
import grey from "./images/grey.jpeg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default function App() {
  React.useEffect(() => {
    const array = gsap.utils.toArray("img");
    const arr1 = [0, 0, 100, 0, 100, 100, 0, 100];
    const arr3 = [0, 0, 100, 0, 100, 100, 0, 100];
    const arr2 = [0, 0, 100, 0, 100, 0, 0, 0];
    const arr4 = [0, 0, 100, 0, 100, 0, 0, 0];

    //0 0, 100% 0%, 100% 100%, 0 100%
    const t1 = gsap.timeline({});

    t1.to(arr1, {
      endArray: arr2,
      onUpdate: (thisTween) => {
        gsap.set(".grey", {
          clipPath:
            "polygon(" +
            arr1[0] +
            "% " +
            arr1[1] +
            "%," +
            arr1[2] +
            "% " +
            arr1[3] +
            "%," +
            arr1[4] +
            "% " +
            arr1[5] +
            "%," +
            arr1[6] +
            "% " +
            arr1[7] +
            "%)"
        });
      }
    }).to(arr3, {
      endArray: arr2,
      onUpdate: (thisTween) => {
        gsap.set(".blue", {
          clipPath:
            "polygon(" +
            arr3[0] +
            "% " +
            arr3[1] +
            "%," +
            arr3[2] +
            "% " +
            arr3[3] +
            "%," +
            arr3[4] +
            "% " +
            arr3[5] +
            "%," +
            arr3[6] +
            "% " +
            arr3[7] +
            "%)"
        });
      }
    });

    // t1.to(".grey", {
    //   clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
    //   onUpdate: (thisTween)=>{

    //   }

    // }).to(".blue", { clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)" });

    ScrollTrigger.create({
      animation: t1,
      trigger: ".App",
      start: "20 20",
      scrub: 3,
      pin: true
    });

    // array.map((img,index) => {
    //   ScrollTrigger.create({

    //     trigger: img,
    //     pin: true,

    //     start: "top top",
    //     markers: true
    //   });
    // });
  }, []);
  return (
    <div>
      <div style={{ width: "100%", height: "100vh", padding: "auto" }}>
        <h1 style={{ textAlign: "center", marginTop: "30%" }}>Scroll Down</h1>
      </div>
      <div className="App">
        <img className="grey" src={grey}></img>
        <img className="blue" src={blue}></img>
        <img className="black" src={black}></img>
      </div>
      <div style={{ width: "100%", height: "100vh", padding: "auto" }}>
        <h1 style={{ textAlign: "center", marginTop: "30%" }}>Scroll Up</h1>
      </div>
    </div>
  );
}
