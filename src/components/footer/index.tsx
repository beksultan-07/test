import { useMemo } from "react";
import scss from "./Footer.module.scss";
import google from "../../assets/images/footer/google.png";
import app from "../../assets/images/footer/app.png";
import whats from "../../assets/images/footer/whatsapp-svgrepo-com 1.svg";
import logo from "../../assets/images/footer/Logo.png";
import insta from "../../assets/images/footer/inst.svg";
import face from "../../assets/images/footer/face.svg";

const FooterAdress = [
    {
        name: "ЭлитаСтрой",
        adress: "ул. Ден-Сяопина 18/1",
    },
    {
        name: "Баткен",
        adress: "ул. Льва-Толстого 19",
    },
    {
        name: "ТааТан",
        adress: "ул. Лермонтова 6",
    },
];

const Footer = () => {
    const footerAdress = useMemo(() => {
        return FooterAdress.map((el, index) => (
            <h2 key={index}>
                <span className={scss.adress__name}>{el.name}</span>
                <p className={scss.adress__adress}>{el.adress}</p>
            </h2>
        ));
    }, [FooterAdress]);

    return (
        <footer>
            <section className={scss.footer}>
                <article className={scss.logo}>
                    <img src={logo} alt="" />
                    <p className={scss.logo__desc}>
                        Первый отечественный бренд <br /> Iskender на рынке
                        сантехники от <br />
                        компании ОсОО «Стройдом.кг»
                    </p>
                    <div className={scss.logo__store}>
                        <a href="#">
                            <img src={google} alt="ijo" />
                        </a>
                        <a href="#">
                            <img src={app} alt="" />
                        </a>
                    </div>
                </article>
                <article className={scss.adress}>
                    <h1>Адрес</h1>
                    <div className={scss.adress__main}>{footerAdress}</div>
                </article>
                <article className={scss.company}>
                    <h1>Компания</h1>
                    <div className={scss.company__info}>
                        <a href="#">Каталог</a>
                        <a href="#">Избраное</a>
                        <a href="#">Личный кабинет</a>
                    </div>
                </article>
                <article className={scss.contacts}>
                    <h1>Контакты</h1>
                    <main className={scss.contacts__info}>
                        <div className={scss.contacts__email}>
                            <span>Email:</span>
                            <a href="#">iskender.kg@gmail.com</a>
                        </div>
                        <div className={scss.contacts__number}>
                            <span>Телефон</span>
                            <a href="#">+996 (500) 000-104</a>
                            <a href="#">+996 (997) 000-104</a>
                            <a href="#">+996 (222) 000-104</a>
                        </div>
                    </main>
                    <button>
                        <img src={whats} alt="" />
                        <a href="#" className={scss.whats}>
                            WhatsApp
                        </a>
                    </button>
                </article>
            </section>
            <section className={scss.unfooter}>
                <p>© 2023 Iskender.kg - Отечественный бренд сантехники</p>
                <div className={scss.footer__store}>
                    <a href="#">
                        <img src={insta} alt="" />
                    </a>
                    <a href="#">
                        <img src={face} alt="" />
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
