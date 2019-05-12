import React, { Component } from 'react';
import picture from '../IMG_2256.PNG'
import './header.css'

class Header extends Component{
render(){
    let style = {
        height: '300px',
        width: '300px',
        borderRadius: '500px'
      }
    return(
        <div>
            <div>
                <img style={ style } src={ picture } alt='' className='image'/>
                <div className='border'>
                </div>
            </div>
        </div>
    )
}
}

export default Header