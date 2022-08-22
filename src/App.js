import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
