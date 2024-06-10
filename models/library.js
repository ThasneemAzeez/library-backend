const mongoose=require("mongoose")
const Scheema = mongoose.Schema(
    {
        "name":"",
        "bookname":"",
        "bookid":"",
        "author":"",
        "category":"",
        "price":""
        
    }
)

let librarymodel=mongoose.model("librarys",Scheema);
module.exports={librarymodel}