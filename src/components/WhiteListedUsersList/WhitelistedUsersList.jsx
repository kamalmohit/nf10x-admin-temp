import React, {useState} from 'react';
import Input from 'globals/UIComponents/Input/Input';
import { CSVUploadModal } from 'globals/UIComponents/Modal';
import CSVUploader from 'components/CSVUploader/CSVUploader';
import EmptyMembers from 'assets/Dashboard/empty-members.svg';

const WhitelistedUsersList = () => {
    const [csvUploadModal, setCSVUploadModal] = useState(false);
    const [csvFile, setCSVFile] = useState(null);
    const csvFileUploadHandler = (file) => {
        setCSVFile(file);
        setCSVUploadModal(true);
    }
    return (
        <main>
        <section className="flex flex-row justify-between items-center pt-4 pb-4">
               <Input type="text" placeholder="Search user" classes="basis-3/4" id="user-search" />
               <div className="flex justify-between basis-1/4 pl-8">
                   <select className="rounded-2xl p-2 text-sm" name="allUsers" id="all-users">
                        <option value="">All Users</option>
                        <option value="">Few Users</option>
                        <option value="">No Users</option>
                   </select>
                   <select className="rounded-2xl p-2 text-sm" name="allStatus" id="all-status">
                        <option value="">All Status</option>
                        <option value="">Few Status</option>
                        <option value="">No Status</option>
                    </select>
               </div>
        </section>
        <section className="flex flex-col justify-center items-center h-full">
                    <img src={EmptyMembers} alt="Empty members" />
                    <h4 className="mt-2 font-bold text-md">NO MEMBERS FOUND</h4>
                    <p className="text-md">Please add members or upload CSV to bulk upload members</p>
                    <CSVUploader onFileUpload={csvFileUploadHandler} />
        </section>
        <CSVUploadModal visible={csvUploadModal} setVisible={setCSVUploadModal} file={csvFile} />
        </main>
    )
};

export default WhitelistedUsersList;