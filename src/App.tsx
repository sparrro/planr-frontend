import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './Views/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            <Route path='/forgotpassword/:token' element={<ForgotPassword />}/>
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;
