import React, {useEffect} from 'react'

export const CategoryView = ({props, mapDispatchToProps}) => {
    useEffect(() => {
        const category = window.location.href.substring((window.location.href.indexOf('?')+1));
        mapDispatchToProps.getItemsInParticularCategory(category);

    }, [])

    const uniqueBands = [...new Set(props.musicInParticularCategory.map(item => item.band))];
 
    const renderSectionForPartiucalrBand = () => {
        uniqueBands.map(el => {
           return (<p>xD</p>)
        })
    }

    return(
        <>
            {renderSectionForPartiucalrBand()}
        </>
    )
}
