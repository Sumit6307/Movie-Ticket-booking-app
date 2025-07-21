const express = require("express");
const getconnect = require("./dbconnect");
const { name } = require("ejs");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
app.get("/home",(req,res)=>{
    res.render("home")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.post("/signup", async (req,res)=>{
    console.log(req.body)
    let username = req.body.firstname;
    let email = req.body.email;
    let password = req.body.password;
    let date= req.body.date;
    let month= req.body.month;
    let collection = await getconnect();
    let insert=await collection.collection.insertOne({
        username:username,
        email:email,
        password:password,
        date:date,
        month:month

    })
   
   
    res.render("home")

})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",async (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let collection=await getconnect();
    let check=await collection.collection.findOne({
        username:username,
        password:password
    })
    if(check)
    {
        res.render("home")
    }
    else{
        res.render("login")
    }
})




app.get("/aboutus",(req,res)=>{
    res.render("aboutus")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/video",(req,res)=>{
    res.render("video")
})
app.get("/payment",(req,res)=>{
    res.render("payment")
})

app.get("/Ticket",(req,res)=>{
    res.render("Ticket")
})
app.get("/cancel",(req,res)=>{
    res.render("cancel")
})

app.post("/payment",async (req,res)=>{
    console.log(req.body);
    let holdername=req.body.cardholder;
    let BookedTicket=await getconnect();
    let Ticket=await BookedTicket.Ticketcollection.insertOne({
        CardHolderName:holdername
    })
    res.render("success")
})
app.post("/cancel",async (req,res)=>{
    let cardholder=req.body.cardholder;
    let BookedTicket=await getconnect();
    let Ticket=await BookedTicket.Ticketcollection.findOneAndDelete({
        CardHolderName:cardholder
    })
    if(Ticket)
    {
        res.render("aftercancel")
    }

})







app.listen(5000, () => {
    console.log("Server is running at port 5000");
});