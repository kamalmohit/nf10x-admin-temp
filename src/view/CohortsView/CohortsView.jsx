import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Button from 'globals/UIComponents/Button/Button';
import { cohortsMenu } from 'globals/cohortsMenuItems';
import PlusSign from 'assets/Dashboard/add.svg';
import DownwardCaret from 'assets/Dashboard/downward-caret.svg';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuRadioGroup,
} from '@szhsin/react-menu';

const CohortsView = () => {
    const location = useLocation();
    return (
        <section className="bg-section max-h-[calc(100vh_-_56px)] pl-12 pr-12 pt-8 pb-8">
            {location.pathname.includes("/all-cohorts") ? <div className="flex justify-start border-[#E5DBEE] border-b-2 h-11">
                    <ul className="flex flex-row justify-start basis-2/3 text-grey text-xl">
                        {cohortsMenu.map(({name,key}) => (
                            <NavLink key={key} className={({isActive}) => isActive ? "flex flex-nowrap font-medium mr-6 max-w-xs w-fit self-end text-black border-black border-b-2 pb-1" : "flex max-w-xs mr-6 pb-1 w-fit self-end hover:border-b-2 hover: border-black ease-in-out duration-100"} to={`/home/cohorts/${key}`}>
                                {name} <span className="ml-1 text-purple">{key === 'upcoming' ? 200 : 0}</span>
                            </NavLink>
                        ))}
                    </ul>
                    <div className="flex justify-end basis-1/3">
                        <Menu align='end' menuClassName="filters-menu" menuButton={<MenuButton className="basis-1/4 bg-white border-2 rounded-3xl p-1 flex items-center justify-center font-medium text-md">Status<img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                            <MenuRadioGroup onRadioChange={(e) => false} value={''}>
                                <MenuItem className="hover:bg-purple" type="radio" value="all-users">All</MenuItem>
                                <MenuItem className="hover:bg-purple" type="radio" value="founding-users">Founding Members</MenuItem>
                                <MenuItem className="hover:bg-purple" type="radio" value="general-users">General Members</MenuItem>
                            </MenuRadioGroup>
                        </Menu>  
                        <Button classes="ml-2 basis-2/4 text-md flex justify-center items-center h-10">
                            <img className="mr-1 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                            <span>Create New Cohort</span>
                        </Button>
                    </div>  
            </div> : null}
                <Outlet />
        </section>
    )
}

export default CohortsView;