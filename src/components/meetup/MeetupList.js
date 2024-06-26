// MeetupList.jsx
import React from 'react';
import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.items.map((item) => (
                <MeetupItem
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    
                />
            ))}
        </ul>
    );
}

export default MeetupList;
