// import React from 'react';
// import Footer from '../../DefaultFooter/Footer';
// import {Link} from 'react-router-dom'
// import style from '../../MainProducts/ProductCards.module.css'
// import jeansone from '../../MainProducts/images/lowerclothing/117837592-fashion-jeans-vector-design.jpg'
// import jeanstwo from '../../MainProducts/images/lowerclothing/195235108-pair-of-dark-blue-jeans-for-babies-and-kids-cartoon-illustration-hand-drawn-jeans-on-white.jpg'
// import jeansthree from '../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg'
// import jeansfour from '../../MainProducts/images/lowerclothing/173790220-long-skinny-pants-color-variation-for-coloring-page-isolated-on-white-background.jpg'
// import jeansfive from '../../MainProducts/images/lowerclothing/176183903-illustration-denim-jeans-pants-front-view-jeans-vector-icon-cartoon-isolated-on-white-background.jpg'
// import jeanssix from '../../MainProducts/images/lowerclothing/53358922-мультфильм-джинсовые-брюки-детали-силуэты-джинсовой-мужской-одежды-черные-джинсы-на-белом-фоне.jpg'

// function PantsShorts(props) {

//   const pantsShortsProducts = ['Blue Long Jeans', 'Blue Long Shorts', 'Classic Brown Jeans', 'Yellow Pants', 'Classic Blue Pants','Classic Black Jeans'];

//   let BlueLongJeansName='Blue Long Jeans'
//   let BlueLongJeansPrice='$42.99'

//   let BlueLongShortsName='Blue Long Shorts'
//   let BlueLongShortsPrice='$30.00'

//   let ClassicBrownJeansName='Classic Brown Jeans'
//   let ClassicBrownJeansPrice='$29.99'

//   let YellowLongName='Yellow Pants'
//   let YellowLongPrice='$44.99'

//   let BlueLongPantsName='Classic Blue Pants'
//   let BlueLongPantsPrice='$40.00'

//   let BlackJeansName='Classic Black Jeans'
//   let BlackJeansPrice='$45.00'

//     return (
//         <>
//         <nav class="container-fluid pt-2">
//                         <div class="container-fluid m-lg-2 d-flex justify-content-center">
//                 <div class="container-xl d-flex p-2 justify-content-between align-items-end">
//                 <button id={style.buttonAllId}  class="fs-4 border border-0">
//                 <Link to="/" class="nav-link px-2 text-secondary">Back</Link>
//                 </button>
//                 </div>
//             </div> 
//             <div class="container" bis_skin_checked="1">
// <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1" bis_skin_checked="1">
//   <button class="col border border-0 bg-transparent " bis_skin_checked="1">
//   <Link to="/bluelongjeans" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
//     <div class="card shadow-sm" bis_skin_checked="1">
//     <img src={jeansone} height="300" alt="img" />
//       <div class="card-body" bis_skin_checked="1">
//         <p class="card-text d-flex justify-content-between align-items-center">{BlueLongJeansName}</p>
//         <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
//           <small class="text-body-secondary">{BlueLongJeansPrice}</small>
//         </div>
//       </div>
//     </div>
//     </Link>
//   </button>

//   <button class="col border border-0 bg-transparent" bis_skin_checked="1">
//   <Link to="/bluelongshorts" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
//     <div class="card shadow-sm" bis_skin_checked="1">
//     <img src={jeanstwo} height="300" alt="img" />
//       <div class="card-body" bis_skin_checked="1">
//         <p class="card-text d-flex justify-content-between align-items-center">{BlueLongShortsName}</p>
//         <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
//           <small class="text-body-secondary">{BlueLongShortsPrice}</small>
//         </div>
//       </div>
//     </div>
//     </Link>
//   </button>

//   <button class="col border border-0 bg-transparent " bis_skin_checked="1">
//   <Link to="/brownjeans" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
//     <div class="card shadow-sm" bis_skin_checked="1">
//     <img src={jeansthree} height="300" alt="img" />
//       <div class="card-body" bis_skin_checked="1">
//         <p class="card-text d-flex justify-content-between align-items-center">{ClassicBrownJeansName}</p>
//         <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
//           <small class="text-body-secondary">{ClassicBrownJeansPrice}</small>
//         </div>
//       </div>
//     </div>
//     </Link>
//   </button>

//   <button class="col border border-0 bg-transparent " bis_skin_checked="1">
//   <Link to="/yellowpants" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
//     <div class="card shadow-sm" bis_skin_checked="1">
//     <img src={jeansfour} height="300" alt="img" />
//       <div class="card-body" bis_skin_checked="1">
//         <p class="card-text d-flex justify-content-between align-items-center">{YellowLongName}</p>
//         <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
//           <small class="text-body-secondary">{YellowLongPrice}</small>
//         </div>
//       </div>
//     </div>
//     </Link>
//   </button>

//   <button class="col border border-0 bg-transparent" bis_skin_checked="1">
//   <Link to="/bluepants" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
//     <div class="card shadow-sm" bis_skin_checked="1">
//     <img src={jeansfive} height="300" alt="img" />
//       <div class="card-body" bis_skin_checked="1">
//         <p class="card-text d-flex justify-content-between align-items-center">{BlueLongPantsName}</p>
//         <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
//           <small class="text-body-secondary">{BlueLongPantsPrice}</small>
//         </div>
//       </div>
//     </div>
//     </Link>
//   </button>

//   <button class="col border border-0 bg-transparent " bis_skin_checked="1">
//   <Link to="/blackjeans" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
//     <div class="card shadow-sm" bis_skin_checked="1">
//     <img src={jeanssix} height="300" alt="img" />
//       <div class="card-body" bis_skin_checked="1">
//         <p class="card-text d-flex justify-content-between align-items-center">{BlackJeansName}</p>
//         <div class="d-flex justify-content-between align-items-center" bis_skin_checked="1">
//           <small class="text-body-secondary">{BlackJeansPrice}</small>
//         </div>
//       </div>
//     </div>
//     </Link>
//   </button>
//   </div>
// </div>
// </nav>

// <Footer></Footer>
//         </>
//     );
// }

// export default PantsShorts;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../MainProducts/ProductCards.module.css';
import jeansone from '../../MainProducts/images/lowerclothing/117837592-fashion-jeans-vector-design.jpg';
import jeanstwo from '../../MainProducts/images/lowerclothing/195235108-pair-of-dark-blue-jeans-for-babies-and-kids-cartoon-illustration-hand-drawn-jeans-on-white.jpg';
import jeansthree from '../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg';
import jeansfour from '../../MainProducts/images/lowerclothing/173790220-long-skinny-pants-color-variation-for-coloring-page-isolated-on-white-background.jpg';
import jeansfive from '../../MainProducts/images/lowerclothing/176183903-illustration-denim-jeans-pants-front-view-jeans-vector-icon-cartoon-isolated-on-white-background.jpg';
import jeanssix from '../../MainProducts/images/lowerclothing/107198275-jeans-icon-vector-isolated-on-white-background-for-your-web-and-mobile-app-design.jpg';

function PantsShorts(props) {
  // Определяем массив продуктов для шорт и брюк
  const pantsShortsProducts = [
    { name: 'Blue Long Jeans', image: jeansone, price: '$42.00' },
    { name: 'Blue Long Shorts', image: jeanstwo, price: '$30.00' },
    { name: 'Classic Brown Jeans', image: jeansthree, price: '$29.00' },
    { name: 'Yellow Pants', image: jeansfour, price: '$44.00' },
    { name: 'Classic Blue Pants', image: jeansfive, price: '$40.00' },
    { name: 'Classic Black Jeans', image: jeanssix, price: '$45.00' }
  ];

  // Создаем состояние для хранения текста поиска
  const [searchQuery, setSearchQuery] = useState('');

  // Функция обработки события изменения текста в поле поиска
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Фильтрация продуктов по тексту поиска
  const filteredProducts = pantsShortsProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
                  <div class="container-fluid  d-flex justify-content-center">
                <div class="container-xl d-flex p-2 justify-content-between align-items-end">
                <button id={style.buttonAllId}  class="fs-4 border border-0">
                <Link to="/" class="nav-link px-2 text-secondary">Back</Link>
                </button>
                 </div>
             </div> 

      {/* Поле поиска */}
      <div className="container-fluid pt-2">
        <div className="container-fluid m-lg-2 d-flex justify-content-center">
          <div className="container-xl d-flex p-2 justify-content-between align-items-end">
            <input
              type="text"
              className={style.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* Карточки продуктов */}
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1 ">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col border border-0 bg-transparent">
              {/* Карточка продукта */}
              <Link
                to={`/${encodeURIComponent(product.name.replace(/\s+/g, '').toLowerCase())}`}
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                <div className="card shadow-sm">
                  {/* Изображение продукта */}
                  <img src={product.image} height="300" alt="img" />
                  <div className="card-body">
                    {/* Название продукта */}
                    <p className="card-text d-flex justify-content-between align-items-center">{product.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Цена продукта */}
                      <small className="text-body-secondary">{product.price}</small>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PantsShorts;