import React, { useState } from 'react'
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom'
import Rout from './components/rout'
import Footer from './components/footer';
import HomeProduct from './components/home_product';



const App = () => {
  const [shop, setshop] = useState(HomeProduct)

  const [cart, setcart] = useState([])

  const [search, setsearch] = useState('')

  const Filter = (x) => {
    const catefilter = HomeProduct.filter((product) => {
      return product.cat === x
    })
    setshop(catefilter)

  }
  const allcatefilter = () => {
    setshop(HomeProduct)
  }

  const searchproduct = () => {
    const searchfilter = HomeProduct.filter((x) => {
      return x.cat === search
    })
    setsearch(searchfilter)
  }

  
  const addtocart = (product) => {

    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {
      alert("This product is already added in cart")
    }
    else{
      setcart([...cart, { ...product, qty: 1 }])
      alert("Added to cart")
      
    }

   
    


  }
 
  

  return (
    <>

      <BrowserRouter>
        <Nav search={search} setsearch={setsearch} searchproduct={searchproduct} />
        <Rout setcart={setcart} cart={cart}  shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;