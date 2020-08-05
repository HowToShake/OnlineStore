import React from 'react'
import LandingPageStyles from './landing-page-view.module.scss'

export const LandingPage = ({ props, mapDispatchToProps }) => {

    console.log('tu');
    mapDispatchToProps.uploadItems();
    //console.log(mapDispatchToProps.uploadItems())

    console.log('xd')
    console.log(props);


    return (
        <div className={LandingPageStyles.Container}>
            <p>Tu jest layout</p>
        </div>
    )
}


