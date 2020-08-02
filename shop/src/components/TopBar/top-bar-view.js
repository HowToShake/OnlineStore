import React, {useState} from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from '../register/register-view'
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export const TopBar = (props) => {

    console.log(props);

    const handleSearchBox = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="d-flex flex-row bg-light w-100 justify-content-around align-items-center" style={{minHeight: '60px', height: '4vw', minWidth: '100vw'}}>
            <strong className="d-flex flex-column justify-content-center" style={{minWidth: '60px', fontSize: '1rem', minHeight: '60px', height: '4vw'}}>Shop Online</strong>

            <form className="d-flex flex-row flex-nowrap justify-content-center align-items-center" style={{ minHeight: '60%', minWidth: '50%'}}>
                <input  className="form-control" type="text" placeholder="Search" onChange={e => handleSearchBox(e)} style={{minWidth: '80px'}}/>
                <button type="submit" className="btn btn-secondary ml-1 text-center" >Submit</button>
            </form>

        <Router>
            <Link to="/register">
                <button className="btn btn-primary">REJESTRACJA</button>
            </Link>
        </Router>
        </div>
    )

}

