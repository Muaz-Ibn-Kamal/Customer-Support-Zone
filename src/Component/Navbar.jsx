import React, { useState } from "react";
import Container from "./Container";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Faq", "Changelog", "Blog", "Contact"];

  return (
    <Container>
      <div className="flex justify-between items-center p-4 ">
        {/* Logo */}
        <h2 className="text-2xl font-bold">CS-Ticket Zone</h2>

        {/* Desktop + Tablet Menu */}
        <div className="hidden md:flex lg:gap-5 items-center gap-3">
          {menuItems.map((item) => (
            <p
              key={item}
              className="cursor-pointer hover:text-purple-500 transition-colors duration-200 text-sm md:text-base"
            >
              {item}
            </p>
          ))}
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:opacity-90 transition-opacity duration-200 text-sm md:text-base px-4 py-2 rounded-md">
            + New Ticket
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 bg-white p-2 rounded-md hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 shadow-md top-4 right-4 z-50"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-16 right-2 bg-white shadow-xl rounded-lg flex flex-col gap-2 p-5 w-56 z-50 md:hidden">
            {menuItems.map((item) => (
              <p
                key={item}
                className="cursor-pointer px-3 py-2 rounded-md hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 text-sm"
              >
                {item}
              </p>
            ))}
            <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:opacity-90 transition-opacity duration-200 mt-2 text-sm px-4 py-2 rounded-md">
              + New Ticket
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
