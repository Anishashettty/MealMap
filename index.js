const express=require("express")
const path=require("path")
const mongoose=require("mongoose")

const userRoute=require('./routes/user')

const app=express()
const PORT=8000;

mongoose.connect('mongodb://localhost:27017/Blogapp')
.then(e=>console.log("mongodb conected"))

app.set('view engine','ejs')
app.set('views',path.resolve("./views"))

app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("home")
})

app.use("/user",userRoute)

app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`));