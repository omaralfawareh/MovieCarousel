import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShowCard from "./ShowCard";
import classes from "./ShowPage.module.css";
import ShowCardSkeleton from "./ShowCardSkeleton";

const ShowPage = () => {
  const [shows, setShows] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const params = useParams();
  const index = params.index;
  useEffect(() => {
    async function fetchShows() {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/7806be0f-8565-4d8b-bc1e-b105036fb1d5"
        );
        setIsFetched(true);
        const resData = response.data;
        setShows(resData.editorialItems);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchShows();
  }, []);
  return (
    <div className={classes.container}>
      {isFetched && (
        <ShowCard hoverable={false} show={shows[index]} index={index} />
      )}
      {!isFetched && <ShowCardSkeleton />}
    </div>
  );
};
export default ShowPage;
