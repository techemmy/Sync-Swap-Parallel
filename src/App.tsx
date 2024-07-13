import NavBars from "@/components/NavBars";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBars />
      <Outlet />
    </>
  )
}

