import React from "react";
import Image from "next/image";
import * as classes from "./style.module.css";

export default function Resultonly(){
  return (
    <div className={classes.slide}>
      <div className={classes.div}>
        <div className={classes["overlap-group"]}>
          <div className={classes.group}>
            <div className={classes["text-wrapper"]}>Project</div>
            <div className={classes["result-only-fitness"]}>
              Result only
              <br />
              Fitness
            </div>
          </div>
          <div className={classes["group-2"]}>
            <div className={classes["text-wrapper"]}>Year</div>
            <div className={classes["div-wrapper"]}>
              <div className={classes["text-wrapper-2"]}>2023</div>
            </div>
          </div>
          <div className={classes["group-3"]}>
            <div className={classes["text-wrapper"]}>Project Brief</div>
            <div className={classes["text-wrapper-3"]}>Redesigning Website</div>
          </div>
        </div>
        <div className={classes["text-wrapper-4"]}>Final Design</div>
        <div className={classes["text-wrapper-5"]}>Mobile</div>
        <Image width={1920} height={1080} className={classes["results-only-fitness"]} alt="Results only fitness" src="/img/rsf.png" />
        <Image width={1920} height={1080} className={classes.resultmb} alt="Resultmb" src="/img/rsfm.png" />
      </div>
    </div>
  );
};