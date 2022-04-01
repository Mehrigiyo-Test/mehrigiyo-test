
import './App.css';
import Navigate from './components/nav1/navigate';
import Footer from './components/footer/footer';
import Home from './pages/Home/Home';
import OnlineDoctor from './pages/OnlineDoctor/OnlineDoctor';
import Products from './pages/Products/Products';
import AboutUs from './pages/AboutUs/AboutUs';
import News from './pages/News/News';
import Help from './pages/Help/Help';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Asked from './components/questions/asked/asked';
import Send from './components/questions/send/send';
import Navigate2 from './components/nav2/navigate2';
import GlobalCallSms from './components/Global/GlobalCallSms';

function App() {
  return (
    <>
    <Router>
      <Navigate/>
      {/* <Navigate2/> */}
      <Navigate2/>
      <GlobalCallSms/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/onlineDoctor' element={<OnlineDoctor/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
      <Asked />
      <Send />
      <Footer/>
    </Router>
    </>
  );
}

export default App;
