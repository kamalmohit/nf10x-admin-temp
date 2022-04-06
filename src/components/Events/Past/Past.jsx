
import React from 'react';
import {
Menu,
MenuItem
} from '@szhsin/react-menu';
import { useOutletContext } from "react-router-dom";
import NF10XTable from 'globals/UIComponents/NF10XTable/NF10XTable';
import {DeleteModal, BlockModal} from 'components/ConfirmationModal';
import MenuDots from 'assets/Dashboard/menu.svg';
import EmptyIcon from 'assets/Dashboard/empty-members.svg';

const customMenuButton = (
    <button className="bg-grey p-1 rounded-3xl opacity-50 hover:opacity-40 ease-in">
    <img className="w-4 h-4" src={MenuDots} alt="Menu" />
    </button>
)
const PastEvents = () => {
    const {remove, hide} = useOutletContext();
    const handleRemoveConfirmationModal = (value, record, key) => {
        remove[1](true);
    }
    const handleBlockConfirmationModal = (value, record, key) => {
        hide[1](true);
    }
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
    ]
    return (
        <div className="mt-4">
            {data.length ? <NF10XTable columns={activeusers} data={data} /> :               
            <section className="flex flex-col items-center pt-10">
                <img src={EmptyIcon} alt="Empty Events" />
                <h2 className="font-normal">There are no past events</h2>
            </section >}
            <DeleteModal visible={remove[0]} setVisible={remove[1]} />
            <BlockModal visible={hide[0]} setVisible={hide[1]} />
        </div>
    )
}

export default PastEvents;