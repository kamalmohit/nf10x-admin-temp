import React from 'react';
import {
    Menu,
    MenuItem,
} from '@szhsin/react-menu';
import NF10XTable from 'globals/UIComponents/NF10XTable/NF10XTable';
import MenuDots from 'assets/Dashboard/menu.svg';

const customMenuButton = (
    <button className="float-right bg-grey p-1 rounded-3xl opacity-50 hover:opacity-40 ease-in">
      <img className="w-4 h-4" src={MenuDots} alt="Menu" />
    </button>
)

const GroupBCohorts = () => {
    const activeusers = [
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
            title: '10X FOUNDER MEMBER',
            dataIndex: '10x',
            key: '10x',
            width: 200,
            className: "text-left p-4 font-normal",
            render: (value,record,key) => 
            <div className="relative">
              <span className="font-normal text-xs uppercase">{value}</span>
            </div>
          },
        {
          title: 'INVITED ON',
          dataIndex: 'invited',
          key: 'age',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="font-medium text-md">{value}</span>
        },
        {
          title: 'JOINED ON',
          dataIndex: 'joined',
          key: 'joined',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value,record,key) => 
          <div className="relative">
            <span className="font-normal text-xs uppercase">{value}</span> 
            <Menu align="end" menuButton={customMenuButton} transition>
              <MenuItem value="remove" className="text-black hover:bg-purple">Remove</MenuItem>
              <MenuItem value="block"  className="text-black hover:bg-purple">Block</MenuItem>
            </Menu>
          </div>
        },
      ]; 
      const data = [
        { user: {name: 'Mohit', email: 'mohitdsadsadsasdsdsds@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '2' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '3' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '4' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '5' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '6' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '7' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '8' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '9' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '10' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '11' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '12' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '13' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '14' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', '10x': 'Member', key: '15' },
      ]
    return (
        <div className="mt-4">
            <NF10XTable columns={activeusers} data={data} />
        </div>
    )
}

export default GroupBCohorts;