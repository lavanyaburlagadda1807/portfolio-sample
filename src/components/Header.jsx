import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
