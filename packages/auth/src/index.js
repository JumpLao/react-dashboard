import React, { useState, useContext } from 'react'

/**
 * @typedef UserInfoType
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} name - your name.
 */

/**
 * @typedef AuthContextType
 * @type {object}
 * @property {UserInfoType} [user]
 */

/**
 * @type {React.Context<AuthContextType>}
 */
const Context = React.createContext({});
const AuthProvider = ({
  children
}) => {
  /**
   * @type [UserInfoType, React.Dispatch<UserInfoType>]
   */
  const [user, setuser] = useState()
  const contextValue = {
    user
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
export default {
  AuthProvider,
  useAuth
}
