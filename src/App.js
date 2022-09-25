import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import DetailsPage from './pages/details';
import AboutPage from './pages/about';
import Header from './components/header/header';
import { Ctx } from './context/context';
import {Provider} from './context/context';

function App() {
  const context = useContext(Ctx);

  return (
   <div className={`main-content ${context.globalState.theme}`}>
     <Provider >
      <Router>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      </Provider>
   </div>
  );
}

export default App;
