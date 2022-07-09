import React, { useState } from 'react'
import AlertsContext from '../contexts/alert'
import UserContext from '../contexts/user'

// 
 /**
   * GlobalContext is a wrapper to combine all contexts into one component
   *
   * @param {HTML} children child components
   */
function GlobalContexts({children}) {
    const [user, setUser] = useState()
    const [alerts, setAlerts] = useState([])

  return (
    <UserContext.Provider value={[user, setUser]}>
        <AlertsContext.Provider value={[alerts, setAlerts]}>
            {children}
        </AlertsContext.Provider>
    </UserContext.Provider>
  )
}

export default GlobalContexts