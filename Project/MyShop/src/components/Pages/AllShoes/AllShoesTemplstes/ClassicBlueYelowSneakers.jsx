

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import shoefive from '../../../MainProducts/images/shoes/206477206-cute-sneakers-sneakers-isolated-on-white-background-cartoon-shoes-vector-illustration.jpg'
import StarRating from '../../../Stars/StarRating';
import style from '../../AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/Templates.module.css'
import Footer from '../../../DefaultFooter/Footer';

function ClassicBlueYelowSneakers() {


    const ProductName = 'Classic Blue&Yellow Sneakers';
    const ProductPrice = '27,00';
    const ProductDescription = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.';

    const [selectedButton, setSelectedButton] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve cart items from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId === selectedButton ? null : buttonId);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [shoefive];

    const handleImageClick = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    const handleAddToCart = () => {
        // Check if the user is logged in
        const isLoggedIn = document.cookie.includes('AccsuccefullyLogined');

        // If logged in, add the product to the cart
        if (isLoggedIn) {
            const isInCart = cartItems.some(item => item.name === ProductName && item.selectedSize === selectedButton);
            if (!isInCart) {
                // Add the product to the cart if it's not already in the cart
                const productData = {
                    name: ProductName,
                    price: ProductPrice,
                    description: ProductDescription,
                    image: shoefive,
                    selectedSize: selectedButton,
                    pagePath: window.location.pathname
                };
                const updatedCart = [...cartItems, productData];
                setCartItems(updatedCart);
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            }
            navigate('/cart'); // Redirect to the cart page
        } else {
            navigate('/signin'); // Redirect to the signin page
        }
    };

    const handleRemoveFromCart = () => {
        // Remove the product from the cart
        const updatedCart = cartItems.filter(item => !(item.name === ProductName && item.selectedSize === selectedButton));
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };




    return (
        <>
        <div className="container-fluid justify-content-center">
            <div className="container-xl p-2 d-flex flex-column flex-md-row">
                <div className="col-md-6">
                    <img src={images[currentIndex]} className="img-fluid" alt="img" />
                </div>
                <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
                    <p className="fs-1 mx-2">{ProductName}</p>
                    <div className="mx-2 pt-2 fs-5">
                        <StarRating />
                    </div>
                    <p className="fs-4 pt-2 mx-2">{ProductPrice}</p>
                    <div className="w-100 pt-2" onClick={handleImageClick}>
                        <p className="fs-4 mx-2">Photos:</p>
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
                    <div className="w-100 pt-2">
                        <p className="fs-4 mx-2">Size:</p>
                        <div className="d-flex p-2 justify-content-evenly">
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 1 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(1)}
                        >
                            1) 37
                        </button>
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 2 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(2)}
                        >
                            2) 38
                        </button>
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 3 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(3)}
                        >
                            3) 39
                        </button>
                    </div>
                    <div className="d-flex p-2 justify-content-evenly">
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 4 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(4)}
                        >
                            4) 40
                        </button>
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 5 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(5)}
                        >
                            5) 41
                        </button>
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 6 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(6)}
                        >
                            6) 42
                        </button>
                    </div>
                    <div className="d-flex p-2 justify-content-evenly">
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 7 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(7)}
                        >
                            7) 43
                        </button>
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 8 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(8)}
                        >
                            8) 44
                        </button>
                        <button
                            id={style.buttonAllId}
                            className={`fs-5 px-3 border rounded ${selectedButton === 9 ? 'text-bg-secondary' : ''}`}
                            onClick={() => handleButtonClick(9)}
                        >
                            9) 45
                        </button>
                    </div>
                    </div>
                    <div className="w-100 pt-5 d-flex justify-content-center align-items-center">
                        {cartItems.some(item => item.name === ProductName && item.selectedSize === selectedButton) ? (
                            <button type="button" className="btn btn-danger p-2 w-75 fs-5" onClick={handleRemoveFromCart}>
                                Remove from Cart
                            </button>
                        ) : (
                            <button type="button" className="btn btn-warning p-2 w-75 fs-5" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        )}
                    </div>
                    <div className="w-100 pt-5 align-items-center">
                        <p className="fs-4 mx-2">Description:</p>
                        <p className="fs-5 mx-2 text-secondary">{ProductDescription}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </> 
    );
}

export default ClassicBlueYelowSneakers;