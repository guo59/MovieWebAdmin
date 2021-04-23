import { request} from './request'

export function getMovies() {
  return request ({
    url: '/movie'
  })
}

export function removeMovie(id) {
  return request ({
    url: `/movie/${id}`,
    method: 'delete',
    data: {
      id
    }
  })
}

export function getMovieById(id) {
  return request ({
    url: `/movie/${id}`,
    data: {
      id
    }
  })
}

export function updateMovieById(id, data) {
  return request ({
    url: `/movie/${id}`,
    method: 'PATCH',
    data
  })
}

export function addMovie(data) {
  return request ({
    url: `/movie`,
    method: 'POST',
    data
  })
}

export function getMoviePoster(id) {
  return request ({
    url: `/movie/${id}/poster`,
    method: 'GET',
    data: {
      id
    }
  })
}

export function getComment() {
  return request({
    url: `/comment`,
    method: 'GET'
  })
}