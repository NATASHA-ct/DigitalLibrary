import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Category from './components/Category';

const Books = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
  },
  {
    id: '2',
    title: 'Fooled by Randomness',
    author: 'Nassim Nicholas Taleb',
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Book item={Books} />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
