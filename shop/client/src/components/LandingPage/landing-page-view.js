import React, { useEffect, useState } from "react";
import LandingPageStyles from "./landing-page-view.module.scss";
import { LoadingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Button, message, Menu, Carousel } from "antd";
import { MUSIC_CATEGORIES }  from '../../models/const'
import { getWindowDimensions } from "../../models/common-method";

const { Meta } = Card;
const categories = [
  MUSIC_CATEGORIES.BLUES,
  MUSIC_CATEGORIES.CLASSICAL,
  MUSIC_CATEGORIES.ELECTRONIC,
  MUSIC_CATEGORIES.HIPHOP,
  MUSIC_CATEGORIES.JAZZ,
  MUSIC_CATEGORIES.METAL,
  MUSIC_CATEGORIES.POP,
  MUSIC_CATEGORIES.REGGAE,
  MUSIC_CATEGORIES.ROCK
]

export const LandingPage = ({ props, mapDispatchToProps }) => {

  const [widthToMenu, setwidthToMenu] = useState()
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    mapDispatchToProps.uploadItems();
    window.addEventListener("resize", handleResize);
    handleResize();

    if(props.wasHomeOrMenuPressed){
      setSelectedCategory('');
      switchCategory('');
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.querySelector('div#root').style.backgroundColor = '';
      
    };
  }, [props.user, props.wasHomeOrMenuPressed]);


  const handleResize = () => {
    const { width } = getWindowDimensions();

    if(width > 768){
      setwidthToMenu(`${(100/(categories.length))}vw`)
    }else if (width <= 768){
      setwidthToMenu('');
    }
  };


  const addItem = (element) => {
    if (props.user) {
      mapDispatchToProps.onAddItemToCartWasPressed(element);
    } else {
      message.error("Only authenticated user can add products to Cart!", 1.5);
    }
  };


  const showItems = () => {
    return props.items.map((element, index) => {
      const desc = "Size: " + element.size + " | " + "Amount: " + element.amount + " | " + "Price: " + element.price + "$";
      return (
        <li key={index} style={{ listStyleType: "none" }}>
          <Card
            style={{
              marginTop: "1.5vh",
            }}
            hoverable
            cover={
              <div
                style={{
                  background: `url(${element.imgURL}) no-repeat center center`,
                  backgroundSize: "contain",
                  height: 200,
                }}
              ></div>
            }
            actions={[
              <Button onClick={() => addItem(element)}>
                <ShoppingCartOutlined />
              </Button>,
            ]}
          >
            <Meta title={element.name} description={desc} />
          </Card>
        </li>
      );
    });
  };


  const loadItems = () => {
    if (props.loading) {
      return (
        <>
          <LoadingOutlined style={{ width: "99vw", height: "100vh" }} />
        </>
      );
    } else {
      return (
        <div className={LandingPageStyles.Container}>
          <ul className={LandingPageStyles.CardContainer}>{showItems()}</ul>
        </div>
      );
    }
  };


  const switchCategory = (category) => {
    mapDispatchToProps.onCategoryButtonWasPressed();
    setSelectedCategory(category);

    switch(category){
      case 'Pop': {
        document.querySelector('div#root').style.backgroundColor ='#F4D7D7'
        break;
      }
      case 'Rock' :{
        document.querySelector('div#root').style.backgroundColor = 'pink'
        break;
      }
      default:{
        document.querySelector('div#root').style.backgroundColor = '';
        break;
      }
    }
  }


  const carouselContentStyle = {
    marginTop: '40px',
    width: '90vw',
    marginLeft: '5vw',
    marginRight: '5vw',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }



  return(
    <>

    {widthToMenu  ?
      <>
        <Menu onClick={() => console.log('hejka')} mode='horizontal' style={{width: '100vw', backgroundColor: 'transparent', paddingTop: '10px',  overflowX: 'auto', overflowY: 'hidden'}}>
          {categories.map((category, index) => {
            return(
              <Menu.Item key={index} onClick={() => switchCategory(category)} style={{margin: 0}}>
                <p style={{width: widthToMenu, textAlign: 'center', fontSize: '1em'}}>{category}</p>
              </Menu.Item>
            )}
          )}
        </Menu>
      </> :

      <>
        <Menu onClick={() => console.log('hejka')} mode='horizontal' style={{width: '100vw', backgroundColor: 'transparent', paddingTop: '10px',  overflowX: 'auto', overflowY: 'hidden'}}>
          {categories.map((category, index) => {
            return(
              <Menu.Item key={index} onClick={() => switchCategory(category)}>
                {category}
              </Menu.Item>
            )}
          )}
        </Menu>
      </>
    }
  

    <Carousel>
      <div>
        <h3 style={carouselContentStyle}>TEST</h3>
      </div>
      <div>
        <h3 style={carouselContentStyle}>TEST2</h3>
      </div>
      <div>
        <h2 style={carouselContentStyle}>{selectedCategory}</h2>
      </div>
    </Carousel>

    </>
  )
};
