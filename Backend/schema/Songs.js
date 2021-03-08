const mongoose=require('mongoose');

const Songs=mongoose.model(
'Songs',mongoose.Schema({
 songName:String,
 songArtist:String,
})
)
module.exports=Songs;