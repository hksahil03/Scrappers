const mongoose=require('mongoose');

const Github=mongoose.model(
'Github',mongoose.Schema({
 reponame:String,
 repolink:String,
 repodescription:String,
 repolanguage:String
})
)
module.exports=Github;
