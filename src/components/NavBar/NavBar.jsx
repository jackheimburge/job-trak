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
            <a href="/"><img src="https://i.imgur.com/HKziD1u.png" alt="" /></a>
            <span onClick={toggleDropdown}>Welcome, {user.name}<span className='arrow'> &#8595;</span></span>
            {dropdownIsActive && (
                <div className='dropdown-content' onMouseLeave={() => setDropdownIsActive(false)} onClick={() => setDropdownIsActive(false)}>
                    <Link to={'/'}>Home </Link>
                    <Link to="/dashboard" >My Dashboard</Link>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </div>
            )}
        </nav>
    );
}