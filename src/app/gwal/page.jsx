"use client"
import Image from "next/image";
import classes from "./page.module.css";
import {motion} from "framer-motion"
import {useState, useEffect, useContext} from "react";
import Skipbt from "../qanda/skipbt";
import FullPage from "../ScrollSection/Fullpage.jsx"
import Context from "../ScrollSection/ContextProp.js";
import ContextI from "../ScrollSection/FullpageContext.js"
import FullpageNavigation from "../ScrollSection/FullpageNavigation.jsx";
import FullpageSection from "../ScrollSection/FullpageSection.jsx";
import FullPageSections from "../ScrollSection/FullPageSections.jsx";



export default function Gwal () {

    const [hov , shov] = useState(false)
    const [hov2 , shov2] = useState(false)
    return (
        <div className = {classes.body}>
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


            
            <FullpageSection >
            <div style={{ width: "100vw", height: "100vh", display:"flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <div style={{display:"flex",  flexDirection: "column", flexWrap:"wrap"}} className={classes.firstGrid}>
            
            
            <div style={{position :"relative", top:"5vh", left:"-1vw", height:"70vh" }}>
              <Image width={1920} height={1080} className={classes.gridimg2} alt="Imgr" src="/img/gwalfront.png" />
            </div>
            <div style={{position:"relative", top:"1vh", width:"40vw"}} className={classes.paragraphT}>
            Case Study is in Budling phase But In Mean time you can check out this Prototype 
            </div>
            <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="400" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8wjT53Rop52cytJJPB60Md%2FGwala%3Fpage-id%3D1404%253A8293%26type%3Ddesign%26node-id%3D1404-8680%26viewport%3D750%252C467%252C0.15%26t%3Dbytq6aYn45OPj2eg-1%26scaling%3Dscale-down%26starting-point-node-id%3D1404%253A8680%26mode%3Ddesign" allowFullScreen></iframe>
            </div>
            </div>
            </FullpageSection>
            
            </FullPageSections>
            </motion.div>
    
    </FullPage>
           
        </div>
    )
}