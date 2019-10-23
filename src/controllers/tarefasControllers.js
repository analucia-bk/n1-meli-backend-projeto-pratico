const tarefas = require ("../models/tarefas.json")
exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefas)
}
exports.getById = (req,res) => {
    const id = req.params.id
    if (id > 5 || id <= 0){
        res.send("id não é válido")
    }
    console.log(id)
    res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
}