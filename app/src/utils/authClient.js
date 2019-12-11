import Axios from 'axios'

const tokenKey = 'token'

const instance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: localStorage.getItem(tokenKey)
  }
})

const login = async (payload) => {
  const result = await instance.post('/api/users/login', payload).then(res => res.data)
  const {
    id
  } = result
  if (id) {
    localStorage.setItem(tokenKey, id)
    instance.defaults.headers['Authorization'] = id;
  }
  return result
}

const register = async (payload) => {
  const result = await instance.post('/api/users', payload).then(res => res.data)
  return result
}

const getUserInfo = async () => {
  const result = await instance.get('/api/users/me').then(res => res.data)
  return result
}

const logout = async () => {
  const result = await instance.post('/api/users/logout').then(res => res.data)
  return result
}

const authClient = {
  login,
  logout,
  register,
  getUserInfo,
  client: instance
}

export default authClient