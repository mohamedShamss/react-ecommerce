
import './App.css';
// import { words } from './words'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import data from './data.json'
import Products from './components/Products/Products';
import React , {useState} from 'react'
export default function App() {
  const [products , setProducts] = useState(data);
  // console.log(products);
  return (
    <div className="layout">
      <Header/>
      <main>
        <div className='wrapper'>
           <Products products={products} /> 
          <div className='filter-side' > Filter </div>
        </div> {/* wrapper */}
      </main>
      <Footer/>
    </div> 
  );
}


