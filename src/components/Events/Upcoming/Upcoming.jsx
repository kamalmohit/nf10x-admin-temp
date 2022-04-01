import React from 'react';
import {
    Menu,
    MenuItem
  } from '@szhsin/react-menu';
import { useOutletContext } from "react-router-dom";
import NF10XTable from 'globals/UIComponents/NF10XTable/NF10XTable';
import {DeleteModal, BlockModal} from 'components/ConfirmationModal';
import MenuDots from 'assets/Dashboard/menu.svg';

const customMenuButton = (
    <button className="bg-grey p-1 rounded-3xl opacity-50 hover:opacity-40 ease-in">
      <img className="w-4 h-4" src={MenuDots} alt="Menu" />
    </button>
)
const UpcomingEvents = () => {
    const {remove, hide} = useOutletContext();
    const handleRemoveConfirmationModal = (value, record, key) => {
        remove[1](true);
      }
      const handleBlockConfirmationModal = (value, record, key) => {
        hide[1](true);
      }
    
    const activeusers = [
        {
          title: 'Name/Email',
          dataIndex: 'user',
          key: 'user',
          width: 300,
          className: "text-left p-4 font-normal",
          render: (value) => (
          <div className="flex flex-col">
            <span className="font-bold text-sm">{value.email}</span>
            <span className="font-medium text-xs">{value.name}</span>
          </div>
          )
        },
        {
          title: 'Token Type',
          dataIndex: 'token',
          key: 'token',
          width: 150,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="font-bold text-xs bg-purple p-2">{value}</span>
        },
        {
          title: 'Invited On',
          dataIndex: 'invited',
          key: 'age',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="font-bold text-sm">{value}</span>
        },
        {
          title: 'Joined On',
          dataIndex: 'joined',
          key: 'address',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="font-bold text-sm">{value}</span>
        },
        {
          title: 'Cohort',
          dataIndex: 'cohort',
          key: 'cohort',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value) => (
          <div className="flex flex-col">
            <span className="font-bold text-sm">COHORT {value.number}</span>
            <span className="font-medium text-xs">GROUP {value.group}</span>
          </div>
          )
        },
        {
          title: '10x Member',
          dataIndex: '10x',
          key: '10x',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value, record, key) => 
          <div className="flex justify-between items-center relative">
            <span className="font-normal text-xs uppercase">{value}</span> 
            <Menu align="end" menuButton={customMenuButton} transition>
              <MenuItem value="edit" onClick={() => handleRemoveConfirmationModal(value,record,key)} className="text-black hover:bg-purple">Edit</MenuItem>
              <MenuItem value="delete" onClick={() => handleRemoveConfirmationModal(value,record,key)} className="text-black hover:bg-purple">Delete</MenuItem>
              <MenuItem value="hide" onClick={() => handleBlockConfirmationModal(value, record, key)}  className="text-black hover:bg-purple">Hide</MenuItem>
            </Menu>
          </div>
        },
      ];

      
      const data = [
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
      ]
    return (
        <div className="mt-4">
            <NF10XTable columns={activeusers} data={data} />
            <DeleteModal visible={remove[0]} setVisible={remove[1]} />
            <BlockModal visible={hide[0]} setVisible={hide[1]} />
        </div>
    )
}

export default UpcomingEvents;