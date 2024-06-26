import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import MeetupList from "../components/meetup/MeetupList";

function Favorites (){
    const favoritesCtx =useContext(FavoritesContext);

    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>Got no favorites yet. Start adding!</p>;
    } else {
        content = <MeetupList  items={favoritesCtx.favorites} />;
    }
    
    return(
        <section>
        <h1>My Favorites</h1>
        {content}
        </section>
    );
}
export default Favorites;