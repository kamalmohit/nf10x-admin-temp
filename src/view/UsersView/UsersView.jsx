import React, {useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuRadioGroup,
  } from '@szhsin/react-menu';
import {usersViewMenu} from 'globals/usersViewMenuItems';
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
            <div className="w-full flex flex-row justify-between border-[#E5DBEE] border-b-2 h-12">
                <ul className="flex basis-2/4 text-grey text-xl">
                   {usersViewMenu.map(({name,key}) => (
                       <NavLink key={key} className={({isActive}) => isActive ? "font-medium flex flex-nowrap mr-6 max-w-xs w-fit self-end text-black border-black border-b-2 pb-1" : "flex max-w-xs mr-6 pb-1 w-fit self-end hover:border-b-2 hover: border-black ease-in-out duration-100"} to={`/home/users/${key}`}>
                           {name} <span className="ml-1 text-purple">600</span>
                       </NavLink>
                   ))}
                </ul>
                <Button classes="mb-4 w-40 text-md flex justify-center items-center h-10">
                    <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                    <span>Add New Member</span>
                </Button>
            </div>
            <section className="flex flex-row justify-between items-center pt-4 pb-4">
               <Input type="text" placeholder="Search user" classes="basis-4/5" id="user-search" />
               <div className="flex justify-end basis-1/5 pl-2">
               <Menu menuClassName="filters-menu" align='end' menuButton={<MenuButton className="basis-1/2 bg-white border-2 rounded-3xl p-2 mr-4 flex items-center justify-center font-medium text-sm">All Users <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                    <MenuRadioGroup onRadioChange={(e) => handleUserFilterChange(e.value)} value={usersFilter}>
                        <MenuItem className="hover:bg-purple" type="radio" value="all-users">All</MenuItem>
                        <MenuItem className="hover:bg-purple" type="radio" value="founding-users">Founding Members</MenuItem>
                        <MenuItem className="hover:bg-purple" type="radio" value="general-users">General Members</MenuItem>
                    </MenuRadioGroup>
                </Menu>
                <Menu menuClassName="filters-menu" align='end' value={statusFilter} menuButton={<MenuButton className="basis-1/2 bg-white rounded-3xl p-2 flex items-center justify-center font-medium text-sm">All Status <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
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