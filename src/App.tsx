import Header from "./components/header/index";
import SpecialOffers from "./components/special_offers";
import Category from "./components/category";
import Products from "./components/products";
import News from "./components/news";
import Footer from "./components/footer";
import Address from "./components/address";

function App() {
    return (
        <>
            <Header />
            <main>
                <SpecialOffers />
                <Category />
                <Products title="Хиты продаж" />
                <News />
                <Products title="Аукционные товары" />
                <Address />
            </main>
            <Footer />
        </>
    );
}

export default App;
