import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './Components/Homepage';

function App() {
  return (
    <Router> {/* ✅ ต้องมี Router ห่อ */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
