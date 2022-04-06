import React from 'react';
import {
  Menu,
  MenuItem
} from '@szhsin/react-menu';
import { useOutletContext } from "react-router-dom";
import MenuDots from 'assets/Dashboard/menu.svg';
import EmptyMembers from 'assets/Dashboard/empty-members.svg';
import NF10XTable from 'globals/UIComponents/NF10XTable/NF10XTable';
import {RemoveModal, BlockModal} from 'components/ConfirmationModal';

const customMenuButton = (
  <button className="float-right bg-grey p-1 rounded-3xl opacity-50 hover:opacity-40 ease-in">
    <img className="w-4 h-4" src={MenuDots} alt="Menu" />
  </button>
)

const WaitlistedUsersList = () => {
    const {remove, block} = useOutletContext();
    const handleRemoveConfirmationModal = (value, record, key) => {
      remove[1](true);
    }
    const handleBlockConfirmationModal = (value, record, key) => {
      block[1](true);
    }
    const waitlistedUsers = [
      {
        title: 'NAME/EMAIL',
        dataIndex: 'user',
        key: 'user',
        width: 200,
        className: "text-left p-4 font-normal",
        render: (value) => (
        <div className="flex flex-col">
          <span className="font-bold text-sm mb-1">{value.email}</span>
          <span className="font-medium text-xs text-lightGrey">{value.name}</span>
        </div>
        )
      },
      {
        title: '10X FACTORY MEMBER',
        dataIndex: '10x',
        key: '10x',
        width: 200,
        className: "text-left p-4 font-normal",
        render: (value) => <span className="font-medium text-md">{value}</span>
      },
      {
        title: 'JOINED WAITLISTED ON',
        dataIndex: 'joined',
        key: 'address',
        width: 200,
        className: "text-left p-4 font-normal",
        render: (value) => <span className="font-medium text-md">{value}</span>
      },
      {
        title: 'LINK STATUS',
        dataIndex: 'link',
        key: 'link',
        width: 150,
        className: "text-left p-4 font-normal",
        render: (value) => <span className={`${value === 'Active' ? 'text-active font-normal text-xs uppercase' : 'text-expired opacity-60 font-normal text-xs uppercase'}`}>{value}</span>
      },
      {
        title: 'LINK EXPIRATION',
        dataIndex: 'linkex',
        key: 'linkex',
        width: 250,
        className: "text-left p-4 font-normal",
        render: (value, record, key) => 
        <div className="relative">
          <span className="font-normal text-xs uppercase">{value}</span> 
          <Menu align="end" menuButton={customMenuButton} transition>
          <MenuItem value="remove" onClick={() => handleRemoveConfirmationModal(value,record,key)} className="text-black hover:bg-purple">Remove</MenuItem>
            <MenuItem value="block" onClick={() => handleBlockConfirmationModal(value, record, key)}  className="text-black hover:bg-purple">Block</MenuItem>
          </Menu>
        </div>
      },
    ];
    
      const data = [
        { user: {name: 'Mohit Kamal', email: 'mohitdsadsadsadsadsa@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Active', linkex: 'Expires in 13 h', key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Active', linkex: 'Expires in 13 h', key: '2' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Active', linkex: 'Expires in 13 h', key: '3' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Active', linkex: 'Expires in 13 h', key: '4' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Active', linkex: 'Expires in 13 h', key: '5' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Active', linkex: 'Expires in 13 h', key: '6' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Active', linkex: 'Expires in 13 h', key: '7' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Expired', linkex: 'Expires in 13 h', key: '8' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Expired', linkex: 'Expired 11 h ago', key: '9' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Expired', linkex: 'Expired 11 h ago', key: '9' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Expired', linkex: 'Expired 11 h ago', key: '9' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Expired', linkex: 'Expired 11 h ago', key: '9' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Founder', linkex: 'Expires in 13 h', key: '9' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Founder', linkex: 'Expires in 13 h', key: '9' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , '10x': '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', link: 'Founder', linkex: 'Expires in 13 h', key: '9' },
      ]
      
    return (
        <main className='h-full'>
        <section className={`flex flex-col items-center`}>
                    {!data.length ?
                     <section className="pt-6 flex flex-col items-center">
                        <img src={EmptyMembers} alt="Empty members" />
                        <h4 className="mt-2 font-bold text-md">NO MEMBERS FOUND</h4>
                        <p className="text-md">Please add members or upload CSV to bulk upload members</p>
                    </section> 
                     : <NF10XTable columns={waitlistedUsers} data={data} />} 
        </section>
        <RemoveModal visible={remove[0]} setVisible={remove[1]} />
        <BlockModal visible={block[0]} setVisible={block[1]} />
        </main>
    )
};

export default WaitlistedUsersList;