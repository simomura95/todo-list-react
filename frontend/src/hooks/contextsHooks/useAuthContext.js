import { AuthContext } from "../../context/AuthContext.js"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside a AuthContextProvider')
  }

  return context
}