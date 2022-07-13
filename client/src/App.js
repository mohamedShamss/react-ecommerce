
import './App.css';
// import { words } from './words'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import data from './data.json'
import Products from './components/Products/Products';
import React , {useState} from 'react'
import Filter from './components/Filter/Filter';
export default function App() {
  const [products , setProducts] = useState(data);
  // console.log(products);
  return (
    <div className="layout">
      <Header/>
      <main>
        <div className='wrapper'>
           <Products products={products} /> 
         <Filter/>
        </div> {/* wrapper */}
      </main>
      <Footer/>
    </div> 
  );
}


