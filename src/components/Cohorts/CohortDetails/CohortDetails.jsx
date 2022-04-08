import React, {useState} from 'react';
import { Link, Outlet, NavLink, useParams, useNavigate } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuRadioGroup,
} from '@szhsin/react-menu';
import Button from 'globals/UIComponents/Button/Button';
import StartCohortPrompt from 'components/Cohorts/StartCohortPrompt/StartCohortPrompt';
import BackIcon from 'assets/Dashboard/back.svg';
import EmptyIcon from 'assets/Dashboard/empty-members.svg';
import DownwardCaret from 'assets/Dashboard/downward-caret.svg';
import Input from 'globals/UIComponents/SearchInput/SearchInput';
import { cohortsSubMenu } from 'globals/cohortsMenuItems';

const CohortDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [startCohort, setStartCohort] = useState(false);
    const [cohortFlag, setCohortFlag] = useState(false);

    const handleCloseCohort = () => {
        setCohortFlag(false);
        navigate(`/home/cohorts/${params.cohortId}`)
    }
    return (           
        <section className="bg-section min-h-[calc(100vh_-_56px)] pl-8 pr-8 pt-1 pb-1">
            <StartCohortPrompt visible={startCohort} setVisible={setStartCohort} setCohortFlag={setCohortFlag} />
            <Link className="flex items-center" to="/home/cohorts/all-cohorts">
                <img className="w-3 h-3 mr-2" src={BackIcon} alt="back-icon" />
                Back
            </Link>
            <div className="mt-4 flex justify-between items-center">
                <h2 className="font-bold text-3xl">Cohort Number 6</h2>
                {cohortFlag ? <Button onClick={handleCloseCohort} classes="basis-1/5">Close Cohort Now</Button>:<Button classes="basis-1/5">Edit Details</Button>}
            </div>
            {cohortFlag ?
            <div className="flex justify-start mt-2">
                <div className="flex flex-col mr-6"><span className="font-bold text-lg">22 July, 2022</span> <span className="font-medium text-sm opacity-50">Start Date</span></div>
                <div className="flex flex-col mr-6"><span className="font-bold text-lg">6000</span> <span className="font-medium text-sm opacity-50">Current Members</span></div>
                <div className="flex flex-col mr-6"><span className="font-bold text-lg">100</span> <span className="font-medium text-sm opacity-50">Number Of Tokens</span></div>
                <div className="flex flex-col mr-6"><span className="font-bold text-lg">22 Aug, 2022</span> <span className="font-medium text-sm opacity-50">End Date</span></div>
            </div> 
            :
            <div className="flex justify-start mt-2">
                <div className="flex flex-col mr-6"><span className="font-bold text-lg">2</span> <span className="font-medium text-sm opacity-50">Number of groups</span></div>
                <div className="flex flex-col mr-6"><span className="font-bold text-lg">100</span> <span className="font-medium text-sm opacity-50">Number of token</span></div>
            </div>
            }
            {!cohortFlag ? <article className="flex flex-col items-center pt-4">
                <img src={EmptyIcon} alt="Empty Events" />
                <h2 className="font-medium mt-2">This Cohort Has Not Started</h2>
                <Button onClick={() => setStartCohort(true)} classes="mt-3 w-60 text-md w-[200px]">
                    <span>Start Cohort</span>
                </Button> 
            </article> 
            :
            <>
                <ul className="flex basis-2/4 text-grey text-xl mt-8 mb-6">
                   {cohortsSubMenu.map(({name,key}) => (
                       <NavLink key={key} className={({isActive}) => isActive ? "font-medium flex flex-nowrap mr-6 max-w-xs w-fit self-end text-black border-black border-b-2 pb-1" : "flex max-w-xs mr-6 pb-1 w-fit self-end hover:border-b-2 hover: border-black ease-in-out duration-100"} to={`/home/cohorts/${params.cohortId}/${key}`}>
                           {name} <span className="ml-1 text-purple">600</span>
                       </NavLink>
                   ))}
                </ul>
                <section className="flex flex-row justify-between items-center">
                <Input type="text" placeholder="Search user" classes="basis-3/4" id="user-search" />
                <div className="flex justify-end basis-1/4 pl-2">
                <Menu menuClassName="filters-menu" align='end' menuButton={<MenuButton className="basis-1/2 bg-white border-2 rounded-3xl p-2 mr-4 flex items-center justify-center font-medium text-sm">All Candidates <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                    <MenuRadioGroup>
                        <MenuItem className="hover:bg-purple" type="radio" value="all-users">All</MenuItem>
                        <MenuItem className="hover:bg-purple" type="radio" value="founding-users">Founding Members</MenuItem>
                        <MenuItem className="hover:bg-purple" type="radio" value="general-users">General Members</MenuItem>
                    </MenuRadioGroup>
                </Menu>
                <Menu menuClassName="filters-menu" align='end' menuButton={<MenuButton className="basis-1/2 bg-white rounded-3xl p-2 flex items-center justify-center font-medium text-sm">All Status <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                        <MenuItem className="hover:bg-purple" type="checkbox" value="all-members">Members</MenuItem>
                        <MenuItem className="hover:bg-purple" type="checkbox" value="waitlisted-members">Waitlisted</MenuItem>
                        <MenuItem className="hover:bg-purple" type="checkbox" value="expired-link">Expired Link</MenuItem>
                        <MenuItem className="hover:bg-purple" type="checkbox" value="active-link">Active Link</MenuItem>
                </Menu>
                </div>
            </section>
            <Outlet />
            </>
            } 
        </section>
    )
}

export default CohortDetails;