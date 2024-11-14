import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Edit from './Components.js/Edit';
import Delete from './Components.js/Delete';
import Add from './Components.js/Add';
import Home from './Components.js/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
