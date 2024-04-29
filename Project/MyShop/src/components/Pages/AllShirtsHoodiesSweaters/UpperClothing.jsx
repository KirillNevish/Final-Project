
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../MainProducts/ProductCards.module.css';
import sweaterone from '../../MainProducts/images/upperclothing/123067427-knitted-brown-sweater-with-a-traditional-pattern-of-iceland-vector-illustration-on-white-background.jpg';
import shirtone from '../../MainProducts/images/upperclothing/204232947-t-shirt-icon-vector-image-suitable-for-mobile-apps-web-apps-and-print-media.jpg';
import shirttwo from '../../MainProducts/images/upperclothing/82096624-referee-tshirt-wear-icon-vector-illustration-graphic-design.jpg';
import shirtthree from '../../MainProducts/images/upperclothing/82096603-referee-tshirt-wear-icon-vector-illustration-graphic-design.jpg';
import shirtfour from '../../MainProducts/images/upperclothing/84277740-рубашка-в-черный-простой-силуэт-стиль-иконки-векторной-иллюстрации-для-дизайна-и-сети-изолированных.jpg';
import shirtfive from '../../MainProducts/images/upperclothing/205703589-fashionable-men-shirt-design-with-vector-icon.jpg';

function UpperClothing() {
  // Определяем массив продуктов для верхней одежды
  const upperClothingProducts = [
    { name: 'Classic Winter Sweater', image: sweaterone, price: '$50.00' },
    { name: 'Classic Blue T-Shirt', image: shirtone, price: '$30.00' },
    { name: 'Classic Blue T-Shirt with lines', image: shirttwo, price: '$27.00' },
    { name: 'Classic Green T-Shirt with lines', image: shirtthree, price: '$27.00' },
    { name: 'Classic Black T-Shirt', image: shirtfour, price: '$25.00' },
    { name: 'Grey&Blue T-Shirt', image: shirtfive, price: '$34.00' }
  ];

  // Создаем состояние для хранения текста поиска
  const [searchQuery, setSearchQuery] = useState('');

  // Функция обработки события изменения текста в поле поиска
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Фильтрация продуктов по тексту поиска
  const filteredProducts = upperClothingProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <div className="container-xl d-flex p-2 justify-content-between align-items-end">
          <button id={style.buttonAllId} className="fs-4 border border-0">
            <Link to="/" className="nav-link px-2 text-secondary">Back</Link>
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1">
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

export default UpperClothing;