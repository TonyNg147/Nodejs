const express = require('express')
const app = express()
const port =3000

app.get('/',(req,res)=>{
    console.log(req.url)
    res.send("dume acc cacc")
})

app.listen(port,()=>console.log('everything functions fine'))