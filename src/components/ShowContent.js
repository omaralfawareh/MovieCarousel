import React from "react";
import classes from "./ShowContent.module.css";
const ShowContent = ({ genres }) => {
  return (
    <div className={classes.flex}>
      {genres.length > 0 &&
        genres.map((genres) => (
          <span className={classes.margin}>{genres.title}</span>
        ))}
    </div>
  );
};

export default ShowContent;
