import React, { Component } from 'react'
import './body.css'


class Body extends Component{
    render(){
        return(
            <div className='itemContainer'>
                <div className='items'>
                    <p>Mobiles</p>
                </div>
                <div className='items'>
                    <p>Baby Teethers</p>
                </div>
                <div className='items'>
                    <p>Diapers</p>
                </div>
                <div className='items'>
                    <p>Decor</p>
                </div>
            </div>
        )
    }
}

export default Body