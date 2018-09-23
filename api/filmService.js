import service from '../service/service'

export default {
  getList(params) {
    let query = ''
    if (Object.keys(params).length !== 0) {
      let key = Object.keys(params)
      let value = Object.values(params)
      query = '?' + key + "=" + value
    }
    return service().get('/' + query).then(response => {
      return response.data
    })
  },

  createFilm(film) {
    return service().post('/film', {
      name: film.name,
      rating: film.rating,
      image: film.image,
      trailer: film.trailer
    })
  },

  updateFilm(film) {
    return service().put(`/film/${film._id}`, {
      name: film.name,
      rating: film.rating,
      image: film.image,
      trailer: film.trailer
    })

  },

  deleteFilm(film) {
    return service().delete(`/film/${film._id}`)
  }
}
