import React, { useEffect, useState } from "react";
import LandingPageStyles from "./landing-page-view.module.scss";
import { LoadingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Button, message } from "antd";
import { getWindowDimensions } from "../../models/common-method";

const { Meta } = Card;

export const LandingPage = ({ props, mapDispatchToProps }) => {
  const [widthToDrawer, setWidthToDrawer] = useState();

  const handleResize = () => {
    const { width } = getWindowDimensions();

    if (width > 1000) {
      setWidthToDrawer("23vw");
    } else {
      setWidthToDrawer("33vw");
    }
  };

  useEffect(() => {
    mapDispatchToProps.uploadItems();
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props.user]);

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
              width: widthToDrawer,
              marginTop: "1.5vh",
              marginLeft: "0.5vw",
              marginRight: "0.5vw",
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
          <LoadingOutlined style={{ width: "100vw", height: "100vh" }} />
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

  return <>{loadItems()}</>;
};
