import React from 'react';

const Requests = (props) =>{
  return(
      <div className='card'>
        <div className='content'>
          <img className='right floated mini ui image' src={props.img}></img>
          <div className='header'>
            <a href='/'>{props.name}</a>
          </div>
          <div className='meta'>
            {props.mutual}
          </div>
          <div className='description'>
            {props.desc}
          </div>
        </div>
        <div className='extra content'>
          <div className='ui two buttons'>
            <div className='ui basic green button'>Approve</div>
            <div className='ui basic red button'>Decline</div>
          </div>
        </div>
      </div>
  )
}

export default Requests;