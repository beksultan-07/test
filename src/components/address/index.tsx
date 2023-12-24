import React, { useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Divider, Flex } from "antd";
import {
    ArrowRightOutlined,
    ClockCircleOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
} from "@ant-design/icons";

import logo from "../../assets/images/address.svg";

import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

const Address: React.FC = () => {
    const [addresses] = useState([
        {
            id: 1,
            logo,
            name: "Iskender home",
            url: "https://maps.app.goo.gl/jFCpTNQjCxKRsYqz6",
            address: "Кыргызстан, г. Бишкек ",
            address2: "ул. Турусбекова A167",
            workTime: "08:00 - 22:00",
            phoneNumber: "+996 500 345 345",
        },
        {
            id: 3,
            logo,
            name: "Iskender home",
            url: "https://maps.app.goo.gl/jFCpTNQjCxKRsYqz6",
            address: "Кыргызстан, г. Бишкек ",
            address2: "ул. Турусбекова A167",
            workTime: "08:00 - 22:00",
            phoneNumber: "+996 500 345 345",
        },
        {
            id: 3,
            logo,
            name: "Iskender home",
            url: "https://maps.app.goo.gl/jFCpTNQjCxKRsYqz6",
            address: "Кыргызстан, г. Бишкек ",
            address2: "ул. Турусбекова A167",
            workTime: "08:00 - 22:00",
            phoneNumber: "+996 500 345 345",
        },
        {
            id: 4,
            logo,
            name: "Iskender home",
            url: "https://maps.app.goo.gl/jFCpTNQjCxKRsYqz6",
            address: "Кыргызстан, г. Бишкек ",
            address2: "ул. Турусбекова A167",
            workTime: "08:00 - 22:00",
            phoneNumber: "+996 500 345 345",
        },
    ]);

    return (
        <section className="address">
            <div className="container">
                <h2 className="title">Address</h2>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop
                >
                    {addresses.map((address) => (
                        <SwiperSlide>
                            <div
                                className="address__item"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                }}
                            >
                                <a
                                    className="address__item__top"
                                    href={address.url}
                                    target="_blank"
                                >
                                    <Flex
                                        gap={10}
                                        align="center"
                                        justify="space-between"
                                    >
                                        <img src={address.logo} alt="" />

                                        <Flex vertical>
                                            <h3 className="address__item__title">
                                                {address.name}
                                            </h3>
                                            <p className="address__item__link">
                                                открыть в карте
                                            </p>
                                        </Flex>

                                        <ArrowRightOutlined
                                            style={{ margin: "0 0 0 auto" }}
                                        />
                                    </Flex>
                                </a>

                                <Divider />

                                <Flex gap={5} align="flex-start">
                                    <EnvironmentOutlined />
                                    <p className="address__item__text">
                                        {address.address} <br />
                                        {address.address2}
                                    </p>
                                </Flex>
                                <Flex justify="space-between" align="center">
                                    <Flex align="center" gap={5}>
                                        <ClockCircleOutlined />
                                        <p className="address__item__text">
                                            {address.workTime}
                                        </p>
                                    </Flex>

                                    <Flex align="center" gap={5}>
                                        <PhoneOutlined />
                                        <p className="address__item__text">
                                            {address.phoneNumber}
                                        </p>
                                    </Flex>
                                </Flex>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Address;
