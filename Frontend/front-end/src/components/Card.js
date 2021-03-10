import React, { useState, useEffect } from "react";
import "./styles.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import EllipsisText from "react-ellipsis-text";

export default function Card(props) {
  const {
    songs,
    songsIndian,
    events,
    twitterTrends,
    games,
    famousperson,
    repos,
    language,
    languagewrapper,
    gainers,
    loosers,
    type,
    typewrapper,
    category,
    categorywrapper,
  } = props;
  var FontAwesome = require("react-fontawesome");
  // console.log(songs, "songs from component..");
  // console.log(songsIndian, "songsIndian from component..");
  // console.log(events, "events from component..");
  // console.log(twitterTrends, "twitterTrends from component..");
  // console.log(games, "games from component..");
  // console.log(famousperson, "famousperson from component..");
  // console.log(repos, "repos from component..");
  // console.log(language, "language of github repos from component..");
  // console.log(gainers, "top gainers from component..");
  // console.log(category && category, "category from component");

  //tabs to change views
  const [stocksview, changestocksview] = useState("gainers");
  const [songsview, changesongsview] = useState("worldwide");

  //changing state on click of languages
  const languageHandler = (value) => {
    languagewrapper(value);
  };

  const typeHandler = (value) => {
    typewrapper(value);
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card-3">
          <p className="card-header-text">News of the day :</p>
          <div className="pill-container">
            <button
              className={`pill ${type === "all_news" ? "highlighted" : ""}`}
              onClick={() => {
                typewrapper("all_news");
              }}
            >
              All
            </button>

            <button
              className={`pill ${type === "travel" ? "highlighted" : ""}`}
              onClick={() => {
                typewrapper("travel");
              }}
            >
              Travel
            </button>
            <button
              className={`pill ${type === "sports" ? "highlighted" : ""}`}
              onClick={() => {
                typewrapper("sports");
              }}
            >
              Sports
            </button>
            <button
              className={`pill ${type === "technology" ? "highlighted" : ""}`}
              onClick={() => {
                typewrapper("technology");
              }}
            >
              Tech
            </button>

            <button
              className={`pill ${type === "startups" ? "highlighted" : ""}`}
              onClick={() => {
                typewrapper("startups");
              }}
            >
              Startups
            </button>
          </div>
          {category &&
            category.articles.map((item) => {
              return (
                <div className="repo-parent">
                  <span class="left">
                    <FaArrowAltCircleRight
                      color="lightskyblue"
                      className="arrows"
                    />
                  </span>

                  <div className="news-parent-left">
                    <p className="card-list-news">
                      {item.title}{" "}
                      <span
                        style={{ verticalAlign: "middle" }}
                        href={item.inshorts_url}
                      >
                        <FiExternalLink
                          style={{ color: "#ffffff99" }}
                          onClick={() => {
                            window.open(item.inshorts_url);
                          }}
                        />
                      </span>
                    </p>
                    <p className="news-desc">
                      <EllipsisText text={item.description} length={"90"} />
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="card-9">
          <p className="card-header-text">Stocks of the day :</p>
          <div className="pill-container">
            <button
              className={`pill ${
                stocksview === "gainers" ? "highlighted" : ""
              }`}
              onClick={() => {
                changestocksview("gainers");
              }}
            >
              Top Gainers
            </button>
            <button
              className={`pill ${
                stocksview === "loosers" ? "highlighted" : ""
              }`}
              onClick={() => {
                changestocksview("loosers");
              }}
            >
              Top Loosers
            </button>
          </div>

          {stocksview === "gainers"
            ? gainers.map((gainer) => {
                return (
                  <div className="list-container">
                    <span class="left">
                      <FaArrowAltCircleRight
                        color="#ffffb7"
                        className="arrows"
                      />
                    </span>
                    <p className="card-list">
                      {gainer.gainername} with{" "}
                      <span className="gainer-change">
                        +{gainer.gainerchange}%
                      </span>{" "}
                      change
                    </p>
                  </div>
                );
              })
            : loosers.map((looser) => {
                return (
                  <div className="list-container">
                    <span class="left">
                      <FaArrowAltCircleRight
                        color="lightsteelblue"
                        className="arrows"
                      />
                    </span>
                    <p className="card-list">
                      {looser.loosername} with{" "}
                      <span className="looser-change">
                        {looser.looserchange}%
                      </span>{" "}
                      change
                    </p>
                  </div>
                );
              })}
        </div>

        {/* Songs */}

        <div className="card-1">
          <p className="card-header-text">Songs of the day : </p>
          <div className="pill-container">
            <button
              className={`pill ${
                songsview === "worldwide" ? "highlighted" : ""
              }`}
              onClick={() => {
                changesongsview("worldwide");
              }}
            >
              Worldwide
            </button>
            <button
              className={`pill ${songsview === "indian" ? "highlighted" : ""}`}
              onClick={() => {
                changesongsview("indian");
              }}
            >
              Indian
            </button>
          </div>
          {songsview === "worldwide"
            ? songs.map((song) => {
                return (
                  <div className="list-container">
                    <span class="left">
                      <FaArrowAltCircleRight
                        color="d291bc"
                        className="arrows"
                      />
                    </span>

                    <p className="card-list">
                      <span style={{ textTransform: "capitalize" }}>
                        {song.songName}{" "}
                      </span>
                      {song.songArtist}
                    </p>
                  </div>
                );
              })
            : songsIndian.map((song) => {
                return (
                  <div className="list-container">
                    <span class="left">
                      <FaArrowAltCircleRight
                        color="lightgreen"
                        className="arrows"
                      />
                    </span>
                    <p className="card-list">
                      <span style={{ textTransform: "capitalize" }}>
                        {song.songIndianName}{" "}
                      </span>
                      {song.songIndianArtist}
                    </p>
                  </div>
                );
              })}
        </div>
        <div className="card-2">
          <p className="card-header-text">Games of the day : </p>
          <span class="pill-static">Concurent Players</span>
          {games.map((game) => {
            return (
              <div className="list-container">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightsalmon"
                    className="arrows"
                  />
                </span>
                <p className="card-list">
                  {game.gameName} with {game.currentGamePlayers} live players
                </p>
              </div>
            );
          })}
        </div>

        <div className="card-3">
          <p className="card-header-text">Trends of the day : </p>

          {twitterTrends.map((twitterTrend) => {
            return (
              <div className="list-container">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightskyblue"
                    className="arrows"
                  />
                </span>
                <p className="card-list">
                  {twitterTrend.trendName} with {twitterTrend.trendNumbers}{" "}
                  tweets
                </p>
              </div>
            );
          })}
        </div>

        <div className="card-4">
          <p className="card-header-text">Birthdays of the day : </p>
          {famousperson.map((person) => {
            return (
              <div className="list-container">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightgoldenrodyellow"
                    className="arrows"
                  />
                </span>
                <p className="card-list">
                  {person.personName} , {person.personProfession}
                </p>
              </div>
            );
          })}
        </div>

        <div className="card-5">
          <p className="card-header-text">History of the day : </p>
          {events.map((event) => {
            return (
              <div className="list-container">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightcoral"
                    className="arrows"
                  />
                </span>
                <p className="card-list">{event.eventName}</p>
              </div>
            );
          })}
        </div>

        <div className="card-6">
          <p className="card-header-text">Repos of the day :</p>
          <div className="pill-container">
            <button
              className={`pill ${language === "all" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("all");
              }}
            >
              All
            </button>

            <button
              className={`pill ${language === "Python" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("Python");
              }}
            >
              Python
            </button>
            <button
              className={`pill ${language === "C" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("C");
              }}
            >
              C
            </button>
            <button
              className={`pill ${language === "Java" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("Java");
              }}
            >
              Java
            </button>
            <button
              className={`pill ${language === "Go" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("Go");
              }}
            >
              Go
            </button>
          </div>
          {repos.map((repo) => {
            return (
              <div className="repo-parent">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightgreen"
                    className="arrows"
                  />
                </span>

                <div className="repo-parent-left">
                  <p className="card-list-repo">{repo.reponame}</p>
                  <p className="repo-desc">{repo.repodescription}</p>
                </div>

                <div className="repo-parent-right ">
                  <a className="pill-static" href={repo.repolink}>
                    Link
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
