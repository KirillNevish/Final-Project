import React from 'react';
import style from './ProductCards.module.css'
import {Link} from 'react-router-dom'
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import shoeone from './images/shoes/122601137-red-sneaker-shoe-simple-vector-image.jpg'
import shoetwo from './images/shoes/15518964-обуви-холсте.jpg'
import shoethree from './images/shoes/207973165-colored-sneaker-on-a-white-background-sports-shoes-vector-illustration.jpg'

import sweaterone from './images/upperclothing/123067427-knitted-brown-sweater-with-a-traditional-pattern-of-iceland-vector-illustration-on-white-background.jpg'
import shirtone from './images/upperclothing/204232947-t-shirt-icon-vector-image-suitable-for-mobile-apps-web-apps-and-print-media.jpg'
import shirttwo from './images/upperclothing/82096624-referee-tshirt-wear-icon-vector-illustration-graphic-design.jpg'

import jeansone from './images/lowerclothing/117837592-fashion-jeans-vector-design.jpg'
import jeanstwo from './images/lowerclothing/195235108-pair-of-dark-blue-jeans-for-babies-and-kids-cartoon-illustration-hand-drawn-jeans-on-white.jpg'
import jeansthree from './images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg'

// import UpperClothing from '../Pages/AllShirtsHoodiesSweaters/UpperClothing'
// import PantsShorts from '../Pages/AllPantsShorts/PantsShorts'
// import Shoes from '../Pages/AllShoes/Shoes' 


function ProductCards() {
//Shirts&Hoodies
  let ClassicSweaterName='Classic Winter Sweater'
  let ClassicSweaterPrice='$50.00'

  let ClassicBlueTSName='Classic Blue T-Shirt'
  let ClassicBlueTSPrice='$30.00'

  let BlueTSWithLinesName='Classic Blue T-Shirt with lines'
  let BlueTSWithLinesPrice='$27.00'
//Pants&Shorts
  let BlueLongJeansName='Blue Long Jeans'
  let BlueLongJeansPrice='$42.00'

  let BlueLongShortsName='Blue Long Shorts'
  let BlueLongShortsPrice='$30.00'

  let ClassicBrownJeansName='Classic Brown Jeans'
  let ClassicBrownJeansPrice='$29.00'
//Shoes
let BlackPinkSneakersName='Black&Pink Sneakers'
let BlackPinkSneakersPrice='$20.00'

let ClassicBlueWhiteSneakersName='Classic Blue&White Sneakers'
let ClassicBlueWhiteSneakersPrice='$20.00'

let ClassicRedSneakersName='Classic Red Sneakers'
let ClassicRedSneakersPrice='$25.00'

    return (
      <>
      <nav class="container-fluid">
            <div class="container-fluid m-lg-2 d-flex justify-content-center">
                <div class="container-xl d-flex p-2 justify-content-between align-items-end">
                <div class="fs-4 text-secondary">
                    Shirts & Hoodies:
                </div>
                <button id={style.buttonAllId} class="fs-4 border border-0">
                <Link to="/upperclothing" class="nav-link px-2 text-secondary">See all</Link>
                </button>
                </div>
            </div>
            <div class="container" bis_skin_checked="1">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1" bis_skin_checked="1">
  <button class="col border border-0 bg-transparent" bis_skin_checked="1">
  <Link to="/classicwintersweater" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
    <img src={sweaterone} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{ClassicSweaterName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{ClassicSweaterPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>

  <button class="col border border-0 bg-transparent" bis_skin_checked="1">
  <Link to="/classicbluet-shirt" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
    <img src={shirtone} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{ClassicBlueTSName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{ClassicBlueTSPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>

  <button class="col border border-0 bg-transparent " bis_skin_checked="1">
  <Link to="/classicbluet-shirtwithlines" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
    <img src={shirttwo} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{BlueTSWithLinesName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{BlueTSWithLinesPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>
  </div>
</div>
</nav>

<nav class="container-fluid">
            <div class="container-fluid m-lg-2 d-flex justify-content-center">
                <div class="container-xl d-flex p-2 justify-content-between align-items-end">
                <div class="fs-4 text-secondary">
                    Pants & Shorts:
                </div>
                <button id={style.buttonAllId} class="fs-4 border border-0">
                  <Link to="/lowerclothing" class="nav-link px-2 text-secondary">See all</Link>
                </button>
                </div>
            </div>
            <div class="container" bis_skin_checked="1">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1" bis_skin_checked="1">
  <button class="col border border-0 bg-transparent " bis_skin_checked="1">
  <Link to="/bluelongjeans" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
    <img src={jeansone} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{BlueLongJeansName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{BlueLongJeansPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>

  <button class="col border border-0 bg-transparent" bis_skin_checked="1">
  <Link to="/bluelongshorts" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
    <img src={jeanstwo} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{BlueLongShortsName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{BlueLongShortsPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>

  <button class="col border border-0 bg-transparent " bis_skin_checked="1">
  <Link to="/classicbrownjeans" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
    <img src={jeansthree} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{ClassicBrownJeansName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{ClassicBrownJeansPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>
  </div>
</div>
</nav>

<nav class="container-fluid">
            <div class="container-fluid  m-lg-2 d-flex justify-content-center">
                <div class="container-xl d-flex p-2 justify-content-between align-items-end">
                <div class="fs-4 text-secondary">
                    Shoes:
                </div>
                <button id={style.buttonAllId} class="fs-4 border border-0">
                  <Link to="/shoes" class="nav-link px-2 text-secondary">See all</Link>
                </button>
                </div>
            </div>
            <div class="container" bis_skin_checked="1">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1" bis_skin_checked="1">
  <button class="col border border-0 bg-transparent" bis_skin_checked="1">
  <Link to="/classicredsneakers" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
      <img src={shoeone} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{ClassicRedSneakersName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{ClassicRedSneakersPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>

  <button class="col border border-0 bg-transparent" bis_skin_checked="1">
  <Link to="/black&pinksneakers" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
    <img src={shoetwo} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{BlackPinkSneakersName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{BlackPinkSneakersPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>

  <button class="col border border-0 bg-transparent" bis_skin_checked="1">
  <Link to="/classicblue&whitesneakers" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    <div class="card shadow-sm" bis_skin_checked="1">
    <img src={shoethree} height="300" alt="img" />
      <div class="card-body" bis_skin_checked="1">
        <p class="card-text d-flex justify-content-between align-items-center">{ClassicBlueWhiteSneakersName}</p>
        <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
          <small class="text-body-secondary">{ClassicBlueWhiteSneakersPrice}</small>
        </div>
      </div>
    </div>
    </Link>
  </button>
  </div>
</div>
</nav>
      </>
    );
}

export default ProductCards;

