import React from 'react';
import Rodal from 'rodal';
import Button from 'globals/UIComponents/Button/Button';

const DeleteModal = ({visible, setVisible}) => {
    const modalStyles = {
        borderRadius: '20px',
        width: '490px',
        height: '220px',
        padding: '30px',
        textAlign: 'center',
    }
    return (
        <Rodal customStyles={modalStyles} visible={visible} showCloseButton={true} closeMaskOnClick={false} onClose={() => setVisible(false)}>
            <h1 className="font-bold text-[30px]">Remove Confirmation</h1>
            <p className="mt-4 mb-4">Are you sure you want to delete this event?</p>
            <div className="flex justify-center">
                <Button classes="w-20 mr-8">Yes</Button>
                <Button onClick={() => setVisible(false)} classes="w-20">No</Button>
            </div>
        </Rodal>
    )
}

export default DeleteModal;