import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [songs, setSongs] = useState([]);
  const [songsIndian, setSongsIndian] = useState([]);
  const [events, setEvents] = useState([]);
  const [twitterTrends, settwitterTrends] = useState([]);
  const [games, setgames] = useState([]);
  const [famousperson, setfamousperson] = useState([]);
  const [repos, setrepos] = useState([]);
  const [language, setlanguage] = useState("all");

  //wrapper to send setLanguage to cards page
  const languagewrapper = (value) => {
    setlanguage(value);
  };

  //connecting backend with frontend
  useEffect(() => {
    fetch("http://localhost:8000/songs")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/songsIndian")
      .then((res) => res.json())
      .then((data) => {
        setSongsIndian(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/twitterTrends")
      .then((res) => res.json())
      .then((data) => {
        settwitterTrends(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/famousperson")
      .then((res) => res.json())
      .then((data) => {
        setfamousperson(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((res) => res.json())
      .then((data) => {
        setgames(data);
      });
  }, []);

  useEffect(() => {
    language === "all"
      ? fetch("http://localhost:8000/github")
          .then((res) => res.json())
          .then((data) => {
            console.log("im in general use effect");
            setrepos(data);
          })
      : fetch(`http://localhost:8000/github/${language}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("im in selected lang use effect");
            setrepos(data);
          });
  }, [language]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/github")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setrepos(data);
  //     });
  // }, []);

  console.log(language , "language in main page");
  return (
    <div className="App">
      <Header></Header>
      <Card
        songs={songs}
        songsIndian={songsIndian}
        events={events}
        twitterTrends={twitterTrends}
        games={games}
        famousperson={famousperson}
        repos={repos}
        language={language}
        languagewrapper={languagewrapper}
      ></Card>
    </div>
  );
}

export default App;
