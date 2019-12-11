import React, { useState, useContext } from 'react'
import {
  useHistory
} from 'react-router-dom'
import { useEffectOnce } from 'react-use'
/**
 * @typedef UserInfoType
 * @type {object}
 * @property {string | number} id - an ID.
 * @property {string} name - your name.
 * @property {string} [profileImage] - profile image.
 */

/**
 * @typedef AuthContextType
 * @type {object}
 * @property {UserInfoType} [user]
 * @property {Function} [onForbidden]
 * @property {Function} [login]
 * @property {Function} [register]
 * @property {Function} [getUserInfo]
 * @property {Function} [logout]
 * @property {any} [client]
 */

/**
 * @type {React.Context<AuthContextType>}
 */
const Context = React.createContext({});
export const AuthProvider = ({
  children,
  forbiddenPath = '/forbidden',
  loadingComponent = () => <div>Loading</div>,
  client = {
    login: (payload) => Promise.resolve(),
    register: (payload) => Promise.resolve(),
    getUserInfo: () => Promise.resolve({
      id: 1,
      name: 'Mock'
    }),
    logout: () => Promise.resolve()
  }
}) => {
  /**
   * @type [UserInfoType, React.Dispatch<UserInfoType>]
   */
  const [user, setuser] = useState()
  const [loading, setloading] = useState(true)
  // const history = useHistory()
  const history = useHistory()
  useEffectOnce(async () => {
    try {
      const res = await client.getUserInfo()
      setuser(res)
    } catch (e) {
      console.log('Not authenticated')
    }
    setloading(false)
  })
  if (loading) {
    return loadingComponent()
  }
  const getUserInfo = async () => {
    const user = await client.getUserInfo()
    setuser(user)
    return user
  }
  const contextValue = {
    user,
    onForbidden: () => history.push(forbiddenPath),
    ...client,
    getUserInfo,
    login: async (payload) => {
      await client.login(payload)
      return await getUserInfo()
    },
    logout: async () => {
      await client.logout()
      setuser(null)
      return
    }
  }
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useAuth should be use in side auth context')
  }
  return context;
}
/**
 * 
 * @param {function} forbiddenCb 
 */
export const useAuthenticated = (forbiddenCb) => {
  const {
    user,
    onForbidden
  } = useAuth()
  if (!user) {
    forbiddenCb ? forbiddenCb() : onForbidden()
  }
}