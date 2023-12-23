import { HeartOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import React from "react";

export interface productType {
    id: number;
    text: string;
    img: string;
    instock: string;
    status: string;
    count: number;
    sales: number | null;
    price: number;
    liked: boolean;
}

interface Props extends productType {
    increment: (id: number) => void;
    decrement: (id: number) => void;
    likedHandler: (id: number) => void;
}

const Product: React.FC<Props> = ({
    text,
    img,
    instock,
    status,
    count,
    sales,
    price,
    id,
    liked,
    increment,
    decrement,
    likedHandler,
}) => {
    return (
        <div className="product__item">
            <div className="product__item__image-wrap">
                <img src={img} alt="" className="product__item__img" />
                <Button
                    onClick={() => likedHandler(id)}
                    className="product__item__image__btn"
                    type={liked ? "default" : "primary"}
                >
                    <HeartOutlined />
                </Button>
            </div>
            <p className="product__item__text">{text}</p>
            {sales ? (
                <Flex>
                    <p className="product__item__price red">{sales}c</p>
                    <p className="product__item__sales red">{price}c</p>
                </Flex>
            ) : (
                <p className="product__item__price">{price}c</p>
            )}
            <span className="product__item__status">{status}</span>
            <span className="product__item__instock">{instock}</span>

            <Flex justify="space-between" align="center">
                <Tooltip title="search">
                    <Button
                        type="primary"
                        shape="circle"
                        onClick={() => increment(id)}
                        icon={<PlusOutlined />}
                    ></Button>

                    <span className="product__item__count">{count}</span>

                    <Button
                        type="primary"
                        shape="circle"
                        onClick={() => decrement(id)}
                        icon={<MinusOutlined />}
                    ></Button>
                </Tooltip>
            </Flex>
        </div>
    );
};

export default Product;
