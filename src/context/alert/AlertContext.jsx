import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext()

// we need a provider to that will wrap the other components in
export const AlertProvider = ({children}) => {
  const initialState = null 

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT', 
      payload: {msg, type}
    })

    // after 3 second remove alert will fire 
    setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000)
  }
  return <AlertContext.Provider value={{alert: state, setAlert}}>
    {children}
  </AlertContext.Provider>
}

export default AlertContext