const mongoose=require('mongoose');

const Games=mongoose.model(
'Games',mongoose.Schema({
 gameName:String,
 currentGamePlayers:String,
})
)
module.exports=Games;