import NavBars from "@/components/NavBars";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBars />
      <div className="pt-20" >
        <Outlet />
      </div>
    </>
  )
}

