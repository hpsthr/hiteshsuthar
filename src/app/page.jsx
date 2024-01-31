import Image from "next/image";
import React from "react";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.desktop}>
    <div className={classes["overlap-wrapper"]}>
      <div className={classes.overlap}>
        <div className={classes["overlap-group"]}>
          <Image width={2680} height={1856} className={classes.imgr} alt="Imgr" src="/img/guy3.png" />
          <div className={classes.rectangle} />
          <div className={classes.ellipse} />
          <div className={classes["text-wrapper"]}>Work</div>
          <div className={classes.group}>
            <div className={classes["div-wrapper"]}>
              <Image width={1920} height={1080} className={classes["img1"]} alt="flex" src="/img/flex1.png" /> 
              <a href="./flexpay" className={classes.div}>Flex pay</a>
              
            </div>
          </div>
          <div className={classes["overlap-group-wrapper"]}>
            <div className={classes["div-wrapper2"]}> 
            <Image width={1920} height={1080} className={classes["img2"]} alt="Girl workout" src="/img/result1.png" />
              <a href="./resultonly" className={classes.div}>Results only fitness</a>
            </div>
          </div>
          <div className={classes.group2}>
            <div className={classes["div-wrapper3"]}>
            <Image width={1920} height={1080} className={classes["img3"]} alt="medical" src="/img/med.png" />
              <div className={classes.div}>Medical questionnaire</div>
            </div>
          </div>
        </div>
        <div className={classes.frame}>
          <div className={classes["text-wrapper2"]}>Hello I’m Hitesh Suthar</div>
          <div className={classes["text-wrapper3"]}>A Full Stack Designer</div>
          <div className={classes.label}>
      <p className={classes["an-creative"]}>
        An creative generalist fueled by an insatiable curiosity to master new and challenging domains.
        <br />
        <br />
        Demonstrating a profound ability to creatively solve problems, I wield extensive knowledge across diverse
        domains while seamlessly navigating through various professional landscapes.
        <br />
        <br />
        AKA “I CAN GET THINGS DONE”
      </p>
    </div>
        </div>
        </div>
        <div className={classes["text-wrapper-6"]}>Contact</div>
        <div className={classes["text-wrapper-7"]}>Mobile : +919426364603</div>
        <div className={classes["text-wrapper-8"]}>Email : hpsthr@gmail.com</div>
    </div>
    
        
        
  </div>
  );
}
