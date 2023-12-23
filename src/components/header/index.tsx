import React from "react";
import "./style.scss";
import { Avatar, Badge, Button, Divider, Flex, Input, Typography } from "antd";
import logo from "../../assets/images/logo.svg";
import {
    HeartOutlined,
    MenuOutlined,
    SearchOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <Flex justify="space-between" gap={10}>
                    <img src={logo} alt="" />
                    <Button
                        type="primary"
                        shape="round"
                        icon={<MenuOutlined />}
                        size={"middle"}
                        className="header__btn"
                    >
                        Каталог
                    </Button>

                    <Input
                        size="small"
                        placeholder="Поиск"
                        prefix={<SearchOutlined />}
                        className="header__input"
                        suffix={<Text type="secondary">4419</Text>}
                    />

                    <Flex align="center">
                        <Button type="link" className="header__btn__link">
                            <Flex gap={9} align="flex-start">
                                <Flex vertical align="flex-start">
                                    <p className="header__text">
                                        Добро пожаловать
                                    </p>
                                    <p className="header__register">
                                        Вход/Регистрация
                                    </p>
                                </Flex>
                                <Avatar size="large" icon={<UserOutlined />} />
                            </Flex>
                        </Button>
                        <Divider type="vertical" className="header__divider" />
                        <Button type="link" className="header__btn__link">
                            <Badge count={2}>
                                <Avatar size="large" icon={<HeartOutlined />} />
                            </Badge>
                        </Button>
                    </Flex>
                </Flex>
            </div>
        </header>
    );
};

export default Header;
