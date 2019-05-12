import React, { Component } from 'react'
import './body.css'
import { HashRouter as Router, Link } from 'react-router-dom';
import routes from '../../routes'


class Body extends Component{
    render(){
        return(
            <Router>
                <div className='bodyContainer'>
                <div className='arrowUp'></div>
                        <nav>
                        <div className='itemContainer'>
                            <div className='items'><Link className='itemLink' to='/mobiles'>Mobiles</Link></div>
                            <div className='items'><Link className='itemLink' to='/babyteethers'>Baby Teethers</Link></div>
                            <div className='items'><Link className='itemLink' to='/diapers'>Diapers</Link></div>
                            <div className='items'><Link className='itemLink' to='/decor'>Decor</Link></div>
                        </div>
                        </nav>
                    <div className='arrowDown'></div>
                    { routes }
                </div>
            </Router>
        )
    }
}

export default Body