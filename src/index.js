import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homepage';
import Footer from './Components/footer';
import Home from './Components/home';
import Friends from './Components/friends';
import Message from './Components/message';
import Allrequests from './Components/allrequests';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';

const App = () =>{
  return(
    <Router>
    <div className='app'>
    <Routes>
    <Route path='' element={<Homepage/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/messages' element={<Message/>} />
    <Route path='/friends' element={<Friends/>} />
    <Route path='/requests' element={<Allrequests/>} />
    <Route path='/logout' element={<Homepage/>} />
    </Routes>
    <Footer />
    </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)