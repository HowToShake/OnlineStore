import React, {useEffect} from 'react'
import LandingPageStyles from './landing-page-view.module.scss'
import { LoadingOutlined } from '@ant-design/icons'

export const LandingPage = ({ props, mapDispatchToProps }) => {

    console.log('LandinPageProps')
    console.log(props);

    useEffect(() => {
        mapDispatchToProps.uploadItems();

    }, [])


    const showItems = () => {
        return(
            props.items.map((element, index) => {
                return <li key={index}>{element.name}{" | "}{element.category}</li>;
            })
        )
    }
      

    return (
        <>
            {props.loading ?
                (<LoadingOutlined />) 
                : 
                (<div className={LandingPageStyles.Container}>  
                    <ul>
                        {showItems()}
                    </ul>
                </div>)
            }
        </>
    )
}


