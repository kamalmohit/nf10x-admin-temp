import React, {useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuRadioGroup,
  } from '@szhsin/react-menu';
import {usersViewMenu} from 'globals/usersViewMenu';
import Button from 'globals/UIComponents/Button/Button';
import Input from 'globals/UIComponents/SearchInput/SearchInput';
import DownwardCaret from 'assets/Dashboard/downward-caret.svg';
import PlusSign from 'assets/Dashboard/plus.svg';

const UsersView = () => {
    const [usersFilter, setUsersFilter] = useState('all-users');
    const [statusFilter, setStatusFilter] = useState(['all-members']);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showBlockModal, setShowBlockModal] = useState(false);

    const handleUserFilterChange = (value) => {
        setUsersFilter(value);
    }

    const handleStatusFilterChange = (value) => {
        const statusArr = [...statusFilter];
        if (!statusArr.includes(value)) {
            statusArr.push(value);
            setStatusFilter(statusArr);
        } else {
            const filteredArr = statusArr.filter(el => el !== value);
            setStatusFilter(filteredArr);
        }
    }
    return (
        <section className="pl-12 pr-12 pt-8 pb-8 max-h-[calc(100vh_-_56px)]">
            <div className="flex flex-row justify-between border-[#E5DBEE] border-b-2 h-12">
                <ul className="flex flex-row justify-between basis-3/5 text-grey text-xl">
                   {usersViewMenu.map(({name,key}) => (
                       <NavLink key={key} className={({isActive}) => isActive ? "text-black border-black border-b-2" : "hover:border-b-2 hover: border-black ease-in-out duration-100"} to={`/home/users/${key}`}>
                           {name} <span className="ml-1 text-purple">60,000</span>
                       </NavLink>
                   ))}
                </ul>
                <Button classes="mb-1 mt-2 w-60 text-md flex justify-center items-center">
                    <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                    <span>Add New Member</span>
                </Button>
            </div>
            <section className="flex flex-row justify-between items-center pt-4 pb-4">
               <Input type="text" placeholder="Search user" classes="basis-2/3" id="user-search" />
               <div className="flex justify-end basis-1/3 pl-2">
               <Menu menuButton={<MenuButton className="bg-white rounded-2xl p-2 mr-4 w-40 flex items-center justify-center text-sm">All Users <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                    <MenuRadioGroup onRadioChange={(e) => handleUserFilterChange(e.value)} value={usersFilter}>
                        <MenuItem className="hover:bg-purple" type="radio" value="all-users">All</MenuItem>
                        <MenuItem className="hover:bg-purple" type="radio" value="founding-users">Founding Members</MenuItem>
                        <MenuItem className="hover:bg-purple" type="radio" value="general-users">General Members</MenuItem>
                    </MenuRadioGroup>
                </Menu>
                <Menu value={statusFilter} menuButton={<MenuButton className="bg-white rounded-2xl p-2 w-40 flex items-center justify-center text-sm">All Status <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('all-members')} value="all-members">Members</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('waitlisted-members')} value="waitlisted-members">Waitlisted</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('expired-link')} value="expired-link">Expired Link</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('active-link')} value="active-link">Active Link</MenuItem>
                </Menu>
               </div>
            </section>
            <Outlet context={{
                remove: [showRemoveModal, setShowRemoveModal],
                block: [showBlockModal, setShowBlockModal]
            }} />
        </section>
    )
}

export default UsersView;