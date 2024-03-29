
import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useContext } from "react";




export default function Card(props) {
  const [anm , sanm] = useState(true)

  const variants =  {
    open : {y:[0, 15, 0]},
    close: {y:[0]}
  }
  

  useEffect(() => {
    window.addEventListener('scroll', () => { sanm(false) });
  }, [])
    return (
            <motion.div 
            
            animate={anm ? "open" : "close"}
            variants={variants}
            transition={{duration: 1, ease: "easeInOut", repeat: Infinity,}}
            className={classes.Card}>
            
                
            <div className={classes["div-wrapper"]}>
            <div className={classes.videobx}>
            <video   muted playsInline preload="auto" loop width="1400" height="401" autoPlay >
            <source src={props.img} type="video/mp4" />
            </video>
            </div>
            <div className={classes.read}>
                <p>{props.read}</p>
            </div>
                
                
                
              <a className={classes.div}>{props.title}</a>
              <div className={classes.uxdetail}>
                <p>{props.info}</p>
                <p>{props.param}</p>
              </div>
              <motion.a whileHover={{x:30}} href={props.link} className={classes.casestudy}>Read this Case Study <span>
                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z" fill="black"/>
                </svg>
                </span> </motion.a>
              
            </div>
            </motion.div>
    ); }