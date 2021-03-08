import React, { useState, useEffect } from "react";
import "./styles.css";
import Chip from "@material-ui/core/Chip";
import Badge from "react-bootstrap/Badge";

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
  } = props;
  console.log(songs, "songs from component..");
  console.log(songsIndian, "songsIndian from component..");
  console.log(events, "events from component..");
  console.log(twitterTrends, "twitterTrends from component..");
  console.log(games, "games from component..");
  console.log(famousperson, "famousperson from component..");
  console.log(repos, "repos from component..");
  console.log(language, "language of github repos from component..");

  //changing state on click of languages
  const languageHandler = (value) => {
    languagewrapper(value);
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card-1">
          <p className="card-header-text">Songs of the day:</p>
          {songs.map((song) => {
            return (
              <p className="card-list">
                {song.songName} {song.songArtist}
              </p>
            );
          })}
        </div>

        {/* Indian Songs */}
        <div className="card-1">
          <p className="card-header-text">Songs of the day [Indian] : </p>
          <span class="pill">Streamed</span>
          {songsIndian.map((song) => {
            return (
              <p className="card-list">
                {song.songIndianName} {song.songIndianArtist}
              </p>
            );
          })}
        </div>

        <div className="card-2">
          <p className="card-header-text">Games of the day : </p>
          <span class="pill">Concurent Players</span>
          {games.map((game) => {
            return (
              <p className="card-list">
                {game.gameName} with {game.currentGamePlayers} live players
              </p>
            );
          })}
        </div>

        <div className="card-3">
          <p className="card-header-text">Trends of the day : </p>

          {twitterTrends.map((twitterTrend) => {
            return (
              <p className="card-list">
                {twitterTrend.trendName} with {twitterTrend.trendNumbers} tweets
              </p>
            );
          })}
        </div>

        <div className="card-4">
          <p className="card-header-text">Birthdays of the day : </p>
          {famousperson.map((person) => {
            return (
              <p className="card-list">
                {person.personName} , {person.personProfession}
              </p>
            );
          })}
        </div>

        <div className="card-5">
          <p className="card-header-text">Events of the day : </p>
          {events.map((event) => {
            return <p className="card-list">{event.eventName}</p>;
          })}
        </div>

        <div className="card-6">
          <p className="card-header-text">Repos of the day :</p>
          <div className="pill-container">
            <button
              class="pill"
              onClick={() => {
                languageHandler("Python");
              }}
            >
              Python
            </button>
            <button
              class="pill"
              onClick={() => {
                languageHandler("C");
              }}
            >
              C
            </button>
            <button
              class="pill"
              onClick={() => {
                languageHandler("Java");
              }}
            >
              Java
            </button>
            <button
              class="pill"
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
                <div className="repo-parent-left">
                  <p className="card-list-repo">{repo.reponame}</p>
                  <p className="repo-desc">{repo.repodescription}</p>
                  {/* <p className="repo-desc">{repo.repolanguage}</p> */}
                </div>
                <div className="repo-parent-right">
                  <a href="{repo.repolink}">Link</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
