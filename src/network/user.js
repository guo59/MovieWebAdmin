import { request} from './request'

export function getUsers() {
  return request ({
    url: '/user'
  })
}

export function removeUser(id) {
  return request ({
    url: `/user/${id}`,
    method: 'delete',
    data: {
      id
    }
  })
}