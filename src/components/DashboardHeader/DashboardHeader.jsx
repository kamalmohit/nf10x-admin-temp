import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    MenuButton
  } from '@szhsin/react-menu';
import menuItems from 'globals/mainMenuItems';
import Logo from 'assets/Dashboard/logo.svg';
import ProfileLogo from 'assets/Dashboard/profile.svg';
const DashboardHeader = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");
    }
    const handleNestedNavigation = (key) => {
        switch(key) {
            case 'users':
                return `${key}/whitelist`;
            case 'events':
                return `${key}/upcoming`;
            default:
                return `/home/${key}`;
        }
    }
    const handleHomeNavigation = () => {
        navigate('/home/users/whitelist');
    };

    const userMenuIcon = (
        <MenuButton className="flex items-center w-full">
             <img src={ProfileLogo} className="w-6 h-6" alt="logout icon" />
        </MenuButton>
    )
    return (
        <header className="sticky top-0 left-0 z-10 w-full flex flex-row justify-between bg-black text-grey h-14 pl-6 pr-6">
            <span onClick={handleHomeNavigation} className="self-center flex items-center cursor-pointer">
                <img src={Logo} alt="Logo small" className="mr-2" />NF10X
            </span>
            <ul className="flex flex-row basis-1/3 justify-between pl-1 pr-1 pt-4 text-md font-normal">
                {menuItems.map(({name,key}) => (
                    <NavLink key={key} className={({isActive}) => isActive ? "font-bold text-white border-b-4" : "hover:border-b-4 ease-in-out duration-300"} to={handleNestedNavigation(key)}>
                        {name}
                    </NavLink>
                ))}
            </ul>
            <div className="self-center">
                <Menu align="end" menuButton={userMenuIcon}>
                    <MenuItem className="hover:bg-purple" onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </header>
    )
}

export default DashboardHeader;