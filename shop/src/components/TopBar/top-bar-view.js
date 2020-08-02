import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Input, Select } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'

export const TopBar = (props) => {

    console.log(props.count);

    const { Option } = Select;

    const buttonStyle =  "d-flex flex-row align-items-center";


    const handleSearchBox = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="d-flex flex-row bg-light w-100 justify-content-around align-items-center" style={{minHeight: '60px', height: '4vw', minWidth: '100vw'}}>
            <Link to="/">
                <Button className="d-flex flex-column justify-content-center">Shop Online</Button>
            </Link>

            <div>
            <Input.Group className="site-input-group-wrapper">
                <Select defaultValue="All">
                    <Option value="All">All</Option>
                    <Option value="Cars">Cars</Option>
                </Select>

                <Input.Search
                    style={{ width: '40vw' }} 
                    placeholder="input search text"
                    enterButton="Search"
                    onChange={e => handleSearchBox(e)} />
            </Input.Group>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center">

                <Link to="/">
                    <Button className={buttonStyle} icon={<HomeOutlined />}>Home</Button>
                </Link>

                <Link to="/register">
                    <Button className={buttonStyle} icon={<UserOutlined />}>Register</Button>
                </Link>

            </div>


        </div>
    )

}

