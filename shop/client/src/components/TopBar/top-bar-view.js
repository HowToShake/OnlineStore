import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Input, Select } from 'antd'
import { HomeOutlined, UserOutlined, ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons'
import { CATEGORY_ALL } from '../../models/const'
import style from './top-bar-view.module.scss'

export const TopBar = ({ props, mapDispatchToProps }) => {

    const { Option } = Select;
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
                        <Button icon={<HomeOutlined />}>Home</Button>
                    </Link>

                    <Link to="/cart">
                        <Button icon={<ShoppingCartOutlined />}>Cart</Button>
                    </Link>

                    <Link to="/">
                        <Button icon={<LogoutOutlined />} onClick={() => mapDispatchToProps.logout()} style={{color: 'red'}}>Logout</Button>
                    </Link>

                </>
            )
        }else{
            return(
                <>
                    <Link to="/">
                        <Button icon={<HomeOutlined />}>Home</Button>
                    </Link>

                    <Link to="/auth">
                        <Button icon={<UserOutlined />}>Join Us</Button>
                    </Link>
                </>
            )
        }
    }

    const renderCategories = () => {
        return(
            <>
                <Select defaultValue={CATEGORY_ALL} className={style.categories} onChange={(value) => setSelectedCategory(value)}>
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
        <div className={style.topBarView}>
            <div className={style.innerWrapper}>
                <Link to="/" className={style.homeButton}>
                    <Button className={style.logo} onClick={mapDispatchToProps.onLoginButtonClicked}>Online Store</Button>
                </Link>
                
                <Input.Group className={style.searchBar}>
                    
                    {renderCategories()}
            
                    <Input.Search
                        className={style.searchInput}
                        placeholder="Search product"
                        enterButton="Search"
                        onChange={e =>  setSearchBoxValue(e.target.value)}
                        onSearch={() => searchValue()}
                        />

                </Input.Group>
                

                <div className={style.buttonsLeft}>
                    {renderButtons()}
                </div>
            </div>

        </div>
    )

}

