
import './App.css';
import Navigate from './components/nav1/navigate';
import Footer from './components/footer/footer';
import Home from './pages/Home/Home'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navigate2 from './components/nav2/navigate2';

function App() {
  return (
    <>
    <Router>
      <Navigate/>
      <Navigate2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/' element={}/> */}
        {/* <Route path='/' element={}/> */}
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
