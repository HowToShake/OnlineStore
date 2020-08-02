import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

export const TopBar = (props) => {

    console.log(props.count);

    const handleSearchBox = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="d-flex flex-row bg-light w-100 justify-content-around align-items-center" style={{minHeight: '60px', height: '4vw', minWidth: '100vw'}}>
            <Link to="/">
                <Button className="d-flex flex-column justify-content-center">Shop Online</Button>
            </Link>

            <form className="d-flex flex-row flex-nowrap justify-content-center align-items-center" style={{ minHeight: '60%', minWidth: '50%'}}>
                <input  className="form-control" type="text" placeholder="Search" onChange={e => handleSearchBox(e)} style={{minWidth: '80px'}}/>
                <button type="submit" className="btn btn-secondary ml-1 text-center" >Submit</button>
            </form>

            <Link to="/register">
                <button className="btn btn-primary">Register</button>
            </Link>

            <Link to="/">
                <Button><HomeOutlined /></Button>
            </Link>


        </div>
    )

}

