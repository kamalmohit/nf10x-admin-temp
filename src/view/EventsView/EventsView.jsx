import React, {useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useFormik } from 'formik';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuRadioGroup,
} from '@szhsin/react-menu';
import { eventsMenuItems } from 'globals/eventsMenuItems';
import Button from 'globals/UIComponents/Button/Button';
import PlusSign from 'assets/Dashboard/plus.svg';
import DownwardCaret from 'assets/Dashboard/downward-caret.svg';
import Input from 'globals/UIComponents/SearchInput/SearchInput';
const EventsForm = React.lazy(() => import('components/Forms/EventsForm'));
const Drawer = React.lazy(() => import('react-modern-drawer'));

const EventsView = () => {
    const formikContext = useFormik(EventsForm);
    const [isOpen, setOpen] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showHideModal, setShowHideModal] = useState(false);
    const [usersFilter, setUsersFilter] = useState('all-users');
    const [statusFilter, setStatusFilter] = useState(['all-members']);
    const toggleDrawer = () => {
        setOpen((prevState) => !prevState);
        formikContext.resetForm();
    }
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
        <section className="bg-section max-h-[calc(100vh_-_56px)] pl-12 pr-12 pt-8 pb-8">
            <React.Fragment>
                <div className="flex justify-between border-[#E5DBEE] border-b-2 h-12">
                    <ul className="flex flex-row justify-start basis-3/5 text-grey text-xl">
                        {eventsMenuItems.map(({name,key}) => (
                            <NavLink key={key} className={({isActive}) => isActive ? "flex flex-nowrap font-medium mr-6 max-w-xs w-fit self-end text-black border-black border-b-2 pb-1" : "flex max-w-xs mr-6 pb-1 w-fit self-end hover:border-b-2 hover: border-black ease-in-out duration-100"} to={`/home/events/${key}`}>
                                {name} <span className="ml-1 text-purple">{key === 'upcoming' ? 100 : 0}</span>
                            </NavLink>
                        ))}
                    </ul>
                    <Button onClick={() => setOpen(true)} classes="mb-4 w-40 text-md flex justify-center items-center h-10">
                        <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                        <span>Create New Event</span>
                    </Button>  
                </div>
                </React.Fragment>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                size="450px"
                className="p-4 overflow-scroll"
            >
                <EventsForm formHeader="New Event" />
            </Drawer>
            <section className="flex flex-row justify-between items-center pt-2 pb-2">
              <Input type="text" placeholder="Search user" classes="basis-2/4" id="user-search" />
               <div className="flex basis-2/4 ml-2">
               <Menu align='end' menuClassName="filters-menu" menuButton={<MenuButton className="basis-1/4 self-stretch bg-white border-2 rounded-3xl p-2 mr-auto flex items-center justify-center font-medium text-sm">Sort By <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                    <MenuRadioGroup onRadioChange={(e) => handleUserFilterChange(e.value)} value={usersFilter}>
                        <MenuItem className="hover:bg-purple" type="radio" value="all-users">All</MenuItem>
                        <MenuItem className="hover:bg-purple" type="radio" value="founding-users">Founding Members</MenuItem>
                        <MenuItem className="hover:bg-purple" type="radio" value="general-users">General Members</MenuItem>
                    </MenuRadioGroup>
                </Menu>
                <Menu value={statusFilter} align='end' menuClassName="filters-menu" menuButton={<MenuButton className="basis-1/4 self-stretch bg-white border-2 rounded-3xl p-2 flex items-center justify-center font-medium text-sm">Scheduled On <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('all-members')} value="all-members">Members</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('waitlisted-members')} value="waitlisted-members">Waitlisted</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('expired-link')} value="expired-link">Expired Link</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('active-link')} value="active-link">Active Link</MenuItem>
                </Menu>
                <Menu value={statusFilter} align='end' menuClassName="filters-menu" menuButton={<MenuButton className="basis-1/4 self-stretch bg-white border-2 rounded-3xl p-2 flex items-center justify-center font-medium text-sm">Category <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('all-members')} value="all-members">Members</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('waitlisted-members')} value="waitlisted-members">Waitlisted</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('expired-link')} value="expired-link">Expired Link</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('active-link')} value="active-link">Active Link</MenuItem>
                </Menu>
                <Menu value={statusFilter} align='end' menuClassName="filters-menu" menuButton={<MenuButton className="basis-1/4 self-stretch bg-white border-2 rounded-3xl p-2 flex items-center justify-center font-medium text-sm">Accessibilities <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('all-members')} value="all-members">Members</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('waitlisted-members')} value="waitlisted-members">Waitlisted</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('expired-link')} value="expired-link">Expired Link</MenuItem>
                        <MenuItem onClick={(e) => handleStatusFilterChange(e.value)} className="hover:bg-purple" type="checkbox" checked={statusFilter.includes('active-link')} value="active-link">Active Link</MenuItem>
                </Menu>
               </div>
            </section>
            <Outlet context={{
                remove: [showRemoveModal, setShowRemoveModal],
                hide: [showHideModal, setShowHideModal]
            }} />
        </section>
    )
}

export default EventsView;