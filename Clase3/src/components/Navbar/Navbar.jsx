import React from 'react';

const Navbar = () => {
  return (
    <nav className="container">
        <p onClick = {() => alert("Hola soy Homero chino")}>Home</p>
        <p>About</p>
        <p>Contact</p>
    </nav>
  )
}

export default Navbar;