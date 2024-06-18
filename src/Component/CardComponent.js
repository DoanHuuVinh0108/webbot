import React from "react";
import {Card } from "antd";
import "./style.css";
const { Meta } = Card;
const CardComponent = ({icon, title, description, extra}) => {
  return (
    <>
      <Card
        style={{
          width: "100%",
          height: "100%",
        }}
        cover={extra}
      >
        <Meta
          title={
            <div flex items-center>
              {icon ?? icon}
              <div>{title}</div>
            </div>
          }
          description={description}
        />
        
      </Card>
    </>
  );
};

export default CardComponent;
