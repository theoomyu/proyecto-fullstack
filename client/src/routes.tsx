import { createBrowserRouter } from "react-router"
import { RootLayout } from "./layouts/RootLayout"
import { Home } from "./pages/Home"
import { Contactenos } from "./pages/Contactenos"
import { Proyectos } from "./pages/Proyectos"
import { Empleados } from "./pages/Empleados"
import { Proveedores } from "./pages/Proveedores"
import { AdminServicios } from "./pages/AdminServicios" 
import { Login } from "./pages/Login"
import { Registro } from "./pages/Registro"
import { Pagina404 } from "./pages/Pagina404"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contactenos", element: <Contactenos /> },
      { path: "proyectos", element: <Proyectos /> },
      { path: "empleados", element: <Empleados /> },
      { path: "proveedores", element: <Proveedores /> },
      { path: "admin-servicios", element: <AdminServicios /> },
      { path: "login", element: <Login /> },
      { path: "registro", element: <Registro /> },
      { path: "*", element: <Pagina404 /> },
    ],
  },
])