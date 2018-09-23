import filmService from '../../api/filmService'

const state = {
  filmList: []
}

const getters = {}

const actions = {
  getFilmList({
      commit
    },
    query = {}) {
    filmService.getList(query).then(function(films) {
      commit('setFilmList', films)
    })
  },
  createFilm({
    commit
  }, data = {}) {
    filmService.createFilm(data)
  }
}

const mutations = {
  setFilmList(state, films) {
    state.filmList = films
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
