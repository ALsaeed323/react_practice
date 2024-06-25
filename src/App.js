import {Route} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';


function App() {
  return (
    <div >
  
  <Route path='/'>
  <AllMeetupsPage/>
  </Route>

  <Route path='/new-meetup'>
  <NewMeetup/>
  </Route>
  
  <Route path='/fav-meetup'>
  <Favorites/>
  </Route>
    </div>
  );
}

export default App;
