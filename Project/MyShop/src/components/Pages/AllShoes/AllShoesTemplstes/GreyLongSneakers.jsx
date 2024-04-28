import React, { useState } from 'react';
import shoesix from '../../../MainProducts/images/shoes/134412647-male-shoe-icon-design-cloth-fashion-style-wear-shop-retail-and-store-theme-vector-illustration.jpg'
import StarRating from '../../../Stars/StarRating';
import style from '../../AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/Templates.module.css'
import { Link } from 'react-router-dom';
import Footer from '../../../DefaultFooter/Footer';

function GreyLongSneakers() {
    let ProductName ='Grey Long Sneakers';

    let ProductPrice ='$22.00';

    let ProductDescription ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.';

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId === selectedButton ? null : buttonId);
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    // Массив изображений
    const images = [
        shoesix
    ];

    // Обработчик события для изменения текущего индекса изображения
    const handleImageClick = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };


    return (
        <>
                                                                                <div class="container-fluid justify-content-center">
            <div class="container-xl p-2 d-flex flex-column flex-md-row">
                <div class="col-md-6">
                    <img src={images[currentIndex]} class="img-fluid" alt="img" />
                </div>
                <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
                    <p class="fs-1 mx-2">{ProductName}</p>
                    <div class="mx-2 pt-2 fs-5">
                      <StarRating></StarRating>
                    </div>
                    <p class="fs-4 pt-2 mx-2">{ProductPrice}</p>
                    <div class=" w-100 pt-2" onClick={handleImageClick}>
                        <p class="fs-4 mx-2">Photos:</p>
                        <div style={{ display: 'flex' }}>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    style={{ width: 70, height: 70, marginRight: 10, cursor: 'pointer' }}
                                    alt={`photo-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div class="w-100 pt-2">
                        <p class="fs-4 mx-2">Size:</p>
                        <div>
            <div className="d-flex p-2 justify-content-evenly">
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 1 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >
                    37
                </button>
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 2 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(2)}
                >
                    38
                </button>
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 3 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(3)}
                >
                    39
                </button>
            </div>
            <div className="d-flex p-2 justify-content-evenly">
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 4 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(4)}
                >
                    40
                </button>
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 5 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(5)}
                >
                    41
                </button>
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 6 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(6)}
                >
                    42
                </button>
            </div>
            <div className="d-flex p-2 justify-content-evenly">
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 7 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(7)}
                >
                    43
                </button>
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 8 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(8)}
                >
                    44
                </button>
                <button
                    id={style.buttonAllId}
                    className={`fs-5 px-3 border rounded ${selectedButton === 9 ? 'text-bg-secondary' : ''}`}
                    onClick={() => handleButtonClick(9)}
                >
                    45
                </button>
            </div>

                        </div>
                    </div>
                    <div class="w-100 pt-5 d-flex justify-content-center align-items-center">
                        <button type="button" className="btn btn-warning p-2 w-75 fs-5">
                        <Link to="/cart" className="text-decoration-none text-black border">
                            Add to Cart
                        </Link>
                        </button>
                    </div>
                    <div class="w-100 pt-5 align-items-center">
                    <p class="fs-4 mx-2">Description:</p>
                    <p class="fs-5 mx-2 text-secondary">{ProductDescription}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default GreyLongSneakers;