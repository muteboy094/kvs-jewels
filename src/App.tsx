import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"

import Header from "./components/Header"
import Footer from "./components/Footer"

import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CheckoutPage from "./pages/CheckoutPage"
import ContactPage from "./pages/ContactPage"

import AdminLoginPage from "./pages/AdminLoginPage"
import AdminDashboard from "./pages/AdminDashboard"

function App() {

return (

<CartProvider>

<BrowserRouter>

<Routes>

{/* PUBLIC WEBSITE */}

<Route
path="/"
element={
<>
<Header/>
<HomePage/>
<Footer/>
</>
}
/>

<Route
path="/shop"
element={
<>
<Header/>
<ShopPage/>
<Footer/>
</>
}
/>

<Route
path="/product/:id"
element={
<>
<Header/>
<ProductDetailPage/>
<Footer/>
</>
}
/>

<Route
path="/checkout"
element={
<>
<Header/>
<CheckoutPage/>
<Footer/>
</>
}
/>

<Route
path="/contact"
element={
<>
<Header/>
<ContactPage/>
<Footer/>
</>
}
/>


{/* ADMIN AREA */}

<Route path="/admin-login" element={<AdminLoginPage/>} />

<Route path="/admin" element={<AdminDashboard/>} />

</Routes>

</BrowserRouter>

</CartProvider>

)

}

export default App