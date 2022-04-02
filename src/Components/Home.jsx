import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./FetchData";

const Home = () => {
  const [users, Setuser] = useState([]);

  const getData = async () => {
    const Data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await Data.json();
    Setuser(data);
    // console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Movie Data From the API</h1>
      {users.map((currele) => {
        return (
          <div key={currele.id}>
            <div className="cards">
              <div className="data">
                <img src={currele.show.image.original} alt="loading" />
                Name: {currele.show.name} <br />
                Language: {currele.show.language} <br />
                Official site:{" "}
                <a href={currele.show.officialSite}>Visit Here!</a>
                <br />
              
              <br />
              <a className="button" href={currele.show.url}>
                Book ticket
              </a>
              <br />
            </div>
            </div>
            {/* <FetchData currele={currele} /> */}
          
          </div>
         
        );
      })}
    </>
  );
};

export default Home;
