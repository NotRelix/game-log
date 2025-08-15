import { Outlet } from "react-router"
import Navbar from "../../components/Navbar/Navbar"

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Root