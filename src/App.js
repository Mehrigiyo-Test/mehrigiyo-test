
import './App.css';
import Navigate from './components/nav1/navigate';
import Footer from './components/footer/footer';
import OrganicPlantation from './components/SectionPlantation/OrganicPlantation';
import OnlineDoctor from './components/OnlineDoctor/OnlineDoctor';
import Footer from './components/footer/footer'
import Home from './pages/Home/Home' 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Navigate/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/' element={}/> */}
        {/* <Route path='/' element={}/> */}
      </Routes>
      <OnlineDoctor />
      <OrganicPlantation />
      <Footer/>
    </Router>
    </>
  );
}

export default App;
