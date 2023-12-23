import Header from "./components/header/index";
import Footer from "./components/footer";
import SpecialOffers from "./components/special_offers";
import Category from "./components/category";
import Products from "./components/products";
import News from "./components/news";
import Address from "./components/address";

function App() {
    return (
        <>
            <Header />
            <main>
                <SpecialOffers />
                <Category />
                <Products />
                <News />
                <Products />
                <Address />
            </main>
            <Footer />
        </>
    );
}

export default App;
