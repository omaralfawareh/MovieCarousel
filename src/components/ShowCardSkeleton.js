import React from "react";
import classes from "./ShowCardSkeleton.module.css";
const ShowCardSkeleton = () => {
  return (
    <div class={classes.skeleton}>
      <div class={`${classes.skeletonLeft} ${classes.flex1}`}>
        <div class={classes.square}></div>
      </div>
    </div>
  );
};

export default ShowCardSkeleton;
