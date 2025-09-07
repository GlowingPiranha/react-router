import { Routes, Route } from "react-router-dom"
import layout from "./components/layout"
import home from "./pages/home"
import about from "./pages/about"
import products from "./pages/products"
import productDetail from "./pages/productDetail"


function App() {

  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<h1>404 — Pagina non trovata</h1>} />
      </Route>

    </Routes>
  )
}

export default App
