import { Flex, Image } from "antd";
import React, { useState } from "react";
import img1 from "../../assets/images/special_offers/photo1.png";
import img2 from "../../assets/images/special_offers/photo2.png";
import img3 from "../../assets/images/special_offers/photo3.png";
import img4 from "../../assets/images/special_offers/photo4.png";
import img5 from "../../assets/images/special_offers/photo5.png";
import "./style.scss";

const SpecialOffers: React.FC = () => {
    const [images] = useState([
        {
            text: "Скидки",
            img: img1,
        },
        {
            text: "Акции",
            img: img2,
        },
        {
            text: "Распродажа",
            img: img3,
        },
        {
            text: "Подарки",
            img: img4,
        },
        {
            text: "Подарки",
            img: img5,
        },
        {
            text: "Скидки",
            img: img1,
        },
        {
            text: "Акции",
            img: img2,
        },
        {
            text: "Распродажа",
            img: img3,
        },
        {
            text: "Подарки",
            img: img4,
        },
        {
            text: "Скидки",
            img: img1,
        },
        {
            text: "Акции",
            img: img2,
        },
        {
            text: "Распродажа",
            img: img3,
        },
        {
            text: "Подарки",
            img: img4,
        },
        {
            text: "Подарки",
            img: img5,
        },
    ]);

    return (
        <section className="special-offers">
            <div className="container">
                <Flex justify="space-between">
                    {images.map((el, idx) => {
                        return (
                            <Flex vertical align="center" key={idx}>
                                <Image
                                    src={el.img}
                                    className="special-offers__img"
                                />
                                <p className="special-offers__text">
                                    {el.text}
                                </p>
                            </Flex>
                        );
                    })}
                </Flex>
            </div>
        </section>
    );
};

export default SpecialOffers;
