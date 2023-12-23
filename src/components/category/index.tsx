import React, { useState } from "react";
import { Flex } from "antd";
import "./style.scss";
import img1 from "../../assets/images/categories/category1.png";

const Category: React.FC = () => {
    const [category] = useState([
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
        { text: "Ванны", count: 3000, img: img1, imgPosition: "" },
    ]);

    return (
        <section className="category">
            <div className="container">
                <h2 className="title">Категории</h2>

                <Flex gap={8} wrap="wrap" justify="space-between">
                    {category.map((el, idx) => {
                        return (
                            <a href="#" className="category__card" key={idx}>
                                <h4 className="category__card__title">
                                    {el.text}
                                </h4>
                                <p className="category__card__text">
                                    {el.count} товаров
                                </p>
                                <img
                                    src={el.img}
                                    alt=""
                                    className="category__card__img"
                                />
                            </a>
                        );
                    })}
                </Flex>
            </div>
        </section>
    );
};

export default Category;
