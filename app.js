const express =require("express")
const port=9988;
const app=express()
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set("view engine",'pug')
app.set('views','./views')

app.use(express.static('static'))
app.use("/static",express.static('public'))

app.use(express.static('public'))
app.use("/image",express.static('images'))

app.get('/',(req,res)=>{


   
    res.render("home")
    
    
})
app.get('/services',(req,res)=>{


   
    res.render("services")
    
    
})
app.get('/contact',(req,res)=>{


   
    res.render("contact")
    
    
})


app.post('/contact1',(req,res)=>{

 let name=req.body.uname;
 let email=req.body.email;
 let pno=req.body.pno;

 if(fs.existsSync(`user`)){

    fs.appendFile(`user/details.txt`,`\n${email},${name},${pno}`,(err)=>{
        if(err) throw err
        else res.write("<script> alert('Thank you for contacting us')</script>;<script> location.assign('/contact')</script>;");
    })
   
}
else{
       
    res.write("<script> alert('file not found')</script>");
   
    res.end()

        }
    })




app.get('/contact_details',(req,res)=>{


    var array = fs.readFileSync('user/details.txt').toString().split("\n");
    res.render('contact_details', {file : array});
    
})


app.get('/gallery',(req,res)=>{


   
    res.render("gallery")
    
    
})
app.get('/portfolio',(req,res)=>{


   
    res.render("portfolio")
    
    
})
app.get('/about_us',(req,res)=>{


   
    res.render("about_us")
    
    
})



app.listen(port,(err)=>{

    if(err) throw err;
    else console.log(`server found ${port}`)
})