"use client"
import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { motion } from "framer-motion";
import Card from "./card";
import { useEffect,useState } from "react";


export default function Home() {
  const [dim, setDim] = useState({width:0, height:0})
  const [hov, shov] = useState(false)
  useEffect(() => {
    setDim({width:window.innerWidth, height:window.innerHeight}) }, [])
  return (
    <div className={classes.desktop}>
    
      <div className={classes.grids}>
      <Image width={1920} height={2710} className={classes.gridimg} alt="Imgr" src="/img/grids.png" />
         </div>
        
        <div className={classes.hero}>
        <div className={classes.frame}>
          <div className={classes["text-wrapper2"]}>Hitesh Suthar</div>
          <div className={classes["text-wrapper3"]}>A Product Designer & Strategist</div>
          <div className={classes.label}>
          <p className={classes.ancreative}>
          A generalist who has in-depth knowledge of different fields. As a product designer, it&apos;s a more valuable skill to have because it helps in understanding problems at a deeper level and providing creative solutions to them.
          <br />
          <br />
           I challenge myself to learn difficult and diverse things, which helps improve my ability to understand any subject effectively. This benefits me by allowing me to connect more dots and communicate with different people to identify pain points. Hence, making me the problem solver   
          <br />
          
          
          </p>
          
          </div>
          <div>
          <a href="http://dl.dropboxusercontent.com/scl/fi/103318o4xsktgkflv5d5i/Hiteshkumar_suthar_Resume.pdf?rlkey=l2oy8jc6z7ohxgai408ozywj0&dl=0" onMouseEnter={() => shov(!hov)} onMouseLeave={() => shov(!hov)} style={{cursor: "pointer"}} className={classes["text-wrapper3"]}>Download Resume&nbsp;
          <motion.svg animate={{y: hov ? 5 : -5}} width="25" height="11" viewBox="0 0 256 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.1867 0.146484L128 49.6267L225.813 0.146484L256 30.3331L128 110L0 30.3331L30.1867 0.146484Z" fill="black"/>
          </motion.svg>

           </a>
           </div>
        </div>
          <div className={classes.image}>
              <Image width={2680} height={1856} className={classes.guy} alt="Imgr" src="/img/guy.png" />
          </div>
          </div>
          <div className={classes.rectangle}> 
          
          
          <Card
          title = "Dex pay"
          info = "Designing new website for fintech company"
          param = "Ux Research, Analysis, Conclusion, Final Design"
          link = "./dexpay"
          img ="/img/flex1.png"
          read ="~5 min. Read"
          />
          <Card
          title = "Medi Quest"
          info = "Medical Questions experience for diagnosis patients"
          param = "Research, Analysis, Ideation, Hi-fi Prototype, A/b Testing, User interview, Re-analysis, Re-Ideation, Hifi Prototype 2 "
          link = "./qanda"
          img ="/img/med.png"
          read = "~7 min. Read"
          />
          <Card
          title = "Gwal"
          info = "Redesigning Milk delivery cold chain for loose milk supplier"
          link = "./gwal"
          img ="/img/gwal.png"
          param = ""
          read = "~15 min. Read"
          />
          
            <a className={classes["text-wrapper1-2"]} href="http://behance.com/designhack" target="_blank">Other works
            
            <span style={{padding:"0 10px"}}>
            
            <svg width={dim.width > 480 ? "35" : "15"} height={dim.width > 480 ? "35" : "15"} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6249 9H9.99996C6.68626 9 3.99998 11.6863 3.99998 15V25C3.99998 28.3137 6.68626 31 9.99995 31H19.9999C23.3136 31 25.9999 28.3137 25.9999 25V14.375C25.9999 14.0298 26.2797 13.75 26.6249 13.75H29.3749C29.7201 13.75 29.9999 14.0298 29.9999 14.375V26C29.9999 30.9706 25.9705 35 20.9999 35H8.99996C4.02942 35 0 30.9706 0 26V14C0 9.02943 4.02942 5 8.99996 5H20.6249C20.9701 5 21.2499 5.27982 21.2499 5.625V8.37501C21.2499 8.72018 20.9701 9 20.6249 9Z" fill="black"/>
            <path d="M35 3.35448C35 1.50184 33.486 -2.32248e-05 31.6183 2.69438e-10L21.0275 0.000131701C20.3272 0.00014042 19.7594 0.563333 19.7594 1.25806C19.7594 1.95278 20.3272 2.51596 21.0275 2.51595L29.2551 2.51585C29.7774 2.51584 30.0376 3.14849 29.6665 3.51601L16.2285 16.824C15.8437 17.2051 15.8435 17.8269 16.228 18.2083L16.8142 18.7898C17.1939 19.1664 17.8062 19.1667 18.1862 18.7904L31.4676 5.63772C31.8368 5.27213 32.4637 5.53364 32.4637 6.05318L32.4636 13.86C32.4636 14.5548 33.0313 15.118 33.7317 15.118C34.4321 15.118 34.9998 14.5548 34.9998 13.8601L35 3.35448Z" fill="black"/>
            </svg>
             
            </span>
            </a>
          
          </div>
        <div className={classes.footer}>
          <div className={classes["text-wrapper-6"]}>Contact</div>
          <div className={classes["text-wrapper-7"]}>Mobile : +919426364603</div>
          <div className={classes["text-wrapper-8"]}>Email : hpsthr@gmail.com</div>
        </div>
        
        
        </div>
        
    
    
    
  );
}
