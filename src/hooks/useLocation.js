import { useContext } from "react"
import { PageContext } from "../context/PageContext"

const useLocation = () => {
  const { location } = useContext(PageContext)

  return location
}
export default useLocation
