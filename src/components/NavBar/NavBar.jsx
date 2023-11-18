import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../utilities/users-service';
import './Navbar.css'

export default function NavBar({ user, setUser }) {
    const [dropdownIsActive, setDropdownIsActive] = useState(false);

    function toggleDropdown() {
        setDropdownIsActive(!dropdownIsActive);
    }
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <span onClick={toggleDropdown}>Welcome, {user.name} &#8691;</span>
            {dropdownIsActive && (
                <div className='dropdown-content'>
                    <Link to="/dashboard" >My Dashboard</Link>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </div>
            )}
        </nav>
    );
}