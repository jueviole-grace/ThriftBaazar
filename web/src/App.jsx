import Autocomplete from "./Components/Search"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ProductCards from "./Components/ProductCards"
import Product from "./Components/Product"
// import SignUp from "./Components/SignUp"
import './Styles/App.css'



function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <ProductCards /> */}
        <Product />
        <Footer />
    </div>
  )
}

export default App
