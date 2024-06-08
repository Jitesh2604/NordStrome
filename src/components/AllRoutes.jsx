import { Routes, Route } from "react-router-dom";
import New from "../pages/New";
import Clearance from "../pages/Clearance";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Kids from "../pages/Kids";
import Shoes from "../pages/Shoes";
import Bags_Accessories from "../pages/Bags&Accessories";
import Home from "../pages/Home";
import Beauty from "../pages/Beauty";
import Gift_Guide from "../pages/Gift_Guide";
import Flash_Events from "../pages/Flash_Events";
import Products from "./products";
import SignIn from "../pages/signIn";
import LocationPage from "../pages/LocationPage";
import SingleProduct from "../pages/singleProduct";
import AddToCartPage from "../pages/AddToCart";
import BuyProductPage from "../pages/BuyProductPage";

// import PrivateRoute from "./PrivateRoute";
// import CategoryRoute from "./cateRoute"

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/signIn" element={< SignIn/>}/>
      <Route path="/" element={
      // <CategoryRoute>
        <Products />
      // </CategoryRoute>
      }/>
      <Route path="/AddToCart" element={
        // <PrivateRoute>
            <AddToCartPage />
        // </PrivateRoute>
      } />
      <Route path="/BuyProductPage" element={
        // <PrivateRoute>
          <BuyProductPage/>
        // </PrivateRoute>
       }/>
      <Route path="/New" element={<New />} />
      <Route path="/Clearance" element={<Clearance />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/Men" element={<Men />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Shoes" element={<Shoes />} />
      <Route path="/Bags&Accessories" element={<Bags_Accessories />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Beauty" element={<Beauty />} />
      <Route path="/Gift_Guide" element={<Gift_Guide />} />
      <Route path="/Flash_Events" element={<Flash_Events />} />
      <Route path="/product/:id" element={<SingleProduct/>} />
      <Route path="/LocationPage" element={<LocationPage />} />
    </Routes>
  );
}