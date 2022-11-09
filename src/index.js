import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homepage';
import Footer from './Components/footer';
import Home from './Components/home';
import Friends from './Components/friends';
import Message from './Components/message';
import Allrequests from './Components/allrequests';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from './Components/register';
import ForgotPass from './Components/forgotpass';
import Settings from './Components/settings';
import UpdateAcc from './Components/updateAcc';
import store from "./store";
import { Provider } from "react-redux";

const App = () =>{
  return(
    <Provider store={store}>
    <BrowserRouter>
    <div className='app'>
    <Switch>
    <Route exact path='/'><Homepage/></Route>
    <Route path='/home/:name'><Home/></Route>
    <Route path='/register'><Register/></Route>
    <Route path='/reset'><ForgotPass/></Route>
    <Route path='/messages'><Message/></Route>
    <Route path='/friends'><Friends/></Route>
    <Route path='/requests'><Allrequests/></Route>
    <Route path='/settings'><Settings/></Route>
    <Route path='/update'><UpdateAcc/></Route>
    <Route path='/logout'><Homepage/></Route>
    </Switch>
    <Footer />
    </div>
    </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)