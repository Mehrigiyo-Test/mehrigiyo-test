
import './App.css';
import Navigate from './components/nav1/navigate';
import Footer from './components/footer/footer';
import OrganicPlantation from './components/SectionPlantation/OrganicPlantation';
import OnlineDoctor from './components/OnlineDoctor/OnlineDoctor';
import Ambulance from './components/Ambulance/Ambulance';
// import Footer from './components/footer/footer';
import Home from './pages/Home/Home' 
import OnlineDoctor from './pages/OnlineDoctor/OnlineDoctor'
import Products from './pages/Products/Products'
import AboutUs from './pages/AboutUs/AboutUs'
import News from './pages/News/News'
import Help from './pages/Help/Help'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Navigate/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/OnlineDoctor' element={<OnlineDoctor/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Help' element={<Help/>}/>
      </Routes>
      <OnlineDoctor />
      <OrganicPlantation />
      <Ambulance />
      <Footer/>
    </Router>
    </>
  );
}

export default App;
