import React, { useEffect, useState } from "react";
import LandingPageStyles from "./landing-page-view.module.scss";
import { LoadingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Button, message, Menu, Carousel } from "antd";
import { MUSIC_CATEGORIES }  from '../../models/const'
import { getWindowDimensions } from "../../models/common-method";

const { Meta } = Card;
const categories = [
  MUSIC_CATEGORIES.ALL,
  MUSIC_CATEGORIES.BLUES,
  MUSIC_CATEGORIES.CLASSICAL,
  MUSIC_CATEGORIES.ELECTRONIC,
  MUSIC_CATEGORIES.HIPHOP,
  MUSIC_CATEGORIES.JAZZ,
  MUSIC_CATEGORIES.METAL,
  MUSIC_CATEGORIES.POP,
  MUSIC_CATEGORIES.ROCK
]

export const LandingPage = ({ props, mapDispatchToProps }) => {

  const [widthToMenu, setwidthToMenu] = useState()
  const [selectedCategory, setSelectedCategory] = useState(MUSIC_CATEGORIES.ALL)

  useEffect(() => {
    mapDispatchToProps.uploadItems();
    window.addEventListener("resize", handleResize);
    handleResize();
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
    setSelectedCategory(category);

    switch(category){

      case MUSIC_CATEGORIES.ALL:
        default:
          document.querySelector('div#root').style.backgroundColor = '';
          break;

      case MUSIC_CATEGORIES.BLUES:
        document.querySelector('div#root').style.backgroundColor = '#FAF1F1';
        break;

      case MUSIC_CATEGORIES.CLASSICAL:
        document.querySelector('div#root').style.backgroundColor = '#AABBCC';
        break;

      case MUSIC_CATEGORIES.ELECTRONIC:
        document.querySelector('div#root').style.backgroundColor = '#11FF33';
        break;
      
      case MUSIC_CATEGORIES.HIPHOP:
        document.querySelector('div#root').style.backgroundColor = '#ABCDEF';
        break;

      case MUSIC_CATEGORIES.JAZZ:
        document.querySelector('div#root').style.backgroundColor = '#123456';
        break;

      case MUSIC_CATEGORIES.METAL:
        document.querySelector('div#root').style.backgroundColor = '#0F0F0F0F';
        break;

      case MUSIC_CATEGORIES.POP: 
        document.querySelector('div#root').style.backgroundColor ='#F4D7D7'
        break;
      
      case MUSIC_CATEGORIES.ROCK:
        document.querySelector('div#root').style.backgroundColor = 'pink'
        break; 
    }
  }


  const carouselContentStyle = {
    marginTop: '60px',
    width: '80vw',
    marginLeft: '10vw',
    marginRight: '10vw',
    color: '#fff',
    lineHeight: '30vh',
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
        <h3 style={carouselContentStyle}>WELCOME ON OUR ONLINE STORE</h3>
      </div>
      <div>
        <h3 style={carouselContentStyle}>IF YOU ARE LOOKING FOR SOME REALLY GOOD MUSIC CHOOSE INTERESTING YOU CATEGORY</h3>
      </div>
      <div>
        <h2 style={carouselContentStyle}>YOU ARE ACTUALLY IN: {selectedCategory} CATEGORY.</h2>
      </div>
    </Carousel>


      <div>
        SEARCH FOR ALL MUSIC IN {selectedCategory} CATEGORY.
      </div>

    </>
  )
};
