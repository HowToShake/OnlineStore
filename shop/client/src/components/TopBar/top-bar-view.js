import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Input, Select } from 'antd'
import { HomeOutlined, UserOutlined, ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons'
import { CATEGORY_ALL } from '../../models/const'

export const TopBar = ({ props, mapDispatchToProps }) => {


    const { Option } = Select;
    const buttonStyle =  "d-flex flex-row align-items-center";
    const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL)
    const [searchBoxValue, setSearchBoxValue] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        mapDispatchToProps.getDistinctCategories()
    }, [])


    const renderButtons = () => {
        if(props.isAuthenticated !== false && props.user !== null && props.token !== null){
            return(
                <>
                    
                    <Button style={{border: 'none', backgroundColor: 'transparent'}}>Welcome back, {props.user.name}</Button>
                    <Link to="/">
                        <Button className={buttonStyle} icon={<HomeOutlined />}>Home</Button>
                    </Link>

                    <Link to="/cart">
                        <Button className={buttonStyle} icon={<ShoppingCartOutlined />}>Cart</Button>
                    </Link>

                    <Link to="/">
                        <Button className={buttonStyle} icon={<LogoutOutlined />} onClick={() => mapDispatchToProps.logout()} style={{color: 'red'}}>Logout</Button>
                    </Link>

                </>
            )
        }else{
            return(
                <>
                    <Link to="/">
                        <Button className={buttonStyle} icon={<HomeOutlined />}>Home</Button>
                    </Link>

                    <Link to="/auth">
                        <Button className={buttonStyle} icon={<UserOutlined />}>Join Us</Button>
                    </Link>
                </>
            )
        }
    }

    const renderCategories = () => {
        return(
            <>
                <Select defaultValue={CATEGORY_ALL} style={{width: '6vw'}} onChange={(value) => setSelectedCategory(value)}>
                <Option value={CATEGORY_ALL}>All</Option>
                    {props.categories.map((category, index) => (
                        <Option key={index} value={category}>{category}</Option>
                    ))}
                </Select>
            </>
        )
    }

    const searchValue = async () => {
        if(searchBoxValue !== ''){
            await mapDispatchToProps.getSearchedItems(searchBoxValue, selectedCategory)
            history.push(`/search`)
        }
    }

    return (
        <div className="d-flex flex-row bg-light justify-content-around align-items-center" style={{minHeight: '60px', height: '4vw', minWidth: '100vw'}}>
            <Link to="/">
                <Button className="d-flex flex-column justify-content-center">Online Store</Button>
            </Link>

            <div>
            <Input.Group className="site-input-group-wrapper">
                
                {renderCategories()}
           
                <Input.Search
                    style={{ width: '40vw' }} 
                    placeholder="input search text"
                    enterButton="Search"
                    onChange={e =>  setSearchBoxValue(e.target.value)}
                    onSearch={() => searchValue()}
                    />

            </Input.Group>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center">
                {renderButtons()}
            </div>


        </div>
    )

}

