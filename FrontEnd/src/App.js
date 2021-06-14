import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import HeaderItems from "./components/header-items/header-items";
import Home from "./components/home/home";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import AllItems from "./components/AllItems/allItems";
import Footer from "./components/footer/footer";
import ProductDetailContainer from "./components/ProductDetail/productDetailContainer";
import HowContainer from "./components/how/howContainer";
import AboutContainer from "./components/how/about";
// import handleSubmit from "./components/products/products";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/">
          <Redirect to="/home" />
        </Route> */}
        <Route exact path="/">
          <Header />
          <Home />
          <ItemListContainer />
        </Route>
        <Route exact path="/categories/:categ">
          <HeaderItems />
          <ItemListContainer />
        </Route>
        <Route exact path="/categories">
          <HeaderItems />
          <AllItems />
        </Route>
        <Route exact path="/item/:id">
          <HeaderItems />
          <ProductDetailContainer />
        </Route>
        <Route exact path="/how">
          <HeaderItems />
          <HowContainer />
        </Route>
        <Route exact path="/about">
          <HeaderItems />
          <AboutContainer />
        </Route>
        <Route exact path="/products">
          <HeaderItems />
          <handleSubmit />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
