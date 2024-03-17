import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { motion } from "framer-motion";

export default function Skipbt(props) {
    let prot = props.condit 
 return (
    <div style={{ height: prot ? "auto" : 0 , padding: prot ? "20px  0" : "0px  0"}}>
                        
                        <motion.a transition={{ ease: "easeOut", duration: 0.2 }} animate={{scaleY: prot ? 1 : 0}} style = {{ fontSize : "15px", display:"block" ,height: "30px", zIndex: 2, width:"55vw"}} className={classes.stbtn}  href={props.section} >Skip Screens &gt;&gt; </motion.a>
                        
    </div>
 )
}