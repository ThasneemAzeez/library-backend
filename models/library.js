const mongoose=require("mongoose")
const Scheema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "bookname":{type:String,required:true},
        "bookid":{type:String,required:true},
        "author":{type:String,required:true},
        "category":{type:String,required:true},
        "price":{type:String,required:true}
        
    }
)

let librarymodel=mongoose.model("librarys",Scheema);
module.exports={librarymodel}