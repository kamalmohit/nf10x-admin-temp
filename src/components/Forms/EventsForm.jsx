import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input, FileUpload, LongText, DateSelector, TimeSelector } from 'globals/UIComponents/FormComponents';
import Button from 'globals/UIComponents/Button/Button';

const EventsForm = (props) => {
    const initialValues = {
        eventTitle: "",
        eventImage: "",
        eventDesc: "",
        eventDate: "",
        eventTime: "",
        eventType: "",
        speakerImage: "",
        speakerName: "",
        speakerDesc: "",
        speakerSocialMedia: "",
        eventAsc: "",
        eventLink: ""
    }
    return (
        <React.Fragment>
            {props.formHeader ? <h2 className="font-bold text-4xl mb-8">{props.formHeader}</h2> : null}
            <h3 className="font-medium text-xl mb-2">Event Details</h3>
            <Formik initialValues={initialValues}>
                {(formProps) => (
                    <Form>
                        <Field type="text" component={Input} name="eventTitle" placeholder="Title" />
                        <ErrorMessage name="eventTitle" />
                        <Field type="file" component={FileUpload} name="eventImage" placeholder="Drag image from your computer.Supports: JPG, PNG | 6:4 ratio" />
                        <ErrorMessage name="eventImage" />

                        <Field type="text" component={LongText} rows="30" cols="30" name="eventDesc" placeholder="Add Event Description" />
                        <ErrorMessage name="eventDesc" />

                        <div className="flex mt-2">
                            <div className="basis-1/2 bg-form p-2 flex justify-center items-center">
                                <Field type="date" component={DateSelector} name="eventDate" placeholder="Date" />
                                <ErrorMessage name="eventDate" />
                            </div>
                            <div className="basis-1/2 bg-form ml-2 p-2 flex justify-center items-center">
                                <Field type="time" component={TimeSelector} name="eventTime" placeholder="Time" />
                                <ErrorMessage name="eventTime" />
                            </div>
                        </div>

                        <Field type="text" component={Input} name="eventDuration" placeholder="Duration of the event" />
                        <ErrorMessage name="eventDuration" />

                        <Field type="text" component={Input} name="host" placeholder="Hosted By" />
                        <ErrorMessage name="host" />

                        <Field type="text" component={Input} name="eventType" placeholder="Event Type" />
                        <ErrorMessage name="eventType" />

                    <h3 className="font-medium text-xl mb-4 mt-6">Speaker Details</h3>

                        
                        <Field type="file" component={FileUpload} name="speakerImage" placeholder="Drag image from your computer.Supports: JPG, PNG | 6:4 ratio" />
                        <ErrorMessage name="speakerImage" />

                        <Field type="text" component={Input} name="speakerName" placeholder="Name" />
                        <ErrorMessage name="speakerName" />

                        <Field type="text" component={LongText} rows="30" cols="30" name="speakerDesc" placeholder="Add Speaker Description" />
                        <ErrorMessage name="speakerDesc" />

                        <Field type="text" component={Input} name="speakerSocialMedia" placeholder="Social Media Link" />
                        <ErrorMessage name="speakerSocialMedia" />

                    <h3 className="font-medium text-xl mb-4 mt-6">Event Accessibility</h3>

                        <Field type="text" component={Input} name="eventAsc" placeholder="Hosted By" />
                        <ErrorMessage name="eventAsc" />
                    
                    <h3 className="font-medium text-xl mb-4 mt-6">Hosted On</h3>


                        <Field type="text" component={Input} name="eventLink" placeholder="Event Link" />
                        <ErrorMessage name="eventLink" />
                        <Button type="submit" classes="w-full rounded-2xl mt-2">Continue</Button>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default EventsForm;