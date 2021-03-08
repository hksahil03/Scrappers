//importing libraries
const request = require("request-promise");
const cheerio = require("cheerio");
const mongoose = require("mongoose");

const deletecollection = require("./deletecollections");

// This returns module object with the functions from module's file.
const games = require("./scrappers/games");
const events = require("./scrappers/historyevents");
const songs = require("./scrappers/spotify");
const songsIndians = require("./scrappers/songsIndian");
const trends = require("./scrappers/twittertrends");
const famousbday = require("./scrappers/Famousbday");
const github = require("./scrappers/github");
// const connectmongo=require('../API/server');

//importing schema files
const Games = require("./schema/Games");
const Songs = require("./schema/Songs");
const SongsIndian = require("./schema/SongsIndian");
const TwitterTrends = require("./schema/TwitterTrends");
const Events = require("./schema/Events");
const FamousPerson = require("./schema/FamousPerson");
const Github = require("./schema/Github");

//connecting to database(mongodb)
async function connectmongo() {
  await mongoose.connect(
    "mongodb+srv://sahil:sahil@cluster0.iiimv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  console.log("connected to db...");
}

async function main() {
  await connectmongo();

  await deletecollection.deleteall(Games);
  await games.scrapgames();

  await deletecollection.deleteall(Events);
  await events.scraphistoryevents();

  await deletecollection.deleteall(Songs);
  await songs.scrapsongs();

  await deletecollection.deleteall(SongsIndian);
  await songsIndians.scrapIndiansongs();

  await deletecollection.deleteall(TwitterTrends);
  await trends.scraptrends();

  await deletecollection.deleteall(FamousPerson);
  await famousbday.scrapbirthday();

  await deletecollection.deleteall(Github);
  await github.scraprepos();
}



main();
