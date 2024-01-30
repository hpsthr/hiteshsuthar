import React from "react";
import * as classes from "./style.module.css";

export default function OverlapGroup () {
  return (
    <div className={classes["overlap-group"]}>
      <div className={classes["text-wrapper-3"]}>Moneyview</div>
      <img className={classes.img} alt="Group" src="/img/group-20.png" />
    </div>
  );
};
