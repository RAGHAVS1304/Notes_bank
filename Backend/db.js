
const mongoose=require('mongoose');
mongoose.set("strictQuery", false); //this was just added by me since else it was giving error
const mongoURI="mongodb+srv://raghav:raghav@mycluster.usgmsla.mongodb.net/CONTACTSDATABASE";
const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully");
    })

}
module.exports=connectToMongo;