import React from 'react';
import { useOutletContext } from "react-router-dom";
import {
    Menu,
    MenuItem,
} from '@szhsin/react-menu';
import NF10XTable from 'globals/UIComponents/NF10XTable/NF10XTable';
import {DeleteModal, BlockModal} from 'components/ConfirmationModal';
import Button from 'globals/UIComponents/Button/Button';
import MenuDots from 'assets/Dashboard/menu.svg';
import PlusSign from 'assets/Dashboard/plus.svg';
import EmptyIcon from 'assets/Dashboard/empty-members.svg';

const customMenuButton = (
    <button className="float-right bg-grey p-1 rounded-3xl opacity-50 hover:opacity-40 ease-in">
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
          title: 'NAME',
          dataIndex: 'user',
          key: 'user',
          className: "text-left p-4 font-normal w-10",
          render: (value) => (
          <div className="flex flex-col line-clamp-2 max-w-[150px]">
            <span className="font-bold text-md mb-1 text-ellipsis overflow-hidden">{value}</span>
          </div>
          )
        },
        {
          title: 'EVENT TYPE',
          dataIndex: 'token',
          key: 'token',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="uppercase font-normal text-xs text-purple">{value}</span>
        },
        {
          title: 'EVENT DATE',
          dataIndex: 'invited',
          key: 'age',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="font-medium text-sm">{value}</span>
        },
        {
          title: 'EVENT TIME',
          dataIndex: 'joined',
          key: 'address',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="font-medium text-sm">{value}</span>
        },
        {
          title: 'SPEAKER',
          dataIndex: 'joined',
          key: 'address',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="font-normal text-sm">{value}</span>
        },
        {
          title: 'ACCESSIBILITY',
          dataIndex: '10x',
          key: '10x',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value, record, key) => 
          <div className="relative">
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
        { user: 'Web 3.0 seminar dsadj dsajldnsdsadsa dsad sad ad salkdn dkslads dsad dasdknkd sad;ksadmsad sdksadasmdlkdnsakdnsladnslkdnsaldnlsakdnlksadnldsa s dsad sad sa ds dsad saksadnlksandlksandlksandlksndlksanlkdnas' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'The Nature of Exclusivity in Crypto & Web 3 The Nature of Exclusivity in Crypto & Web 3' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar dsaljdnsald dljsandlksan' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Project Debriefs', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
        { user: 'Web 3.0 seminar' , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', '10x': 'Member', cohort: {number: 4, group: 'A'}, key: '1' },
      ]
    return (
        <div className="mt-4">
            {data.length ? <NF10XTable columns={activeusers} data={data} /> :               
            <section className="flex flex-col items-center pt-10">
                <img src={EmptyIcon} alt="Empty Events" />
                <h2 className="font-normal">There are no events scheduled</h2>
                <Button classes="mb-1 mt-2 w-60 text-md flex justify-center items-center">
                    <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                    <span>Create New Event</span>
                </Button> 
              </section>}
            <DeleteModal visible={remove[0]} setVisible={remove[1]} />
            <BlockModal visible={hide[0]} setVisible={hide[1]} />
        </div>
    )
}

export default UpcomingEvents;