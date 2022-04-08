import React from 'react';
import Rodal from 'rodal';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'globals/UIComponents/Button/Button';

const StartCohortPrompt = ({visible, setVisible, setCohortFlag}) => {
    const navigate = useNavigate();
    const params = useParams();
    const modalStyles = {
        borderRadius: '30px',
        width: '450px',
        height: 'fit-content',
        textAlign: 'center'
    }
    const startCohortHandler = () => {
        setCohortFlag(true);
        setVisible(false);
        navigate(`/home/cohorts/${params.cohortId}/invited`);
    }
    return (
        <Rodal customStyles={modalStyles} visible={visible} showCloseButton={true} closeMaskOnClick={false} onClose={() => setVisible(false)}>
            <div className="flex flex-col justify-center items-center">
`               <h1 className="font-bold text-3xl mb-3">Start Cohort</h1>
                <p className="pl-10 pr-10">100 invitations will be sent once this cohort is started. To start this cohort, please set its end date. </p>
                <input className="mt-3" type="date" name="" id="" />
                <Button onClick={startCohortHandler} classes="mt-3 w-40">Start</Button>`
            </div>
        </Rodal>
    )
}

export default StartCohortPrompt;