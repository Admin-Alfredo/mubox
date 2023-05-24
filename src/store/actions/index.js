import Api from '../api'

export const addAtualMusicasAction = function ({ commit }, payload) {
  commit('addAtualMusicasMut', payload)
}
export const getAllMusicasAction = async function ({ commit }) {
  try {
    const musicas = await Api.getAll()
    commit('addMusicasMut', musicas)

  } catch (error) {
    console.error("[actions][getAllMuicas Api]: ", error.message)
  }
}
export const getOneMusicaAction = async function ({ state, commit}, payload) {
  try {
    const musica = await Api.getOne(payload)
    commit('addAtualMusicasMut', musica[0])
    commit('addMusicasMut', musica)
  } catch (error) {
    console.error("[actions][getOneMusica Api]: ", error.message)
  }
}