

const express=require("express")

const app=express();

const middleware1=
    (req,res,next)=>{
        console.log("entry 1 given");
        next();
}

const middleware2=
    (req,res,next)=>{
        console.log("entry 1 given");
        next();
}

const middleware3=
    (req,res,next)=>{
        console.log("entry 1 given");
        next();
}

const specialmiddleware=
    (req,res,next)=>{
        console.log("entry 1 given");
        next();
}


app.use(middleware1)

app.use(middleware2)

app.use(middleware2)

    
app.get("/entry1",(req,res)=>{
res.send("entry given by universal middlewear1")
})

app.get("/entry2",(req,res)=>{
res.send("entry given by universal middlewear2")
})

app.get("/entry3",(req,res)=>{
res.send("entry given by special midddlewear middlewear2")
})

app.get("/entry4",(req,res)=>{
res.send("entry given by special midddlewear middlewear2")
})

app.listen(4001,()=>{
    console.log("server is running on port 4001")
})