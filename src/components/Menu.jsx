import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar " data-bs-theme="dark" style={{ position: 'relative' }}>
      <button
        className="navbar-toggler bg-secondary"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1 }}
      >
        <ul className="navbar-nav bg-secondary p-3 rounded rounded-3">
          <li className="nav-item">
            <a className="nav-link text-light" href="/"><h4>Inicio</h4></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/Tareas"><h4>Tareas</h4></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/Materiales"><h4>Materiales</h4></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/Remitos"><h4>Remitos</h4></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/Recordatorios"><h4>Recordatorios</h4></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/Avance"><h4>Avance</h4></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/Planos"><h4>Planos</h4></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;











