import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const navItems = [
    { to: "/", label: "Accueil" },
    { to: "/ManagersList", label: "Managers" },
    { to: "/EmployeeList", label: "Employés" },
    { to: "/documents", label: "Documents" },
    { to: "/dashboards", label: "Tableau de bord" },
  ];

  const username = "Anas"; // Replace with actual username

  return (
    <nav className="bg-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/public/download.png" alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-white hover:bg-red-400 hover:text-white px-3 py-2 rounded-md text-sm font-bold transition duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-white">
              <FaUser className="mr-2" />
              <span>{username}</span>
              <button
                onClick={handleLogout}
                className="flex justify-center align-center ml-4 border-2 border-white  text-white font-bold pb-1 px-4 rounded"
              >
                Se déconnecter
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center text-white mt-4">
              <FaUser className="mr-2" />
              <span>{username}</span>
            </div>
            <button
              onClick={handleLogout}

              className="mt-4 bg-red-300  text-white font-bold py-2 px-4 rounded w-full text-center"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
