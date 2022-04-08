import React from 'react';
import {
    Menu,
    MenuItem,
} from '@szhsin/react-menu';
import MentorImg from 'assets/mentoring.svg';
import World from 'assets/Dashboard/World.svg';
import Twitter from 'assets/Dashboard/Twitter.svg';
import MenuDots from 'assets/Dashboard/menu.svg';

const customMenuButton = (
    <button className="absolute right-0 top-0 bg-grey p-1 rounded-3xl opacity-50 hover:opacity-40 ease-in">
      <img className="w-4 h-4" src={MenuDots} alt="Menu" />
    </button>
)


const MentorCard = () => {
    return (
        <div className="rounded-sm bg-white h-fit w-fit">
            <img src={MentorImg} alt="" />
            <div className="p-4">
                <div className="relative">
                    <h3 className="font-bold text-md">Carla Korsgaard</h3>
                    <Menu align="end" menuButton={customMenuButton} transition>
                        <MenuItem value="edit" className="text-black hover:bg-purple">Edit</MenuItem>
                        <MenuItem value="delete" className="text-black hover:bg-purple">Delete</MenuItem>
                        <MenuItem value="hide" className="text-black hover:bg-purple">Hide</MenuItem>
                    </Menu>
                </div>
                <h4 className="font-medium opacity-70 text-sm">carla.korsgaard@gmail.com</h4>
                <p className="mt-4 font-medium text-sm opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, dictum adipiscing sed eu nibh laoreet.</p>
            </div>
            <div className="flex justify-end p-4">
                <a href="#">
                    <img className='mr-4' src={World} alt="" />
                </a>
                <a href="#">
                    <img src={Twitter} alt="" />
                </a>
            </div>
        </div>
    )
}

export default MentorCard;