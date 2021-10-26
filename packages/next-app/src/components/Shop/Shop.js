import React, { useState } from 'react'
import Home from './components/Home'
import Food from './components/Food'
import Art from './components/Art'
import Mercantile from './components/Mercantile'
import Medicinals from './components/Medicinals'


export default function Shop() {

  const [showMenu, setMenu] = useState(false);

  const [ shopView, setView ] = useState("home");

  const toggleMenu = () => {
      setMenu(!showMenu);
  }

  const setShopView = (view) => {
    setView(view);
  }

  let menuClass = " border-solid border-brown w-64 space-y-6 p-2 absolute inset-y-0 " +
  " left-0 transition duration-200 ease-in-out transform md:relative md:translate-x-0 " +
  (showMenu ? " translate-x-0 " : " -translate-x-full ");

  return (
    <React.Fragment>
          <div className="md:flex relative min-h-screen w-full">

            {/* Mobile nav bar containing button to show nav */}
            <div className="bg-brown-dark text-brown-light flex justify-between md:hidden">
              {/* logo */}
              <a>Bear Creek Store</a>


              {/* mobile menu button */}
              <button onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* End Mobile nav bar containing logo/buttons/nav */}

            {/* Side bar containing logo/buttons/nav */}
            <div className= {menuClass}>
              {/* This is the Logo*/}
              <a className="text-brown-dark flex items-center space-x-2" href="/shop">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span>Bear Creek Nature Farm<br/>Mercantile</span>
              </a>
                
              {/* This is the Nav*/}
              <nav className="space-y-2">
                  <a className="block py-2.5 px-4 bg-brown hover:bg-brown-dark hover:text-brown-light transition duration-200 rounded" onClick={() => setShopView("home")}>Home</a>
                  <a className="block py-2.5 px-4 bg-brown hover:bg-brown-dark hover:text-brown-light transition duration-200 rounded" onClick={() => setShopView("food")}>Food</a>
                  <a className="block py-2.5 px-4 bg-brown hover:bg-brown-dark hover:text-brown-light transition duration-200 rounded" onClick={() => setShopView("art")}>Art</a>
                  <a className="block py-2.5 px-4 bg-brown hover:bg-brown-dark hover:text-brown-light transition duration-200 rounded" onClick={() => setShopView("medicinals")}>Medicinals</a>
                  <a className="block py-2.5 px-4 bg-brown hover:bg-brown-dark hover:text-brown-light transition duration-200 rounded" onClick={() => setShopView("mercantile")}>Mercantile</a>
              </nav>
            </div>
            {/* End Side bar containing logo/buttons/nav*/}


            {/* This is the Shop content*/}
            <div> 
            {shopView === "home" && (<Home/>)}
            {shopView === "food" && (<Food/>)}
            {shopView === "art" && (<Art/>)}
            {shopView === "medicinals" && (<Medicinals/>)}
            {shopView === "mercantile" && (<Mercantile/>)}

            </div>

          </div>
    </React.Fragment>
  )
}
