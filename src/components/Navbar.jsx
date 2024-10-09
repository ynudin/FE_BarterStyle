import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo-nav.png'; // Pastikan path ini benar
import './Navbar.css';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  return (
    <header className="bg-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo TukarBaju" className="logo-img" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-black"
                  onClick={toggleDropdown}
                  id="tukarBajuDropdown"
                  aria-expanded="false"
                >
                  Informasi
                </button>
                {dropdownVisible && (
                  <ul className="dropdown-menu" aria-labelledby="tukarBajuDropdown">
                    <li><Link className="dropdown-item text-black" to="#">Cara Tukaran</Link></li>
                    <li><Link className="dropdown-item text-black" to="#">Join Member</Link></li>
                    <li><Link className="dropdown-item text-black" to="#">Event</Link></li>
                    <li><Link className="dropdown-item text-black" to="#">Donasi</Link></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="#">Katalog Pakaian</Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <Link className="login-navbar btn-outline-primary" to="#">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="register-navbar btn-outline-primary" to="#">Register</Link>
            </li>
            <li className="nav-item" style={{ display: 'none' }}>
              <button className="btn btn-outline-primary" id="profileButton" onClick={toggleProfileDropdown}>
                <img id="userPhoto" src="../assets/photo_catt.png" alt="User Photo" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                <span id="userName">Username</span>
              </button>
              {profileDropdownVisible && (
                <div className="profile-dropdown" id="profileDropdown">
                  <Link className="dropdown-item" to="#">Profil</Link>
                  <Link className="dropdown-item" to="#">Logout</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
