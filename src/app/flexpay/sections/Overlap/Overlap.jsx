import React from "react";
import * as classes from "./style.module.css";

export default function Overlap () {
  return (
    <div className={classes.overlap}>
      <div className={classes.text}>{""}</div>
      <div className={classes.frame}>
        <div className={classes.group}>
          <div className={classes["text-wrapper"]}>Project</div>
          <div className={classes.div}>Flex Pay</div>
        </div>
        <div className={classes["group-2"]}>
          <div className={classes["text-wrapper"]}>Year</div>
          <div className={classes["div-wrapper"]}>
            <div className={classes["text-wrapper-2"]}>2023</div>
          </div>
        </div>
        <div className={classes["group-3"]}>
          <div className={classes["text-wrapper"]}>Project Brief</div>
          <p className={classes["designing-new"]}>
            Designing new website, for increase engagement, Establish Digital Identity of Brand
            and&nbsp;&nbsp;communicate about product efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};
