import React, {useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useFormik } from 'formik';
import { eventsMenuItems } from 'globals/eventsMenuItems';
import EmptyIcon from 'assets/Dashboard/empty-members.svg';
import Button from 'globals/UIComponents/Button/Button';
import PlusSign from 'assets/Dashboard/plus.svg';
const EventsForm = React.lazy(() => import('components/Forms/EventsForm'));
const Drawer = React.lazy(() => import('react-modern-drawer'));

const EventsView = () => {
    const formikContext = useFormik(EventsForm);
    const [isOpen, setOpen] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showHideModal, setShowHideModal] = useState(false);
    const toggleDrawer = () => {
        setOpen((prevState) => !prevState);
        formikContext.resetForm();
    }
    const data = [1,1,1];
    return (
        <section className="bg-section max-h-[calc(100vh_-_56px)] pl-12 pr-12 pt-8 pb-8">
            {data.length ? 
            <React.Fragment>
                <div className="flex justify-between border-[#E5DBEE] border-b-2 h-12">
                    <ul className="flex flex-row justify-start basis-3/5 text-grey text-xl">
                        {eventsMenuItems.map(({name,key}) => (
                            <NavLink key={key} className={({isActive}) => isActive ? "text-black border-black border-b-2 mr-6" : "hover:border-b-2 mr-6 hover: border-black ease-in-out duration-100"} to={`/home/events/${key}`}>
                                {name} <span className="ml-1 text-purple">10000</span>
                            </NavLink>
                        ))}
                    </ul>
                    <Button onClick={() => setOpen(true)} classes="mb-1 mt-2 w-60 text-md flex justify-center items-center">
                        <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                        <span>Create New Event</span>
                    </Button>  
                </div>
                </React.Fragment> :
                <React.Fragment>
                <img src={EmptyIcon} alt="Empty Events" />
                <h2 className="font-normal">There are no events scheduled</h2>
                <Button onClick={() => setOpen(true)} classes="mb-1 mt-2 w-60 text-md flex justify-center items-center">
                    <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                    <span>Create New Event</span>
                </Button> 
                </React.Fragment>}
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                size="450px"
                className="p-4 overflow-scroll"
            >
                <EventsForm formHeader="New Event" />
            </Drawer>
            <Outlet context={{
                remove: [showRemoveModal, setShowRemoveModal],
                hide: [showHideModal, setShowHideModal]
            }} />
        </section>
    )
}

export default EventsView;