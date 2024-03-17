"use client"
import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { motion } from "framer-motion";

import {useState } from "react";

export default function Gwal () {

    const [hov , shov] = useState(false)
    const [hov2 , shov2] = useState(false)
    return (
        <div className = {classes.body}>
            <Image width={1920} height={4000} className={classes.pimgs} alt="Imgr" src="/img/const.png" />
            <div className={classes.backbtn}>
                <a onMouseEnter={() => shov(!hov)} onMouseLeave={() => shov(!hov)} href="./"> <span>
                    <motion.svg animate={{x: hov ? -20 : 0}}   viewBox="0 0 63 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8 26.252L25.2 37.652C26 38.452 26.3833 39.3853 26.35 40.452C26.3167 41.5187 25.9333 42.452 25.2 43.252C24.4 44.052 23.45 44.4687 22.35 44.502C21.25 44.5353 20.3 44.152 19.5 43.352L1.2 25.052C0.4 24.252 0 23.3187 0 22.252C0 21.1853 0.4 20.252 1.2 19.452L19.5 1.152C20.3 0.352 21.25 -0.0313333 22.35 0.002C23.45 0.0353333 24.4 0.452 25.2 1.252C25.9333 2.052 26.3167 2.98533 26.35 4.052C26.3833 5.11867 26 6.052 25.2 6.852L13.8 18.252H58.4C59.5333 18.252 60.4833 18.6353 61.25 19.402C62.0167 20.1687 62.4 21.1187 62.4 22.252C62.4 23.3853 62.0167 24.3353 61.25 25.102C60.4833 25.8687 59.5333 26.252 58.4 26.252H13.8Z" fill="black"/>
                    </motion.svg>
                </span> &nbsp;Go Back </a>
            </div>

            <div style= {{ position :"relative", top:"-5vh", left: "40vw"}} className={classes.backbtn}>
                <a onMouseEnter={() => shov2(!hov2)} onMouseLeave={() => shov2(!hov2)} href="https://www.behance.net/designhack" target="_blank"> More Project &nbsp; <span>
                    <motion.svg whileHover={{x:30}}  animate={{rotate:180, x: hov2 ? 20 : 0}} viewBox="0 0 63 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8 26.252L25.2 37.652C26 38.452 26.3833 39.3853 26.35 40.452C26.3167 41.5187 25.9333 42.452 25.2 43.252C24.4 44.052 23.45 44.4687 22.35 44.502C21.25 44.5353 20.3 44.152 19.5 43.352L1.2 25.052C0.4 24.252 0 23.3187 0 22.252C0 21.1853 0.4 20.252 1.2 19.452L19.5 1.152C20.3 0.352 21.25 -0.0313333 22.35 0.002C23.45 0.0353333 24.4 0.452 25.2 1.252C25.9333 2.052 26.3167 2.98533 26.35 4.052C26.3833 5.11867 26 6.052 25.2 6.852L13.8 18.252H58.4C59.5333 18.252 60.4833 18.6353 61.25 19.402C62.0167 20.1687 62.4 21.1187 62.4 22.252C62.4 23.3853 62.0167 24.3353 61.25 25.102C60.4833 25.8687 59.5333 26.252 58.4 26.252H13.8Z" fill="black"/>
                    </motion.svg>
                </span></a>
            </div>
           
        </div>
    )
}