import Display from "./Display"
import Tech from "./Tech"
import Info from "./Info"
import useTitle from "../../hooks/useTitle"
const Main = () => {
  useTitle('Home-Manoz.Dev')
  return (
    <div>
      <Display />
      <Tech />
      <Info />
    </div>
  )
}
export default Main