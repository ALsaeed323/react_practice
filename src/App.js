// App.js
import { Routes, Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
   
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetup />} />
        <Route path='/fav-meetup' element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
