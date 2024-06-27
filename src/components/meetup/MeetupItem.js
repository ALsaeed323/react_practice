import {React,useContext} from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css'
import { FavoritesContext } from '../../store/favorites-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite=favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }else {
            favoritesCtx.addFavorite(
                {
                    title: props.title,
                    description: props.description,
                    image: props.image,
                    address: props.address
                }
            );
        }

    }
    
    return (
        <li className={classes.item}>
            <Card>
            <div>
                <h3>{props.title}</h3>
                <img className={classes.image} src={props.image} alt={props.title} />
                <p className={classes.content}>{props.description}</p>
            </div>
            <div className={classes.actions}> <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ?'Remove from Favorites': 'To Favorites'}</button></div>
            </Card>
        </li>
      
    );
}

export default MeetupItem;