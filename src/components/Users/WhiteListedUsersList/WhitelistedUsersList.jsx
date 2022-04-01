import React, {useState} from 'react';
import {
  Menu,
  MenuItem
} from '@szhsin/react-menu';
import { useOutletContext } from "react-router-dom";
import MenuDots from 'assets/Dashboard/menu.svg';
import { CSVUploadModal } from 'globals/UIComponents/Modal';
import CSVUploader from 'components/CSVUploader/CSVUploader';
import EmptyMembers from 'assets/Dashboard/empty-members.svg';
import NF10XTable from 'globals/UIComponents/NF10XTable/NF10XTable';
import {RemoveModal, BlockModal} from 'components/ConfirmationModal';

const customMenuButton = (
  <button className="bg-grey p-1 rounded-3xl opacity-50 hover:opacity-40 ease-in">
    <img className="w-4 h-4" src={MenuDots} alt="Menu" />
  </button>
)

const WhitelistedUsersList = () => {
    const [csvUploadModal, setCSVUploadModal] = useState(false);
    const [csvFile, setCSVFile] = useState(null);
    const {remove, block} = useOutletContext();
    const csvFileUploadHandler = (file) => {
        setCSVFile(file);
        setCSVUploadModal(true);
    }
    const handleRemoveConfirmationModal = (value, record, key) => {
      remove[1](true);
    }
    const handleBlockConfirmationModal = (value, record, key) => {
      block[1](true);
    }
    const whiteListedUsers = [
      {
        title: 'Name/Email',
        dataIndex: 'user',
        key: 'user',
        width: 300,
        className: "text-left p-4 font-normal",
        render: (value) => (
        <div className="flex flex-col">
          <span className="font-bold text-md">{value.email}</span>
          <span className="font-medium text-sm">{value.name}</span>
        </div>
        )
      },
      {
        title: 'Invited On',
        dataIndex: 'invited',
        key: 'age',
        width: 250,
        className: "text-left p-4 font-normal",
        render: (value) => <span className="font-bold text-md">{value}</span>
      },
      {
        title: 'Joined On',
        dataIndex: 'joined',
        key: 'address',
        width: 250,
        className: "text-left p-4 font-normal",
        render: (value) => <span className="font-bold text-md">{value}</span>
      },
      {
        title: 'Token Type',
        dataIndex: 'token',
        key: 'token',
        width: 150,
        className: "text-left p-4 font-normal",
        render: (value) => <span className="font-bold text-sm bg-purple p-2">{value}</span>
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 250,
        className: "text-left p-4 font-normal",
        render: (value,record,key) => 
        <div className="flex justify-between items-center relative">
          <span className="font-normal text-sm uppercase">{value}</span> 
          <Menu align="end" menuButton={customMenuButton} transition>
            <MenuItem value="remove" onClick={() => handleRemoveConfirmationModal(value,record,key)} className="text-black hover:bg-purple">Remove</MenuItem>
            <MenuItem value="block" onClick={() => handleBlockConfirmationModal(value, record, key)}  className="text-black hover:bg-purple">Block</MenuItem>
          </Menu>
        </div>
      },
    ]; 
      const data = [
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '1' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '2' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '3' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '4' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '5' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '6' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '7' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '8' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '9' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '10' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '11' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '12' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '13' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '14' },
        { user: {name: 'Mohit', email: 'mohit@gmail.com'} , invited: '22 July, 2021 • 5d ago', joined: '22 July, 2021 • 5d ago', token: 'Founder', status: 'Member', key: '15' },
      ]
      
    return (
        <main className='h-full'>
        <section className={`flex flex-col items-center`}>
                    {!data.length ?
                    <React.Fragment>
                        <img src={EmptyMembers} alt="Empty members" />
                        <h4 className="mt-2 font-bold text-md">NO MEMBERS FOUND</h4>
                        <p className="text-md">Please add members or upload CSV to bulk upload members</p>
                        <CSVUploader onFileUpload={csvFileUploadHandler} />
                        <a href="assets/sample_csv.txt" download className="mt-2 flex items-center text-[#0038FF] underline decoration-[#0038FF]">Download Sample CSV</a>
                    </React.Fragment> 
                     : <NF10XTable columns={whiteListedUsers} data={data} />} 
        </section>
        <CSVUploadModal visible={csvUploadModal} setVisible={setCSVUploadModal} file={csvFile} />
        <RemoveModal visible={remove[0]} setVisible={remove[1]} />
        <BlockModal visible={block[0]} setVisible={block[1]} />
        </main>
    )
};

export default WhitelistedUsersList;