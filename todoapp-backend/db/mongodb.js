
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://joan:joan@cluster0.fbkgv0g.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected to atlas');
})
.catch((e)=>{
    console.log('error cconnot connected')
})