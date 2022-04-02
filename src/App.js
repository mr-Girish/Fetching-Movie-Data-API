
import './index.css';
import Home from './Components/Home';
import Summary from './Components/Summary';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import FetchData from './Components/FetchData';


function App() {
  return (
    <>
    <Router>
       
      <Routes>
        <Route path="/" exact element={<Home/>}/>
       
        {/* <Route exact path='/information/:id' element={<Summary/>} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
