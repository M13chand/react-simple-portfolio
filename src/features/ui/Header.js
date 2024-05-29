import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { SlClose } from "react-icons/sl";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="!scroll-smooth" >
      <div className="bg-black text-white flex justify-between px-4 py-5">
        <h1>MANOZ.DEV</h1>
        <nav className="space-x-5 sm:hidden cursor-pointer">
          <NavLink to='/' className=" hover:border-b-2  p-2 transition-all">
            Home
          </NavLink>
          <NavLink to='/tech' className=" hover:border-b-2  p-2 transition-all">
            Tech
          </NavLink>

          <NavLink to='/info' className=" hover:border-b-2  p-2 transition-all">
            Info
          </NavLink>
        </nav>

        {/* For Mobile Devices */}

        <div className=" sm:block 3xl:hidden cursor-pointer ">
          {isOpen ? (<nav className='space-y-6 sm:flex flex-col py-10  '>

            <NavLink to='/' >
              Home
            </NavLink>
            <Link to='/tech'>

              Tech
            </Link>

            <NavLink to='/info'>
              Info
            </NavLink>

          </nav>
          ) : ''

          }
        </div>
        <div onClick={toggle} className=" sm:block 3xl:hidden ">
          {isOpen ? (
            <SlClose className="text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-2xl cursor-pointer " />
          )}
        </div>

      </div>
    </div>
  );
};
export default Header;
