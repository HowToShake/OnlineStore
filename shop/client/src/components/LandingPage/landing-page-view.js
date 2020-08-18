import React, { useEffect } from 'react'
import LandingPageStyles from './landing-page-view.module.scss'
import { LoadingOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Card, Button } from 'antd'

const { Meta } = Card;

export const LandingPage = ({ props, mapDispatchToProps }) => {

    useEffect(() => {
        mapDispatchToProps.uploadItems();
    }, [])
    
    const addItem = (element) => {
        mapDispatchToProps.onAddItemToCartWasPressed(element);
    }


    const showItems = () => {
        return(
            props.items.map((element, index) => {
                const desc = "Size: " + element.size + " | " + "Amount: " + element.amount + " | " + "Price: " + element.price + "$";
                return(
                    <li key={index} style={{listStyleType: 'none'}}>
                    <Card
                        style={{width: '23vw', marginTop: '1.5vh', marginLeft: '0.5vw', marginRight: '0.5vw'}}
                        hoverable
                        cover={<div style={{background: `url(${element.imgURL}) no-repeat center center`, backgroundSize: 'contain', height: 200}}></div>}
                        actions={[
                            <Button onClick={() => addItem(element)}><ShoppingCartOutlined /></Button>
                        ]}
                        >
                            <Meta title={element.name} description={desc} / >
                                
                            
                    </Card>
                    </li>
                )
            })
        )
    }
      

    return (
        <>
            {props.loading ?
                (<LoadingOutlined style={{width: '100vw', height: '100vh'}}/>) 
                : 
                (<div className={LandingPageStyles.Container}>  
                    <ul className={LandingPageStyles.CardContainer}>
                        {showItems()}
                    </ul>
                </div>)
            }
        </>
    )
}


