const mongoose=require('mongoose');

const Songs=mongoose.model(
'Songs',mongoose.schema({
 title:String;
})
)
moodule.exports=Songs;