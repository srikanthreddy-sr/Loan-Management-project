import React, { createContext, useState } from 'react'

export const UserRoleContext = createContext()

const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('Admin') // default role

  const cycleRole = () => {
    setUserRole(prev => {
      if (prev === 'Admin') return 'Verifier'
      if (prev === 'Verifier') return 'User'
      return 'Admin'
    })
  }

  return (
    <UserRoleContext.Provider value={{ userRole, cycleRole }}>
      {children}
    </UserRoleContext.Provider>
  )
}

export default UserRoleProvider
