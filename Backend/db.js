
const mongoose=require('mongoose');
mongoose.set("strictQuery", false); 
const mongoURI=MONGO_URL;
const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully");
    })

}
module.exports=connectToMongo;
