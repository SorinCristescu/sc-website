import React, { useRef, useEffect, useState } from "react";

import Head from "next/head";
import styled from "styled-components";

import { VFXSpan } from "react-vfx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  // .box {
  //   margin: 500px 0;
  //   width: 100px;
  //   height: 100px;
  //   background-color: blue;
  // }
  // .active {
  //   background-color: yellow;
  // }
  .content {
    width: 100%;
    height: 700vh;
    background: transparent;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }
  .video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

const Test = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const title = useRef(null);
  const subtitle = useRef(null);
  const paragraph = useRef(null);
  const content = useRef(null);
  const video = useRef(null);

  // const [progress, setProgress] = useState(0);

  const handleScroll = (progress) => {
    let accelamount = 0.7;
    let scrollpos = 0;
    let delay = 0;
    scrollpos = progress * video.current.duration;
    delay += (scrollpos - delay) * accelamount;
    video.current.currentTime = delay;
    console.log("delay", delay);
  };
  // setInterval(() => {
  //   console.log("delay", delay);
  // }, 33.3);

  useEffect(() => {
    // console.log(video.current.duration);
    // gsap.to(video.current, {
    //   scrollTrigger: {
    //     trigger: video.current,
    //     start: "top top",
    //     end: "bottom 3000px",
    //     toggleActions: "restart none none none",
    //     scrub: 1,
    //     pin: true,
    //     markers: true,
    //     id: "video",
    //     onEnter: () => console.log("enter"),
    //     onLeave: () => console.log("leave"),
    //     onEnterBack: () => console.log("enter back"),
    //     onLeaveBack: () => console.log("leave back"),
    //     onUpdate: (self) => handleScroll(self.progress.toFixed(3)),
    //     onToggle: (self) => console.log("toggle", self.isActive),
    //     // toggleClass: "active",
    //   },
    //   // x: 800,
    //   // rotation: 360,
    //   duration: 3000,
    // });

    gsap.to(content.current, {
      scrollTrigger: {
        trigger: content.current,
        start: "top top",
        end: "bottom 3000px",
        toggleActions: "restart none none none",
        scrub: 1,
        // pin: true,
        markers: true,
        id: "video",
        // onEnter: () => console.log("enter"),
        // onLeave: () => console.log("leave"),
        // onEnterBack: () => console.log("enter back"),
        // onLeaveBack: () => console.log("leave back"),
        onUpdate: (self) => handleScroll(self.progress.toFixed(3)),
        // onToggle: (self) => console.log("toggle", self.isActive),
        // toggleClass: "active",
      },
      // x: 800,
      // rotation: 360,
      // duration: 3000,
    });

    gsap.fromTo(
      [title.current, subtitle.current, paragraph.current],
      {
        duration: 1,
        y: "100px",
        opacity: 0,
      },
      {
        delay: 2,
        duration: 1,
        y: "0%",
        opacity: 1,
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, [video, content, title, subtitle, paragraph]);

  return (
    <div>
      <Head>
        <title>Test | Sorin Cristescu Studio Production</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {/* <div
          ref={boxA}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
          }}
        ></div>

        <div ref={boxB} className="box"></div>
        <div
          style={{
            width: `${progress}%`,
            height: "3px",
            backgroundColor: "white",
          }}
        ></div>
        <div
          ref={boxC}
          style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        ></div> */}
        <div ref={content} className="content">
          <h1 ref={title}>Test Page</h1>
          <h5 ref={subtitle}>Subtitle</h5>
          <p ref={paragraph}>lorem ipsum</p>
        </div>

        <video
          ref={video}
          className="video"
          src="videos/movie_intro.mp4"
          type="video/mp4"
        />
      </Container>
    </div>
  );
};
export default Test;
