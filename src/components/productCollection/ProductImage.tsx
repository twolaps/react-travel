import React from "react";
import { Image, Typography } from "antd";

interface PropsType {
    id: string | number;
    size: "large" | "small";
    imageSrc: string;
    price: number | string;
    title: string;
}

export const ProductImage: React.FC<PropsType> = ({id, size, imageSrc, price, title}) => {
  let h: number = 0;
  let w: number = 0;
    if (size == "large") {
      h = 285;
      w = 490;
    }
    else {
      h = 120;
      w = 240;
    }
    return (
      <>
      <Image src={imageSrc} height={h} width={w} /> 
        <div>
          <Typography.Text type="secondary">
            {title.slice(0, 25)}
          </Typography.Text>
          <Typography.Text type="danger" strong>
            ¥ {price} 起
          </Typography.Text>
        </div>
      </>
    );
}