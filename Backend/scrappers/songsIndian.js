
const request =require('request-promise');
const cheerio =require('cheerio');
const SongsIndian = require('../schema/SongsIndian');
const mongoose = require('mongoose');

//Scraping Songs
async function scrapIndiansongs(){
  const urlToScrap ='https://spotifycharts.com/regional/in/daily/latest';
       const html= await request.get(urlToScrap);
        const $=await cheerio.load(html);
  $(".chart-table-track").each(async (index,element)=>{
  try{


        //grabbing the song details
        const songIndianName=$(element).children('strong').text().trim();
        const songIndianArtist=$(element).children('span').text().trim();

        const song={songIndianName,songIndianArtist};

          //  creating the model's object
            const songsindian = new SongsIndian({
                songIndianName: songIndianName,
                songIndianArtist: songIndianArtist
            })
            await songsindian.save();
            console.log(song);
  }
  catch(err){
    console.log(err);
  }
  })
}

module.exports.scrapIndiansongs= scrapIndiansongs;


