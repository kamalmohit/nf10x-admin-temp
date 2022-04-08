import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuRadioGroup,
  } from '@szhsin/react-menu';
import Input from 'globals/UIComponents/SearchInput/SearchInput';
import MentorCard from 'components/Mentors/MentorCard/MentorCard';
import DownwardCaret from 'assets/Dashboard/downward-caret.svg';
import Button from 'globals/UIComponents/Button/Button';
// import EmptyComponent from 'components/EmptyComponent/EmptyComponent';
import PlusSign from 'assets/Dashboard/plus.svg';


const MentorsView = () => {
    return (
        <section className="pl-12 pr-12 pt-8 pb-8 max-h-[calc(100vh_-_56px)]">
            <section className="flex flex-row justify-between items-center pt-4 pb-4">
                <Input type="text" placeholder="Search user" classes="basis-3/4" id="user-search" />
                <div className="flex justify-end items-center basis-1/4 pl-2">
                    <Menu menuClassName="filters-menu" align='end' menuButton={<MenuButton className="basis-2/3 bg-white border-2 rounded-3xl p-2 mr-4 flex items-center justify-center font-medium text-sm">Sort By <img className="ml-2" src={DownwardCaret} alt="downward" /></MenuButton>}>
                            <MenuRadioGroup>
                                <MenuItem className="hover:bg-purple" type="radio" value="all-users">All</MenuItem>
                                <MenuItem className="hover:bg-purple" type="radio" value="founding-users">Founding Members</MenuItem>
                                <MenuItem className="hover:bg-purple" type="radio" value="general-users">General Members</MenuItem>
                            </MenuRadioGroup>
                    </Menu>
                    <Button classes="basis-2/3 text-md flex justify-center items-center h-10">
                        <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                        <span>Add Mentor</span>
                    </Button>
                </div>
            </section>
            <section className="grid grid-cols-4 gap-5">
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
            </section>
            {/* <EmptyComponent subText="There are no mentors listed" btnText="Add New Mentor" /> */}
        </section>
    )
}

export default MentorsView;