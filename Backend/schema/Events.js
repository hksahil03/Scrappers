const mongoose=require('mongoose');

const Events=mongoose.model(
'Events',mongoose.Schema({
 eventName:String,
})
)
module.exports=Events;