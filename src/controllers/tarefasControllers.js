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
exports.getConcluido = (req, res) => {
  const concluiuTarefa = tarefas.filter (item => item.concluido == "true")
  const tarefaConcluida = concluiuTarefa.map(item => item.descricao)
  res.status(200).send(tarefaConcluida)
}
exports.getnomeColaborador = (req, res) => {
  const nomeColaborador = req.params.nomeColaborador
  const nomeCol = tarefas.filter(item => item.nomeColaborador == nomeColaborador)
  
  res.status(200).send(nomeCol)
}

    
