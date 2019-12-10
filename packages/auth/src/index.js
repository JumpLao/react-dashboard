import React, { useState, useContext } from 'react'
import {
  useHistory
} from 'react-router-dom'
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
 */

/**
 * @type {React.Context<AuthContextType>}
 */
const Context = React.createContext({});
export const AuthProvider = ({
  children,
  forbiddenPath = '/forbidden',
  client = {
    login: (payload) => Promise.resolve(),
    register: (payload) => Promise.resolve(),
    getUserInfo: (payload) => Promise.resolve({
      id: 1,
      name: 'Mock'
    }),
    logout: (payload) => Promise.resolve()
  }
}) => {
  /**
   * @type [UserInfoType, React.Dispatch<UserInfoType>]
   */
  const [user, setuser] = useState()
  // const history = useHistory()
  const history = useHistory()
  const contextValue = {
    user,
    onForbidden: () => history.push(forbiddenPath),
    ...client,
    login: async () => {
      await client.login()
      const user = await client.getUserInfo()
      setuser(user)
    },
    logout: async () => {
      await client.logout()
      setuser(null)
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