
import './App.css';
import Navigate from './components/nav1/navigate';
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Asked from './components/questions/asked/asked';
function App() {
  return (
    <>
    <Router>
      
      <Navigate/>
      <Routes>
        {/* <Route path='/' element={}/> */}
        {/* <Route path='/' element={}/> */}
        {/* <Route path='/' element={}/> */}
      </Routes>
      <Asked />
      <Footer/>
      
    </Router>
    </>
  );
}

export default App;
