import React, { useState } from "react";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img from "../../assets/images/news.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "antd";

import "./style.scss";

const News: React.FC = () => {
    const [news] = useState([
        { id: 1, text: "На кухонную мебель", title: "50%", image: img },
        { id: 2, text: "На кухонную мебель", title: "50%", image: img },
        { id: 3, text: "На кухонную мебель", title: "50%", image: img },
        { id: 4, text: "На кухонную мебель", title: "50%", image: img },
    ]);

    return (
        <section className="news">
            <div className="container">
                <h2 className="title">Новости</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    loop
                >
                    {news.map((el) => (
                        <SwiperSlide>
                            <div
                                className="news__item"
                                style={{
                                    backgroundImage: `url(${el.image})`,
                                    padding: "38px 22px",
                                }}
                            >
                                <div className="news__item__content">
                                    <h3 className="news__item__title">
                                        {el.title}
                                    </h3>
                                    <p className="news__item__text">
                                        {el.text}
                                    </p>
                                    <Button type="primary">Подробнее</Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default News;
