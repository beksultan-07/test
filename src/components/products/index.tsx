import React, { useState } from "react";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Product, { productType } from "../product";
import img from "../../assets/images/product.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.scss";

const Products: React.FC = () => {
    const [products, setProducts] = useState<Array<productType>>([
        {
            id: 1,
            price: 1290,
            liked: true,
            sales: null,
            text: "Держатель для лейки BOOU PG605 ",
            count: 1,
            img: img,
            status: "В наличии",
            instock: "Комплект",
        },
        {
            id: 2,
            price: 1290,
            liked: false,
            sales: null,
            text: "Держатель для лейки BOOU PG605 ",
            count: 1,
            img: img,
            status: "В наличии",
            instock: "Комплект",
        },
        {
            id: 3,
            price: 1290,
            liked: false,
            sales: null,
            text: "Держатель для лейки BOOU PG605 ",
            count: 1,
            img: img,
            status: "В наличии",
            instock: "Комплект",
        },
        {
            id: 4,
            price: 1290,
            liked: false,
            sales: null,
            text: "Держатель для лейки BOOU PG605 ",
            count: 1,
            img: img,
            status: "В наличии",
            instock: "Комплект",
        },
        {
            id: 5,
            price: 1290,
            liked: false,
            sales: null,
            text: "Держатель для лейки BOOU PG605 ",
            count: 1,
            img: img,
            status: "В наличии",
            instock: "Комплект",
        },
        {
            id: 6,
            price: 1290,
            liked: false,
            sales: null,
            text: "Держатель для лейки BOOU PG605 ",
            count: 1,
            img: img,
            status: "В наличии",
            instock: "Комплект",
        },
        {
            id: 7,
            price: 1290,
            liked: false,
            sales: null,
            text: "Держатель для лейки BOOU PG605 ",
            count: 1,
            img: img,
            status: "В наличии",
            instock: "Комплект",
        },
        {
            id: 8,
            price: 1290,
            liked: false,
            sales: null,
            text: "Держатель для лейки BOOU PG605 ",
            count: 1,
            img: img,
            status: "В наличии",
            instock: "Комплект",
        },
    ]);

    const increment = (id: number) => {
        const newArr = [...products].map((el) =>
            el.id === id ? { ...el, count: el.count + 1 } : el
        );

        setProducts(newArr);
    };

    const decrement = (id: number) => {
        const newArr = [...products].map((el) => {
            if (el.id === id) {
                return { ...el, count: el.count > 0 ? el.count - 1 : 0 };
            }
            return el;
        });
        setProducts(newArr);
    };

    const likedHandler = (id: number) => {
        const newArr = [...products].map((el) => {
            if (el.id === id) {
                return { ...el, liked: !el.liked };
            }
            return el;
        });
        setProducts(newArr);
    };

    return (
        <section className="products">
            <div className="container">
                <h2 className="title">Хиты продаж</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    spaceBetween={10}
                    slidesPerView={6}
                    navigation
                    loop
                >
                    {products.map((el) => (
                        <SwiperSlide key={el.id}>
                            <Product
                                likedHandler={likedHandler}
                                increment={increment}
                                decrement={decrement}
                                {...el}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Products;
