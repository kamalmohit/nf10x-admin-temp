import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import usersViewMenu from 'globals/usersViewMenu';
import Button from 'globals/UIComponents/Button/Button';

const UsersView = () => {
    return (
        <section className="p-8">
            <div className="flex flex-row justify-between border-[#E5DBEE] border-b-2">
                <ul className="flex flex-row justify-between basis-2/4 text-grey text-2xl">
                   {usersViewMenu.map(({name,key}) => (
                       <NavLink className={({isActive}) => isActive ? "text-black border-black border-b-2" : "hover:border-b-2 hover: border-black ease-in-out duration-100"} to={`/home/users/${key}`}>
                           {name} <span className="ml-1 text-grey">0</span>
                       </NavLink>
                   ))}
                </ul>
                <Button text="+ Add New Member" classes="mb-1 w-[225px] text-[16px]" />
            </div>
            <Outlet />
        </section>
    )
}

export default UsersView;