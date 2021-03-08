const mongoose=require('mongoose');

const SongsIndian=mongoose.model(
'SongsIndian',mongoose.Schema({
 songIndianName:String,
 songIndianArtist:String,
})
)
module.exports=SongsIndian;