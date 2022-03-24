import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import menuItems from 'globals/mainMenuItems';
import LogoutIcon from 'assets/Dashboard/logout.svg';
const DashboardHeader = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");
    }
    return (
        <header className="sticky top-0 left-0 right-0 w-full flex flex-row justify-between bg-black text-grey h-14 pl-6 pr-6">
            <span className="self-center">
                NF10X
            </span>
            <ul className="flex flex-row basis-1/3 justify-between pl-1 pr-1 pt-4 text-md">
                {menuItems.map(({name,key}) => (
                    <NavLink className={({isActive}) => isActive ? "text-white border-b-4" : "hover:border-b-4 ease-in-out duration-300"} to={key === 'users' ? `${key}/whitelist` : `/home/${key}`}>
                        {name}
                    </NavLink>
                ))}
            </ul>
            <button className="flex items-center" onClick={handleLogout}>
                <span className="mr-2">Logout</span>
                <img className="w-[12px] h-[12px]" src={LogoutIcon} alt="logout icon" />
            </button>
        </header>
    )
}

export default DashboardHeader;