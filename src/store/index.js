import Vue from 'vue'
import Vuex from 'vuex'
import {
  getAllMusicasAction,
  getOneMusicaAction,
  addAtualMusicasAction
} from './actions'

import {
  addAtualMusicasMut,
  addMusicasMut
} from './mutations'

Vue.use(Vuex)
const state = {
  musicas: [],
  a_musica: { musica: [], selfs: [] }
}

const actions = {
  getAllMusicasAction,
  getOneMusicaAction,
  addAtualMusicasAction
}
const mutations = {
  addAtualMusicasMut,
  addMusicasMut
}
export default new Vuex.Store({ state, actions, mutations })