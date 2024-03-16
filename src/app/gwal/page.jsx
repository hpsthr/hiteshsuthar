"use client"
import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { motion } from "framer-motion";

import {useState } from "react";

export default function Gwal () {

    return (
        <div className = {classes.body}>
            <Image width={1920} height={4000} className={classes.pimgs} alt="Imgr" src="/img/const.png" />
           
           
        </div>
    )
}