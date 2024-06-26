import { Link } from "react-router-dom";
import classes  from  './MainNavigation.module.css';


function MainNavigation ()
{

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React meetups </div>
            <nav >
                <ul>
                    <li> 
                       <Link to="/">ALL meetups  </Link>
                     
                       <Link to="/fav-meetup">  ALL fav-meetup   </Link>
                     
                       <Link to="/new-meetup"> ALL new-meetup   </Link>
                    
                       <Link to= "https://www.linkedin.com/in/alsaead-aziz-b19965249" target="_blank" rel="noopener noreferrer">   MY LinkedIN </Link> 
                    </li>
                </ul>
            </nav>

        </header>
    );
}
export default MainNavigation;