"use client"
import Image from "next/image";

import classes from "./style.module.css";
import {motion} from "framer-motion"
import {useState, useEffect, useContext} from "react";
import Skipbt from "../qanda/skipbt";
import FullPage from "../ScrollSection/Fullpage.jsx"
import Context from "../ScrollSection/ContextProp.js";
import ContextI from "../ScrollSection/FullpageContext.js"
import FullpageNavigation from "../ScrollSection/FullpageNavigation.jsx";
import FullpageSection from "../ScrollSection/FullpageSection.jsx";
import FullPageSections from "../ScrollSection/FullPageSections.jsx";

export default function Dexmn() {
  const { number, goto, slides, } = useContext(ContextI)
  const {width , showB, valueShow, contact} = useContext(Context)
  const [hov , shov] = useState(false)
  

return (
  <div>
    <div className={classes.backbtn}>
            <a onMouseEnter={() => shov(!hov)} onMouseLeave={() => shov(!hov)} href="./"> <span>
                    <motion.svg animate={{x: hov ? -20 : 0}} viewBox="0 0 63 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8 26.252L25.2 37.652C26 38.452 26.3833 39.3853 26.35 40.452C26.3167 41.5187 25.9333 42.452 25.2 43.252C24.4 44.052 23.45 44.4687 22.35 44.502C21.25 44.5353 20.3 44.152 19.5 43.352L1.2 25.052C0.4 24.252 0 23.3187 0 22.252C0 21.1853 0.4 20.252 1.2 19.452L19.5 1.152C20.3 0.352 21.25 -0.0313333 22.35 0.002C23.45 0.0353333 24.4 0.452 25.2 1.252C25.9333 2.052 26.3167 2.98533 26.35 4.052C26.3833 5.11867 26 6.052 25.2 6.852L13.8 18.252H58.4C59.5333 18.252 60.4833 18.6353 61.25 19.402C62.0167 20.1687 62.4 21.1187 62.4 22.252C62.4 23.3853 62.0167 24.3353 61.25 25.102C60.4833 25.8687 59.5333 26.252 58.4 26.252H13.8Z" fill="black"/>
                    </motion.svg>
                </span>&nbsp;Go Back </a>
    </div>
    
    
  <FullPage>
    <motion.div
            initial = {{opacity: 0 }}
            animate = {{opacity: 1}}
            exit = {{opacity:0}}
            transition = {{type: "tween", ease: "easeIn", duration: 0.5, delay:0.2}}
            >
            <FullpageNavigation
                name = {"video"}
                style={{
                opacity: 1,
                
                
                
                transition: "0.3s ease-out"
            }}>

            </FullpageNavigation>
            </motion.div>
            <motion.div>
            <FullPageSections>


            <FullpageSection style={{width:width}}>
            <div className = {classes.videodex}>
              <div>
              <Image width={700} height={1080} className={classes.gridimg} alt="Imgr" src="/img/medittl.png" />
              </div>
            <div className={classes.videobx}>
            <video  style={{position:"relative", top:"-1vh"}} muted playsInline preload="auto" loop width="1920" height="1080" autoPlay >
            <source src="http://dl.dropboxusercontent.com/scl/fi/769kgfkxad813chqh52g8/mediv2.mp4?rlkey=kktn7ji4lrakj5q7xlnpubs45&dl=0" type="video/mp4" />
            </video>
            </div>
            <div style={{opacity:1}} className = {classes.Mouse}>
            <span className = {classes.MouseShell} >
            <span className = {classes.MouseScroll}></span>
            </span>
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div className={classes.firstGrid}>
            <div style={{width:"20vw"}} className={classes.mainTitle}> 
            Why I am seeing only part of application? 
            </div>
            <div style={{position:"relative", top:"30vh", width:"35vw"}} className={classes.paragraphT}>
            I redesigned the UX of a medical record management application. In this real-world case study, I emphasize that relying solely on intuition and product manager biases can lead to suboptimal user experiences. As a designer, prioritizing users over shortcuts ultimately brings greater value in the long run.           
            <br/>
            <br/>
            After concluding the project and assuming universal satisfaction, I was surprised to find biases in the solution I designed. Recognizing this failure, I decided to rectify it by onboarding users for testing. Utilizing my spare time, I enlisted friends as testers, offering a free meal for their feedback. Surprisingly, they preferred the previous design with minimal changes. This prompted further analysis to understand the discrepancy.
            <br/>
            <br/>
            This section comprises approximately 50 diagnostic questions crucial for patient assessment. It&apos;s a pivotal aspect of the application aimed at streamlining diagnosis without involving doctors. Notably, it&apos;s the sole part undergoing significant changes, including alterations in name, color, and style.
            </div>
            <div style={{position :"relative", top:"5vh", left:"-25vw" }}>
              <Image width={1920} height={2710} className={classes.gridimg2} alt="Imgr" src="/img/doc.png" />
            </div>
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div className={classes.firstGrid}>
            <div className={classes.mainTitle}> 
            Design <br/>
            Approach
            </div>
            <div style={{ marginLeft:"3vw", textAlign:"center", fontSize:"24px", fontFamily:"Averta CY-Bold"}} className={classes.paragraphT}>
            
              <span><svg width="45" height="45" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5Z" fill="#222222"/>
                <path d="M24.91 37V20.56L21.19 23.35L19.54 20.77L25.57 16.39H28.39V37H24.91Z" fill="#E3E3E3"/>
                </svg> <br/>
                </span>
                 Research & Analysis 
                 
                 <br/>
                 
                 <span>
                 <ul style={{listStyleType: "disc", textAlign:"start",listStylePosition: "inside"}}>
                        <li onClick={() => console.log("clicked")}style={{zIndex: 101,fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 20px"}}>Analysis</li>  
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 20px" }}>Problem Identification</li>  
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 20px" }}>Understanding target user</li>  
                         
                    </ul>
                 </span>
            </div>
            <div style={{ marginLeft:"3vw", textAlign:"center" , fontSize:"24px", fontFamily:"Averta CY-Bold"}} className={classes.paragraphT}>
              <span><svg width="45" height="45" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5Z" fill="#222222"/>
                    <path d="M20.26 37L20.2 34.69L26.83 27.7C28.51 25.93 29.74 24.43 29.74 22.66C29.74 20.83 28.45 19.45 26.59 19.45C24.94 19.45 23.59 20.26 22.66 21.88L20.17 20.11C21.34 17.89 23.47 16.21 26.83 16.21C30.22 16.21 33.28 18.49 33.28 22.27C33.28 24.55 32.47 26.5 29.86 29.2L25.51 33.73L25.54 33.82H33.49V37H20.26Z" fill="#E3E3E3"/>
                    </svg>
                    <br/>
                </span>
                Ideation & iteration  <br/>
                 <span>
                 <ul style={{listStyleType: "disc", textAlign:"start",listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 30px"}}>Key Goals </li>  
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 30px" }}>Ideas & Prototype</li>  
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 30px" }}>First Design</li>  
                         
                    </ul>
                 </span>
            </div>
            <div style={{ marginLeft:"3vw", textAlign:"center", fontSize:"24px", fontFamily:"Averta CY-Bold"}} className={classes.paragraphT}>
              <span><svg width="45" height="45" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5Z" fill="#222222"/>
                  <path d="M26.1 37.24C22.5 37.24 19.86 35.38 18.84 32.86L21.84 31.54C22.47 33.07 23.79 34 25.86 34C27.81 34 29.4 32.8 29.4 30.94C29.4 29.32 28.11 27.85 25.53 27.85H23.97V24.91H25.86C28.02 24.91 28.86 23.62 28.86 22.18C28.86 20.53 27.48 19.39 25.77 19.39C24.06 19.39 23.04 20.14 22.38 21.19L19.59 19.69C20.58 17.65 22.86 16.18 25.86 16.18C29.46 16.18 32.37 18.16 32.37 21.64C32.37 23.65 31.35 25.33 29.64 26.26V26.35C31.62 27.25 32.94 29.02 32.94 31.42C32.94 34.93 30.03 37.24 26.1 37.24Z" fill="#E3E3E3"/>
                  </svg>
                  <br/>
                </span>
                 Design Testing<br/>
                 <span>
                 <ul style={{listStyleType: "disc", textAlign:"start",listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 55px"}}>Design Testing   </li>  
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 55px" }}>Testing Conclusion</li>  
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 55px" }}>Reidentifying Problem</li>  
                        
                         
                    </ul>
                 </span>
                 
            </div>
            <div style={{ marginLeft:"3vw", textAlign:"center", fontSize:"24px", fontFamily:"Averta CY-Bold"}} className={classes.paragraphT}>
              <span><svg width="45" height="45" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5Z" fill="#222222"/>
                  <path d="M26.1 37.24C22.5 37.24 19.86 35.38 18.84 32.86L21.84 31.54C22.47 33.07 23.79 34 25.86 34C27.81 34 29.4 32.8 29.4 30.94C29.4 29.32 28.11 27.85 25.53 27.85H23.97V24.91H25.86C28.02 24.91 28.86 23.62 28.86 22.18C28.86 20.53 27.48 19.39 25.77 19.39C24.06 19.39 23.04 20.14 22.38 21.19L19.59 19.69C20.58 17.65 22.86 16.18 25.86 16.18C29.46 16.18 32.37 18.16 32.37 21.64C32.37 23.65 31.35 25.33 29.64 26.26V26.35C31.62 27.25 32.94 29.02 32.94 31.42C32.94 34.93 30.03 37.24 26.1 37.24Z" fill="#E3E3E3"/>
                  </svg>
                  <br/>
                </span>
                Final Design<br/>
                 <span>
                 <ul style={{listStyleType: "disc", textAlign:"start",listStylePosition: "inside"}}>
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 70px"}}>Ideas</li>  
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 70px" }}>Final Design</li>  
                        <li style={{fontFamily:"Averta CY-Bold ",fontSize: "20px", padding : "0 0 0 70px" }}>Conclusion </li>  
                        
                         
                    </ul>
                 </span>
                 
            </div>
            
            <div>
              
            </div>
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div className={classes.firstGrid}>
            <div className={classes.mainTitle}> 
            Research and <br/>
            Analysis 
            
            </div>
            
            <div >
              <Image width={1920} height={1080} className={classes.img2} alt="Imgr" src="/img/medi1.png" />
            </div>
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div className={classes.firstGrid}>
            <div className={classes.mainTitle}> 
            Ideas &<br/>
            Iterations  
            </div>
            
            <div>
              <Image width={1920} height={1080} className={classes.img2} alt="Imgr" src="/img/medi2.png" />
            </div>
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div className={classes.firstGrid}>
            <div className={classes.mainTitle}> 
            First <br/>
             Design
            </div>
            <motion.a target="_blank" href="https://www.figma.com/proto/ya1CXlCbvDUuFbyVzcUKaA/MediQuest?page-id=1428%3A217&type=design&node-id=1428-6983&viewport=608%2C1561%2C0.29&t=ueziEfuSgA31FD3J-1&scaling=scale-down&starting-point-node-id=1428%3A6983&mode=design" animate={{y:[0, 8, 0]}} transition={{duration: 1.2, ease: "easeInOut", repeat: Infinity,}} style={{top:"76vh" ,  marginLeft: "5.6vw"}} className={classes.figs}>
              Figma <br/> prototype <br/>
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.42853 4.11429H4.57141C3.05658 4.11429 1.82856 5.34231 1.82856 6.85714V11.4286C1.82856 12.9434 3.05658 14.1714 4.57141 14.1714H9.14282C10.6577 14.1714 11.8857 12.9434 11.8857 11.4286V6.57143C11.8857 6.41363 12.0136 6.28571 12.1714 6.28571H13.4285C13.5863 6.28571 13.7142 6.41363 13.7142 6.57143V11.8857C13.7142 14.158 11.8722 16 9.59996 16H4.11427C1.84202 16 0 14.158 0 11.8857V6.4C0 4.12774 1.84202 2.28571 4.11427 2.28571H9.42853C9.58633 2.28571 9.71425 2.41363 9.71425 2.57143V3.82857C9.71425 3.98637 9.58633 4.11429 9.42853 4.11429Z" fill="#DDDDDD"/>
                <path d="M16 1.53348C16 0.686557 15.3079 -1.0617e-05 14.4541 1.23172e-10L9.61257 6.02063e-05C9.29241 6.41919e-05 9.03287 0.257524 9.03287 0.575112C9.03288 0.8927 9.29243 1.15015 9.61259 1.15015L13.3738 1.1501C13.6125 1.1501 13.7315 1.43931 13.5618 1.60732L7.41877 7.69097C7.24285 7.86519 7.24273 8.14943 7.41851 8.32379L7.68649 8.58962C7.86007 8.7618 8.13998 8.76192 8.3137 8.58988L14.3852 2.57724C14.5539 2.41012 14.8406 2.52966 14.8406 2.76717L14.8405 6.33602C14.8405 6.65361 15.1 6.91107 15.4202 6.91108C15.7404 6.91108 15.9999 6.65363 15.9999 6.33604L16 1.53348Z" fill="#DDDDDD"/>
                </svg>

              </span>
            </motion.a>
            <div>
              <Image width={1920} height={1080} className={classes.img2} alt="Imgr" src="/img/medi3.png" />
            </div>
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div className={classes.firstGrid}>
            <motion.a target="_blank" href="https://www.figma.com/proto/ya1CXlCbvDUuFbyVzcUKaA/MediQuest?page-id=1428%3A216&type=design&node-id=1428-218&viewport=852%2C1502%2C0.22&t=DDvS8bpCKP1j0rsx-1&scaling=scale-down&starting-point-node-id=1428%3A218&mode=design" animate={{y:[0, 8, 0]}} transition={{duration: 1.2, ease: "easeInOut", repeat: Infinity,}} style={{top:"60vh" ,  marginLeft: "55vw"}} className={classes.figs}>
              Figma prototype 
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.42853 4.11429H4.57141C3.05658 4.11429 1.82856 5.34231 1.82856 6.85714V11.4286C1.82856 12.9434 3.05658 14.1714 4.57141 14.1714H9.14282C10.6577 14.1714 11.8857 12.9434 11.8857 11.4286V6.57143C11.8857 6.41363 12.0136 6.28571 12.1714 6.28571H13.4285C13.5863 6.28571 13.7142 6.41363 13.7142 6.57143V11.8857C13.7142 14.158 11.8722 16 9.59996 16H4.11427C1.84202 16 0 14.158 0 11.8857V6.4C0 4.12774 1.84202 2.28571 4.11427 2.28571H9.42853C9.58633 2.28571 9.71425 2.41363 9.71425 2.57143V3.82857C9.71425 3.98637 9.58633 4.11429 9.42853 4.11429Z" fill="#DDDDDD"/>
                <path d="M16 1.53348C16 0.686557 15.3079 -1.0617e-05 14.4541 1.23172e-10L9.61257 6.02063e-05C9.29241 6.41919e-05 9.03287 0.257524 9.03287 0.575112C9.03288 0.8927 9.29243 1.15015 9.61259 1.15015L13.3738 1.1501C13.6125 1.1501 13.7315 1.43931 13.5618 1.60732L7.41877 7.69097C7.24285 7.86519 7.24273 8.14943 7.41851 8.32379L7.68649 8.58962C7.86007 8.7618 8.13998 8.76192 8.3137 8.58988L14.3852 2.57724C14.5539 2.41012 14.8406 2.52966 14.8406 2.76717L14.8405 6.33602C14.8405 6.65361 15.1 6.91107 15.4202 6.91108C15.7404 6.91108 15.9999 6.65363 15.9999 6.33604L16 1.53348Z" fill="#DDDDDD"/>
                </svg>

              </span>
            </motion.a>
            
            <div>
              <Image width={1920} height={1080}  className={classes.img2} alt="Imgr" src="/img/medi4.png" />
            </div>
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div className={classes.firstGrid}>
            <div className={classes.mainTitle}> 
            Design (A/B)<br/>
            Testing
            </div>
            
            <div style={{}}>
              <Image width={1920} height={1080}  className={classes.img2} alt="Imgr" src="/img/medi5.png" />
            </div>
            {/*  */}
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div className={classes.firstGrid}>
            <motion.a  target="_blank" href="https://www.figma.com/proto/ya1CXlCbvDUuFbyVzcUKaA/MediQuest?page-id=1428%3A216&type=design&node-id=1523-15637&viewport=852%2C1502%2C0.22&t=ZuP1wOLE1U8F9xIl-1&scaling=scale-down&starting-point-node-id=1523%3A15637&mode=design"  animate={{y:[0, 8, 0]}} transition={{duration: 1.2, ease: "easeInOut", repeat: Infinity,}} style={{color:"#222222", fontFamily: "Averta CY-Bold",fontSize:"24px", top:"78vh" , width:"35vw", marginLeft: "27vw"}} className={classes.figs}>
              Figma prototype &nbsp;
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#222222" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.42853 4.11429H4.57141C3.05658 4.11429 1.82856 5.34231 1.82856 6.85714V11.4286C1.82856 12.9434 3.05658 14.1714 4.57141 14.1714H9.14282C10.6577 14.1714 11.8857 12.9434 11.8857 11.4286V6.57143C11.8857 6.41363 12.0136 6.28571 12.1714 6.28571H13.4285C13.5863 6.28571 13.7142 6.41363 13.7142 6.57143V11.8857C13.7142 14.158 11.8722 16 9.59996 16H4.11427C1.84202 16 0 14.158 0 11.8857V6.4C0 4.12774 1.84202 2.28571 4.11427 2.28571H9.42853C9.58633 2.28571 9.71425 2.41363 9.71425 2.57143V3.82857C9.71425 3.98637 9.58633 4.11429 9.42853 4.11429Z" fill="#222222"/>
                <path d="M16 1.53348C16 0.686557 15.3079 -1.0617e-05 14.4541 1.23172e-10L9.61257 6.02063e-05C9.29241 6.41919e-05 9.03287 0.257524 9.03287 0.575112C9.03288 0.8927 9.29243 1.15015 9.61259 1.15015L13.3738 1.1501C13.6125 1.1501 13.7315 1.43931 13.5618 1.60732L7.41877 7.69097C7.24285 7.86519 7.24273 8.14943 7.41851 8.32379L7.68649 8.58962C7.86007 8.7618 8.13998 8.76192 8.3137 8.58988L14.3852 2.57724C14.5539 2.41012 14.8406 2.52966 14.8406 2.76717L14.8405 6.33602C14.8405 6.65361 15.1 6.91107 15.4202 6.91108C15.7404 6.91108 15.9999 6.65363 15.9999 6.33604L16 1.53348Z" fill="#222222"/>
                </svg>

              </span>
            </motion.a>
            <div className={classes.mainTitle}> 
            Final<br/>
            Design
            </div>
            <div>
              <Image width={1920} height={1080}  className={classes.img2} alt="Imgr" src="/img/medi6.png" />
            </div>
           
            
            
            </div>
            <div style={{width:"35vw"}} className={classes.videobx2}>
            <video  style={{position:"relative", }} muted playsInline preload="auto" loop width="1920" height="1080" autoPlay >
            <source src="http://dl.dropboxusercontent.com/scl/fi/r9pnyhgonbj03ioyvmg86/medism-video-converter.com.mp4?rlkey=dqxteksgqkog9w4d9grpmdn6y&dl=0" type="video/mp4" />
            </video>
            </div>
            </div>
            </FullpageSection>
            <FullpageSection style={{width:width}}>
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
              <div style={{width:"35vw"}} className={classes.videobx3}>
                <video  style={{position:"relative", }} muted playsInline preload="auto" loop width="1920" height="1080" autoPlay >
                <source src="http://dl.dropboxusercontent.com/scl/fi/5uujap1e2c3bgxf4jkhrf/medimob.mp4?rlkey=878ygk99ta6f4remg8vy5nnfl&dl=0" type="video/mp4" />
                </video>
              </div>
            <div className={classes.firstGrid}>
            <motion.a target="_blank" href="https://www.figma.com/proto/ya1CXlCbvDUuFbyVzcUKaA/MediQuest?page-id=1428%3A217&type=design&node-id=1523-10267&viewport=608%2C1561%2C0.29&t=4buqHqYocB7v49gR-1&scaling=scale-down&starting-point-node-id=1523%3A10267&mode=design" animate={{y:[0, 8, 0]}} transition={{duration: 1.2, ease: "easeInOut", repeat: Infinity,}} style={{color:"#222222", fontFamily: "Averta CY-Bold",fontSize:"24px", top:"84vh" , width:"35vw", marginLeft: "-5vw"}} className={classes.figs}>
              Figma prototype &nbsp;&nbsp;
              <span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#222222" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.42853 4.11429H4.57141C3.05658 4.11429 1.82856 5.34231 1.82856 6.85714V11.4286C1.82856 12.9434 3.05658 14.1714 4.57141 14.1714H9.14282C10.6577 14.1714 11.8857 12.9434 11.8857 11.4286V6.57143C11.8857 6.41363 12.0136 6.28571 12.1714 6.28571H13.4285C13.5863 6.28571 13.7142 6.41363 13.7142 6.57143V11.8857C13.7142 14.158 11.8722 16 9.59996 16H4.11427C1.84202 16 0 14.158 0 11.8857V6.4C0 4.12774 1.84202 2.28571 4.11427 2.28571H9.42853C9.58633 2.28571 9.71425 2.41363 9.71425 2.57143V3.82857C9.71425 3.98637 9.58633 4.11429 9.42853 4.11429Z" fill="#222222"/>
                <path d="M16 1.53348C16 0.686557 15.3079 -1.0617e-05 14.4541 1.23172e-10L9.61257 6.02063e-05C9.29241 6.41919e-05 9.03287 0.257524 9.03287 0.575112C9.03288 0.8927 9.29243 1.15015 9.61259 1.15015L13.3738 1.1501C13.6125 1.1501 13.7315 1.43931 13.5618 1.60732L7.41877 7.69097C7.24285 7.86519 7.24273 8.14943 7.41851 8.32379L7.68649 8.58962C7.86007 8.7618 8.13998 8.76192 8.3137 8.58988L14.3852 2.57724C14.5539 2.41012 14.8406 2.52966 14.8406 2.76717L14.8405 6.33602C14.8405 6.65361 15.1 6.91107 15.4202 6.91108C15.7404 6.91108 15.9999 6.65363 15.9999 6.33604L16 1.53348Z" fill="#222222"/>
                </svg>

              </span>
            </motion.a>
            <div style = {{marginLeft:"23vw"}} className={classes.mainTitle}> 
            Conclusion
            </div>
            <div style={{position:"relative", top:"25vh", width:"35vw", marginLeft:"23vw" }} className={classes.paragraphT}>
            Design is iterative and non-linear, requiring adaptation and problem-solving for optimal user experience. I include this case study to illustrate that design is not a one-time process but evolves with learning and experience. As a product designer, I aim for timeless design but acknowledge the need for adaptation as both external and internal factors change. With experience, intuition becomes valuable, yet balancing it with efficiency is crucial. The goal is to solve problems using a blend of intuition and efficiency, recognizing that complete bias elimination is unattainable
           <br/>
           <br/>
           I Put this case study to show design is not about process but more about Designer’s ability to solve problem effectively with Limited time and resources available to them. 
            </div>
            <div className={classes.detail}>
            <a  href="./qanda"> Read Detail CaseStudy &nbsp;
              <span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="#222222" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.42853 4.11429H4.57141C3.05658 4.11429 1.82856 5.34231 1.82856 6.85714V11.4286C1.82856 12.9434 3.05658 14.1714 4.57141 14.1714H9.14282C10.6577 14.1714 11.8857 12.9434 11.8857 11.4286V6.57143C11.8857 6.41363 12.0136 6.28571 12.1714 6.28571H13.4285C13.5863 6.28571 13.7142 6.41363 13.7142 6.57143V11.8857C13.7142 14.158 11.8722 16 9.59996 16H4.11427C1.84202 16 0 14.158 0 11.8857V6.4C0 4.12774 1.84202 2.28571 4.11427 2.28571H9.42853C9.58633 2.28571 9.71425 2.41363 9.71425 2.57143V3.82857C9.71425 3.98637 9.58633 4.11429 9.42853 4.11429Z" fill="#222222"/>
        <path d="M16 1.53348C16 0.686557 15.3079 -1.0617e-05 14.4541 1.23172e-10L9.61257 6.02063e-05C9.29241 6.41919e-05 9.03287 0.257524 9.03287 0.575112C9.03288 0.8927 9.29243 1.15015 9.61259 1.15015L13.3738 1.1501C13.6125 1.1501 13.7315 1.43931 13.5618 1.60732L7.41877 7.69097C7.24285 7.86519 7.24273 8.14943 7.41851 8.32379L7.68649 8.58962C7.86007 8.7618 8.13998 8.76192 8.3137 8.58988L14.3852 2.57724C14.5539 2.41012 14.8406 2.52966 14.8406 2.76717L14.8405 6.33602C14.8405 6.65361 15.1 6.91107 15.4202 6.91108C15.7404 6.91108 15.9999 6.65363 15.9999 6.33604L16 1.53348Z" fill="#222222"/>
        </svg>      
          </span> </a>
          </div>
            </div>
            </div>
            </FullpageSection>
            </FullPageSections>
            </motion.div>
    
    </FullPage>
    </div>
)

}
