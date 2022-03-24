import React from 'react';

import Rodal from 'rodal';
const CSVUploadModal = ({visible, setVisible, file}) => {
    const modalStyles = {
        borderRadius: '20px',
        width: '590px',
        height: '250px',
        padding: '30px'
    }
    return (
        <Rodal customStyles={modalStyles} visible={visible} showCloseButton={true} closeMaskOnClick={false} onClose={() => setVisible(false)}>
            <h1 className="text-[30px]">Uploading CSV</h1>
            <div className="flex justify-between items-center mt-6">
                <h2 className="text-[14px] basis-2/3">Uploading {file ? file.name : null}</h2>
                <button className="basis-1/3 text-right text-[#DB3232]">Cancel</button>
            </div>
            <div className="mt-4 border-dashed border-2 p-2">
                <progress></progress>
            </div>
        </Rodal>
    )
}

export default CSVUploadModal;