
import './App.css';
import Navigate from './components/nav1/navigate';
import Footer from './components/footer/footer';
import OnlineDoctor from './pages/OnlineDoctor/OnlineDoctor'
import Products from './pages/Products/Products'
import AboutUs from './pages/AboutUs/AboutUs'
import News from './pages/News/News'
import Help from './pages/Help/Help'
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
        <Route path='/OnlineDoctor' element={<OnlineDoctor/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Help' element={<Help/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
