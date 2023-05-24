const URL = "http://localhost:3002"

function getOne(id_musica) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}/api/musicas/${id_musica}`, { headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(musica => {
        resolve(musica)
      }).catch(err => { reject(err) })
  })
}
function getAll() {
  return new Promise((resolve, reject) => {
    fetch('/api/musicas?limit', { headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(musicas => {
        resolve(musicas)
      }).catch(err => { reject(err) })
  })
}
export default { getAll, getOne}