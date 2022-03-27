
import './App.css';
import Navigate from './components/nav1/navigate';
<<<<<<< HEAD
import Footer from './components/footer/footer';
import OrganicPlantation from './components/SectionPlantation/OrganicPlantation';
import OnlineDoctor from './components/OnlineDoctor/OnlineDoctor';
=======
import Footer from './components/footer/footer'
import Home from './pages/Home/Home' 
>>>>>>> 8d115990738734a143d525965729a7c729a00134
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
