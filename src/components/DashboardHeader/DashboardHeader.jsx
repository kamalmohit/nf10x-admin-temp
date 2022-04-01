import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
    return (
        <header className="sticky top-0 left-0 z-10 w-full flex flex-row justify-between bg-black text-grey h-14 pl-6 pr-6">
            <span className="self-center flex items-center">
                <img src={Logo} alt="Logo small" className="mr-2" />NF10X
            </span>
            <ul className="flex flex-row basis-1/3 justify-between pl-1 pr-1 pt-4 text-md font-normal">
                {menuItems.map(({name,key}) => (
                    <NavLink key={key} className={({isActive}) => isActive ? "text-white border-b-4" : "hover:border-b-4 ease-in-out duration-300"} to={handleNestedNavigation(key)}>
                        {name}
                    </NavLink>
                ))}
            </ul>
            <button className="flex items-center" onClick={handleLogout}>
                <img src={ProfileLogo} className="w-6 h-6" alt="logout icon" />
            </button>
        </header>
    )
}

export default DashboardHeader;