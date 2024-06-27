import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetup() {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');

    function addMeetupHandler(meetupData) {
        fetch('https://react-5053d-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            setSuccessMessage('Data Saved Successfully');
            console.log(response);
            navigate('/', { replace: true });
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
            {successMessage && <p>{successMessage}</p>}
        </section>
    );
}

export default NewMeetup;
