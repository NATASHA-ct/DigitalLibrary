import './App.css';
import Navbar from './components/Navbar.js';
import Book from './components/Book.js';


const Books = [
          {
            id:1,
            title:"Life is crazy",
            author:"Tascha"
        },
         {
            id:2,
            title:"Life is good",
            author:"Aron Abraham"
        }

]

const App = () => {
  return (
       <div>
         <Navbar />
         <Book data={Books}/>
       </div>
  );
};

export default App;