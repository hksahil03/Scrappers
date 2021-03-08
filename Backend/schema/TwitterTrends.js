const mongoose=require('mongoose');

const TwitterTrends=mongoose.model(
'TwitterTrends',mongoose.Schema({
 trendName:String,
 trendNumbers:String,
})
)
module.exports=TwitterTrends;