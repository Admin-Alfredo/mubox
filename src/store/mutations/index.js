
export const addMusicasMut = function(state, payload) {
  console.error('PayLoad das musicas:', payload)
  state.musicas = [...payload]
}
export const addAtualMusicasMut = function(state, payload) {
  state.a_musica.musica = [payload] // @a_musica: Array[0]
  state.a_musica.selfs = state.musicas.filter(m => payload._id !== m._id && payload.author == m.author)
}
