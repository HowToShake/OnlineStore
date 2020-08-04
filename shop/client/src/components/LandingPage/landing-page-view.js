import React from 'react'
import LandingPageStyles from './landing-page-view.module.scss'

export const LandingPage = (props) => {

    console.log('tu');
    props.uploadItems();

    console.log('xd')
    console.log(props);


    return (
        <div className={LandingPageStyles.Container}>
            <p>Tu jest layout</p>
        </div>
    )
}


