import React from 'react';
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <div>
                <h3>{props.title}</h3>
                <img className={classes.image} src={props.image} alt={props.title} />
                <p className={classes.content}>{props.description}</p>
            </div>
            <div className={classes.actions}> <button>To Favorites</button></div>
           
        </li>
      
    );
}

export default MeetupItem;