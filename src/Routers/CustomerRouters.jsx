import { Route, Router, Routes } from "react-router-dom";

import Cart from "../customer/components/Cart/Cart";
import Checkout from "../customer/components/Checkout/Checkout";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import HomePage from "../customer/pages/HomePage/HomePage";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";

const CustomerRouters = () => {
    return ( 
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path="/login" element={<HomePage/>}/>
                <Route path="/register" element={<HomePage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}/>
                <Route path="/product/:productId" element={<ProductDetails/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/account/order" element={<Order/>}/>
                <Route path="/account/order/:orderId" element={<OrderDetails/>}/>
                <Route path="/payment/:orderId" element={<PaymentSuccess/>}/>

            </Routes>
            <div>
                <Footer />
            </div>
        </div>
     );
}
 
export default CustomerRouters;