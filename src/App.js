// App.js
import { Routes, Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
    <MainNavigation/>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetup />} />
        <Route path='/fav-meetup' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
