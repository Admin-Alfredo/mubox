const {all_musicas} = require('../localStorage/musicas')
module.exports = app =>{
  const getAll = (req, res) =>{
    res.status(200).json(all_musicas)
  }
  const getOne = (req, res) =>{
    const id = req.params.id
    const musica = all_musicas.filter((m, i)=>m._id == id)
    res.status(200).json(musica)
  }
  return {getAll, getOne}
}