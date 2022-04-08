import React from 'react';
import PlusSign from 'assets/Dashboard/plus.svg';
import EmptyIcon from 'assets/Dashboard/empty-members.svg';
import Button from 'globals/UIComponents/Button/Button';


const EmptyComponent = ({subText, btnText}) => {
    return (
        <section className="flex flex-col items-center pt-10">
            <img src={EmptyIcon} alt="Empty Events" />
            <h2 className="font-normal">{subText}</h2>
            <Button classes="mb-1 mt-2 w-40 text-md flex justify-center items-center">
                <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                <span>{btnText}</span>
            </Button> 
      </section>
    )
}

export default EmptyComponent;