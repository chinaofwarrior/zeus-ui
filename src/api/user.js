import request from '@/utils/request'
import qs from 'qs'

export function fetchUserList(query) {
  return request({
    url: 'user',
    method: 'get',
    params: query
  })
}

export function fetchUser(id) {
  return request({
    url: 'user/show',
    method: 'get',
    params: {
      id
    }
  })
}

export function createUser(data) {
  return request({
    url: 'user/add',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function updateUser(data) {
  return request({
    url: 'user/edit',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function updateUserStatus(data) {
  return request({
    url: 'user/updatestatus',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function updateUserPassWord(data) {
  return request({
    url: 'user/change-password',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function updateUserDept(data) {
  return request({
    url: 'user/move-department',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function changeUserPassword(data) {
  return request({
    url: 'user/change-user-password',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function deleteUser(data) {
  return request({
    url: 'user/del',
    method: 'post',
    data: qs.stringify(data)
  })
}
