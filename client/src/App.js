
import './App.css';
import { words } from './words'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
export default function App() {
  return (
    <div className="layout">
      <Header/>
      <main>{words.content}</main>
      <Footer/>
    </div> 
  );
}


