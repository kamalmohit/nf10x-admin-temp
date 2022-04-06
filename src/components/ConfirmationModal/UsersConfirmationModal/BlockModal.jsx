import React from 'react';
import Rodal from 'rodal';
import Button from 'globals/UIComponents/Button/Button';

const BlockModal = ({visible, setVisible}) => {
    const modalStyles = {
        borderRadius: '30px',
        width: '550px',
        height: '200px',
        padding: '20px',
        textAlign: 'center',
    }
    return (
        <Rodal customStyles={modalStyles} visible={visible} showCloseButton={true} closeMaskOnClick={false} onClose={() => setVisible(false)}>
            <h1 className="font-bold text-[30px]">Block Confirmation</h1>
            <p className="mt-2 mb-4 pl-20 pr-20">Are you sure you want to block the following person’s name from this list?</p>
            <div className="flex justify-center">
                <Button classes="basis-1/4 mr-8">Yes</Button>
                <Button onClick={() => setVisible(false)} classes="basis-1/4">No</Button>
            </div>
        </Rodal>
    )
}

export default BlockModal;