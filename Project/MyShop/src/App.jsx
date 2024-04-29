import Header from './components/StickHeader/Header';
// import ProductCards from './components/MainProducts/ProductCards';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'

import About from './components/Pages/NavAbout/About';
import New from './components/Pages/NavNew/New';
import Home from './components/Pages/MainHome/Home';

import SignInPage from './components/Pages/SignIn/SignInPage';

import UpperClothing from './components/Pages/AllShirtsHoodiesSweaters/UpperClothing'
import PantsShorts from './components/Pages/AllPantsShorts/PantsShorts'
import Shoes from './components/Pages/AllShoes/Shoes'

import ClassicWinterSweater from './components/Pages/AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/ClassicWinterSweater';
import ClassicBlueTShirt from './components/Pages/AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/ClassicBlueTShirt';
import ClassicBlueTShirtWithLines from './components/Pages/AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/ClassicBlueTShirtWithLines';
import ClassicGreenTShirtWithLines from './components/Pages/AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/ClassicGreenTShirtWithLines';
import ClassicBlackTShirt from './components/Pages/AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/ClassicBlackTShirt';
import GreyBlueTShirt from './components/Pages/AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/GreyBlueTShirt';

import BlueLongJeans from './components/Pages/AllPantsShorts/PantsShortsTemplates/BlueLongJeans';
import BlueLongShorts from './components/Pages/AllPantsShorts/PantsShortsTemplates/BlueLongShorts';
import ClassicBrownJeans from './components/Pages/AllPantsShorts/PantsShortsTemplates/ClassicBrownJeans';
import YellowPants from './components/Pages/AllPantsShorts/PantsShortsTemplates/YellowPants';
import ClassicBluePants from './components/Pages/AllPantsShorts/PantsShortsTemplates/ClassicBluePants';
import ClassicBlackJeans from './components/Pages/AllPantsShorts/PantsShortsTemplates/ClassicBlackJeans';

import ClassicRedSneakers from './components/Pages/AllShoes/AllShoesTemplstes/ClassicRedSneakers';
import BlackPinkSneakers from './components/Pages/AllShoes/AllShoesTemplstes/BlackPinkSneakers';
import ClassicBlueWhiteSneakers from './components/Pages/AllShoes/AllShoesTemplstes/ClassicBlueWhiteSneakers';
import ClassicBrownYellowSneakers from './components/Pages/AllShoes/AllShoesTemplstes/ClassicBrownYellowSneakers';
import ClassicBlueYelowSneakers from './components/Pages/AllShoes/AllShoesTemplstes/ClassicBlueYelowSneakers';
import GreyLongSneakers from './components/Pages/AllShoes/AllShoesTemplstes/GreyLongSneakers';

import Cart from './components/Pages/ProductCart/Cart';

import CheckoutPage from './components/Pages/Checkout/CheckoutPage';


import { Route, Routes} from 'react-router-dom'
// import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <>
    <div className='App'>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<New />} />
        <Route path="/signin" element={<SignInPage />} />


        <Route path="/shoes" element={<Shoes />} />
        <Route path="/upperclothing" element={<UpperClothing />} />
        <Route path="/lowerclothing" element={<PantsShorts />} />

        <Route path="/classicwintersweater" element={<ClassicWinterSweater />} />
        <Route path="/classicbluet-shirt" element={<ClassicBlueTShirt />} />
        <Route path="/classicbluet-shirtwithlines" element={<ClassicBlueTShirtWithLines />} />
        <Route path="/classicgreent-shirtwithlines" element={<ClassicGreenTShirtWithLines />} />
        <Route path="/classicblackt-shirt" element={<ClassicBlackTShirt />} />
        <Route path="/grey&bluet-shirt" element={<GreyBlueTShirt />} />

        <Route path="/bluelongjeans" element={<BlueLongJeans />} />
        <Route path="/bluelongshorts" element={<BlueLongShorts />} />
        <Route path="/classicbrownjeans" element={<ClassicBrownJeans />} />
        <Route path="/yellowpants" element={<YellowPants />} />
        <Route path="/classicbluepants" element={<ClassicBluePants />} />
        <Route path="/classicblackjeans" element={<ClassicBlackJeans />} />
        

        <Route path="/classicredsneakers" element={<ClassicRedSneakers />} />
        <Route path="/black&pinksneakers" element={<BlackPinkSneakers />} />
        <Route path="/classicblue&whitesneakers" element={<ClassicBlueWhiteSneakers />} />
        <Route path="/classicbrown&yellowsneakers" element={<ClassicBrownYellowSneakers />} />
        <Route path="/classicblue&yellowsneakers" element={<ClassicBlueYelowSneakers />} />
        <Route path="/greylongsneakers" element={<GreyLongSneakers />} />

        <Route path="/cart" element={<Cart/>} />

        <Route path="/checkout" element={<CheckoutPage/>} />

      </Routes>
    </div>
    </>
  )
}

export default App



