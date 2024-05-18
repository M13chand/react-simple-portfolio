import { FaBars } from "react-icons/fa";

import { useState } from "react";
import { SlClose } from "react-icons/sl";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <div className="bg-black text-white flex justify-between px-4 py-5">
        <h1>MANOZ.DEV</h1>
        <nav className="space-x-5 sm:hidden ">
          <navLink className=" hover:border-b-2  p-2 transition-all">
            About
          </navLink>
          <navLink className=" hover:border-b-2  p-2 transition-all">
            Services
          </navLink>
          <navLink className=" hover:border-b-2 p-2 transition-all">
            Projects
          </navLink>
          <navLink className=" hover:border-b-2  p-2 transition-all">
            Contact
          </navLink>
        </nav>

{/* For Mobile Devices */}
    
<div className=" sm:block 3xl:hidden ">
{ isOpen ?(<nav  className='space-y-6 sm:flex flex-col py-10  '>
   
   <navLink >
     About
   </navLink>
   <navLink >
     Services
   </navLink>
   <navLink>
     Projects
   </navLink>
   <navLink >
     Contact
   </navLink>

 </nav>
): ''

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
