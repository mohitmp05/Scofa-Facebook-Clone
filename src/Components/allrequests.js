import React from 'react';
import Requests from './requests';
import pic1 from '../Images/mohit.png';
import pic2 from '../Images/elliot.jpg';
import pic3 from '../Images/elyse.png';
import pic4 from '../Images/steve.jpg';
import Navbar from "./navbar";

const Allrequests = () => {
  return(
    <div>
      <Navbar />
      <br></br>
    <div className='ui link cards' >
      <Requests
      name = 'Mohit Pandey'
      mutual = '2 Mutual Friends'
      desc = 'Hello I am Mohit from Lucknow'
      img = {pic1}/>

      <Requests 
      name = 'Aakash Kumar'
      mutual = '5 Mutual Friends'
      desc = 'Hello I am Aakash from Delhi'
      img = {pic2}/>

      <Requests
      name = 'Ashish Gupta'
      mutual = 'New Account'
      desc = 'Hello I am Ashish from Madhya Pradesh'
      img = {pic3}/>

    <Requests
      name = 'Sumit Mahato'
      mutual = '0 Mutual Friends'
      desc = 'Hello I am Sumit from Kolkata'
      img = {pic4}/>
    </div>
    </div>
  )
}

export default Allrequests;