const express = require ("express")
const app = express()

app.use("*", function(req,res,next){
    console.log("passamos pelo app, irruuuuu!!!")
    next ()
})
const tarefas = require ("./routes/tarefasRoute")
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})
app.use("/tarefas", tarefas)
module.exports = app