const mongoose=require('mongoose');

const FamousPerson=mongoose.model(
'FamousPerson',mongoose.Schema({
 personName:String,
 personProfession:String,
})
)
module.exports=FamousPerson;