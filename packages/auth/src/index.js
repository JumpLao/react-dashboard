import React, { useState, useContext } from 'react'
import {
  useHistory
} from 'react-router-dom'
/**
 * @typedef UserInfoType
 * @type {object}
 * @property {string | number} id - an ID.
 * @property {string} name - your name.
 * @property {string} profileImage - profile image.
 */

/**
 * @typedef AuthContextType
 * @type {object}
 * @property {UserInfoType} [user]
 * @property {Function} [onForbidden]
 */

/**
 * @type {React.Context<AuthContextType>}
 */
const Context = React.createContext({});
const AuthProvider = ({
  children,
  forbiddenPath = '/forbidden'
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
    login: () => setuser({
      id: 1,
      name: 'jump',
      profileImage: 'https://i.pravatar.cc/300'
    })
  }
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

const useAuth = () => {
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
const useAuthenticated = (forbiddenCb) => {
  const {
    user,
    onForbidden
  } = useAuth()
  if (!user) {
    forbiddenCb ? forbiddenCb() : onForbidden()
  }
}
export default {
  AuthProvider,
  useAuth,
  useAuthenticated
}
