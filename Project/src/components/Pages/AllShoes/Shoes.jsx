import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../MainProducts/ProductCards.module.css';
import shoeone from '../../MainProducts/images/shoes/122601137-red-sneaker-shoe-simple-vector-image.jpg';
import shoetwo from '../../MainProducts/images/shoes/15518964-обуви-холсте.jpg';
import shoethree from '../../MainProducts/images/shoes/207973165-colored-sneaker-on-a-white-background-sports-shoes-vector-illustration.jpg';
import shoefour from '../../MainProducts/images/shoes/206477197-cute-sneakers-sneakers-isolated-on-white-background-cartoon-shoes-vector-illustration.jpg';
import shoefive from '../../MainProducts/images/shoes/206477206-cute-sneakers-sneakers-isolated-on-white-background-cartoon-shoes-vector-illustration.jpg';
import shoesix from '../../MainProducts/images/shoes/134412647-male-shoe-icon-design-cloth-fashion-style-wear-shop-retail-and-store-theme-vector-illustration.jpg';

function Shoes() {
  // Определяем массив продуктов для обуви
  const shoesProducts = [
    { name: 'Classic Red Sneakers', image: shoeone, price: '$25.00' },
    { name: 'Black&Pink Sneakers', image: shoetwo, price: '$20.00' },
    { name: 'Classic Blue&White Sneakers', image: shoethree, price: '$20.00' },
    { name: 'Classic Brown&Yellow Sneakers', image: shoefour, price: '$26.00' },
    { name: 'Classic Blue&Yellow Sneakers', image: shoefive, price: '$27.00' },
    { name: 'Grey Long Sneakers', image: shoesix, price: '$22.00' }
  ];

  // Создаем состояние для хранения текста поиска
  const [searchQuery, setSearchQuery] = useState('');

  // Функция обработки события изменения текста в поле поиска
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Фильтрация продуктов по тексту поиска
  const filteredProducts = shoesProducts.filter((product) =>
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

export default Shoes;