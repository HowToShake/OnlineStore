import React, {useEffect} from 'react'
import LandingPageStyles from './landing-page-view.module.scss'
import { LoadingOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Card, Button } from 'antd'

const { Meta } = Card;

export const LandingPage = ({ props, mapDispatchToProps }) => {

    console.log('LandinPageProps')
    console.log(props);

    useEffect(() => {
        mapDispatchToProps.uploadItems();

    }, [])

    const showItems = () => {
        return(
            props.items.map((element, index) => {
                const desc = "Size: " + element.size + " | " + "Amount: "+element.amount
                return(
                    <Card
                        key={index}
                        style={{width: 300, margin: '1vh 1vw 1vh 1vw', flex: '1'}}
                        hoverable
                        cover={<div style={{background: `url(${element.imgURL}) no-repeat center center`, backgroundSize: 'contain', height: 200}}></div>}
                        actions={[
                            <Button onClick={() => console.log('click')}><ShoppingCartOutlined /></Button>
                        ]}
                        >
                            <Meta title={element.name} description={desc} / >
                                
                            
                        </Card>
                )
            })
        )
    }
      

    return (
        <>
            {props.loading ?
                (<LoadingOutlined />) 
                : 
                (<div className={LandingPageStyles.Container}>  
                    <div className={LandingPageStyles.CardContainer}>
                        {showItems()}
                    </div>
                </div>)
            }
        </>
    )
}


