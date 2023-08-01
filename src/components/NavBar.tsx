import LoginButton from "./LoginButton"


export default function NavBar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-300">
          <div className="navbar-start">
            <div className=" lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <a className="btn btn-ghost normal-case text-xl"
            ><img
                className="inline-block"
                src="/assets/LogoPointer.png"
                alt="logo pointer erp"
              /></a
            >
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Inicio</a></li>
              <li tabIndex={0}>
                <details>
                  <summary>Servicios</summary>
                  <ul className="p-2">
                    <li><a>Gestión de Ventas e Inventarios</a></li>
                    <li><a>Gestión de Compras y Logística</a></li>
                    <li><a>Gestión de Tesorería</a></li>
                    <li><a>Gestión de Contabilidad</a></li>
                    <li><a>Gestión de Producción</a></li>
                    <li><a>Gestión de Recursos Humanos</a></li>
                    <li><a>Gestión de Proyectos</a></li>

                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Nosotros</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <LoginButton />
          </div>

        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>

        </ul>

      </div>
    </div>
  )

}