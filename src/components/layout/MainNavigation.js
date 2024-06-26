import { Link } from "react-router-dom";

function MainNavigation ()
{

    return (
        <header>
            <div>React meetups </div>
            <nav>
                <ul>
                    <li>
                       <Link to="/">ALL meetups</Link>
                      <br/>
                       <Link to="/fav-meetup">ALL fav-meetup</Link>
                       <br/>
                       <Link to="/new-meetup">ALL new-meetup</Link>
                       <br/>
                       <Link to= "https://www.linkedin.com/in/alsaead-aziz-b19965249" target="_blank" rel="noopener noreferrer">MY LinkedIN </Link> 
                    </li>
                </ul>
            </nav>

        </header>
    );
}
export default MainNavigation;