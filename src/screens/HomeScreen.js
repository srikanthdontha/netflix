import React from "react";
import Banner from "./contentScreen/Banner";
import NavBar from "./contentScreen/NavBar";
import Row from "./contentScreen/Row";
import "./HomeScreen.css";
import requests from "./contentScreen/service/Request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />

      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comdey Movies" fetchUrl={requests.fetchComdeyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
