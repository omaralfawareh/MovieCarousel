import React, { useState } from "react";
import classes from "./ShowCard.module.css";
import ShowContent from "./ShowContent";
import { Link } from "react-router-dom";
const ShowCard = ({ show, index, hoverable }) => {
  const [isHovering, setIsHovering] = useState(null);

  return (
    <div
      className={classes.card}
      onMouseOver={() => setIsHovering(show.item.id)}
      onMouseLeave={() => setIsHovering(null)}
    >
      <Link to={{ pathname: `/show/${show.item.id}/${index}` }}>
        <img
          alt="example"
          src={show.item.image.thumbnailImage}
          className={classes.image}
        />
      </Link>
      {(isHovering === show.item.id || hoverable === false) && (
        <div class={classes.content}>
          <a href={`/show/${show.item.id}/${index}`}>
            <h2>
              <b>{show.item.title}</b>
            </h2>
          </a>
          <ShowContent genres={show.item.genres} />
        </div>
      )}
    </div>
  );
};

export default ShowCard;
