import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import './vendor/slick-carousel/slick/slick.css';
import './vendor/slick-carousel/slick/slick-theme.css';

import { MainPage } from './pages/MainPage';

const App = () => {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
};

const RouteWrapper = () => {
  return (
    <Routes location={location}>
      <Route
        path='/'
        Component={MainPage}
      />
      {/* <Route path="/about" Component={About} /> */}
    </Routes>
  );
};

export default App;
