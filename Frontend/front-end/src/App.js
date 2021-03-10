import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  const [songs, setSongs] = useState([]);
  const [songsIndian, setSongsIndian] = useState([]);
  const [events, setEvents] = useState([]);
  const [twitterTrends, settwitterTrends] = useState([]);
  const [games, setgames] = useState([]);
  const [famousperson, setfamousperson] = useState([]);
  const [repos, setrepos] = useState([]);
  const [gainers, setgainers] = useState([]);
  const [loosers, setloosers] = useState([]);
  const [category, setcategory] = useState();
  const [language, setlanguage] = useState("all");
  const [type, setType] = useState("all_news");

  const categorywrapper=(value)=>{
    setcategory(value)
  }

  //wrapper to send setLanguage to cards page
  const languagewrapper = (value) => {
    setlanguage(value);
  };

    const typewrapper = (value) => {
    setType(value);
  };

  const gainerswrapper = (value) => {
    setgainers(value);
  };

  const looserswrapper = (value) => {
    setloosers(value);
  };


//url : https://inshortsv2.vercel.app/news?type=all_news
//  useEffect( () => {
//       if(type==='all'){
//         fetch("https://inshortsv2.vercel.app/news?type=all_news")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data,"data");
//           setcategory(data);
//         });
//       }
//       },[type]);

//test news api ends


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
    fetch("http://localhost:8000/topgainers")
      .then((res) => res.json())
      .then((data) => {
        setgainers(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/toploosers")
      .then((res) => res.json())
      .then((data) => {
        setloosers(data);
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




  // actual news api start//
  useEffect(() => {
      if(type==='all_news'){
        fetch("https://inshortsv2.vercel.app/news?type=all_news&limit=4")
        .then((res) => res.json())
        .then((data) => {
          console.log(data,"data");
          setcategory(data);
        });
      }
      else{
fetch(`https://inshortsv2.vercel.app/news?type=${type}&limit=3`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data,"data");
      setcategory(data);
        });
      }
      },[type]);

  //actual news api ends//



//test news api starts




console.log(language,'language');
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
        gainers={gainers}
        loosers={loosers}
        type={type}
        typewrapper={typewrapper}
        category={category}
        categorywrapper={categorywrapper}
      ></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
