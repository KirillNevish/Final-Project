// import React, { useState } from 'react';
// import jeansthree from '../../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg'
// import StarRating from '../../../Stars/StarRating';
// import style from '../../AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/Templates.module.css'
// import { Link } from 'react-router-dom';
// import Footer from '../../../DefaultFooter/Footer';

// function ClassicBrownJeans() {
//     let ProductName ='Classic Brown Jeans';

//     let ProductPrice ='$29.99';

//     let ProductDescription ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.';

//     const [selectedButton, setSelectedButton] = useState(null);

//     const handleButtonClick = (buttonId) => {
//         setSelectedButton(buttonId === selectedButton ? null : buttonId);
//     };

//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Массив изображений
//     const images = [
//         jeansthree
//     ];

//     // Обработчик события для изменения текущего индекса изображения
//     const handleImageClick = () => {
//         const nextIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(nextIndex);
//     };

//     return (
//         <>
//         <div class="container-fluid justify-content-center">
//             <div class="container-xl p-2 d-flex flex-column flex-md-row">
//                 <div class="col-md-6">
//                     <img src={images[currentIndex]} class="img-fluid" alt="img" />
//                 </div>
//                 <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                     <p class="fs-1 mx-2">{ProductName}</p>
//                     <div class="mx-2 pt-2 fs-5">
//                       <StarRating></StarRating>
//                     </div>
//                     <p class="fs-4 pt-2 mx-2">{ProductPrice}</p>
//                     <div class=" w-100 pt-2" onClick={handleImageClick}>
//                         <p class="fs-4 mx-2">Photos:</p>
//                         <div style={{ display: 'flex' }}>
//                             {images.map((image, index) => (
//                                 <img
//                                     key={index}
//                                     src={image}
//                                     style={{ width: 70, height: 70, marginRight: 10, cursor: 'pointer' }}
//                                     alt={`photo-${index}`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                     <div class="w-100 pt-2">
//                         <p class="fs-4 mx-2">Size:</p>
//                         <div>
//             <div className="d-flex p-2 justify-content-evenly">
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 1 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(1)}
//                 >
//                     S — 46-48
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 2 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(2)}
//                 >
//                     M — 48-50
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 3 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(3)}
//                 >
//                     L — 50-52
//                 </button>
//             </div>
//             <div className="d-flex p-2 justify-content-evenly">
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 4 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(4)}
//                 >
//                     XL — 52-54
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 5 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(5)}
//                 >
//                     XXL — 54-56
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 6 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(6)}
//                 >
//                     3XL – 56- 58
//                 </button>
//             </div>

//                         </div>
//                     </div>
//                     <div class="w-100 pt-5 d-flex justify-content-center align-items-center">
//                         <button type="button" className="btn btn-warning p-2 w-75 fs-5">
//                         <Link to="/cart" className="text-decoration-none text-black border">
//                             Add to Cart
//                         </Link>
//                         </button>
//                     </div>
//                     <div class="w-100 pt-5 align-items-center">
//                     <p class="fs-4 mx-2">Description:</p>
//                     <p class="fs-5 mx-2 text-secondary">{ProductDescription}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <Footer></Footer>
//         </>
//     );
// }

// export default ClassicBrownJeans;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jeansthree from '../../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg';
// import StarRating from '../../../Stars/StarRating';
// import style from '../../AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/Templates.module.css';
// import Footer from '../../../DefaultFooter/Footer';

// function ClassicBrownJeans() {
//     let ProductName ='Classic Brown Jeans';
//     let ProductPrice ='29,00';
//     let ProductDescription ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.';

//     const [selectedButton, setSelectedButton] = useState(null);

//     const handleButtonClick = (buttonId) => {
//         setSelectedButton(buttonId === selectedButton ? null : buttonId);
//     };

//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Массив изображений
//     const images = [jeansthree];

//     // Обработчик события для изменения текущего индекса изображения
//     const handleImageClick = () => {
//         const nextIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(nextIndex);
//     };

//     const navigate = useNavigate();

    // const handleAddToCart = () => {
    //     // Retrieve current cart items from localStorage or create an empty array
    //     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    //     // Create a product data object including name, price, description, image, selected size, and page path
    //     const productData = {
    //         name: ProductName,
    //         price: ProductPrice,
    //         description: ProductDescription,
    //         image: jeansthree,
    //         selectedSize: selectedButton,
    //         pagePath: window.location.pathname  // Get the current page path
    //     };
    
    //     // Add the product data to the cart items array
    //     cartItems.push(productData);
    
    //     // Save the updated cart items array to localStorage
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    //     // Redirect the user to the cart page
    //     navigate('/cart');
    // };

    // const handleAddToCart = () => {
    //     // Retrieve current cart items from localStorage or create an empty array
    //     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    //     // Check if the product is already in the cart
    //     const isInCart = cartItems.some(item => item.name === ProductName);
    
    //     if (isInCart) {
    //         // If the product is already in the cart, remove it
    //         const updatedCart = cartItems.filter(item => item.name !== ProductName);
    //         localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    //     } else {
    //         // If the product is not in the cart, add it
    //         const productData = {
    //             name: ProductName,
    //             price: ProductPrice,
    //             description: ProductDescription,
    //             image: jeansthree,
    //             selectedSize: selectedButton,
    //             pagePath: window.location.pathname
    //         };
    //         cartItems.push(productData);
    //         localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //     }
    
        // Redirect the user to the cart page
//         navigate('/cart');
//     };

//     return (
//         <>
//             <div className="container-fluid justify-content-center">
//                 <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                     <div className="col-md-6">
//                         <img src={images[currentIndex]} className="img-fluid" alt="img" />
//                     </div>
//                     <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                         <p className="fs-1 mx-2">{ProductName}</p>
//                         <div className="mx-2 pt-2 fs-5">
//                             <StarRating />
//                         </div>
//                         <p className="fs-4 pt-2 mx-2">{ProductPrice}</p>
//                         <div className="w-100 pt-2" onClick={handleImageClick}>
//                             <p className="fs-4 mx-2">Photos:</p>
//                             <div style={{ display: 'flex' }}>
//                                 {images.map((image, index) => (
//                                     <img
//                                         key={index}
//                                         src={image}
//                                         style={{ width: 70, height: 70, marginRight: 10, cursor: 'pointer' }}
//                                         alt={`photo-${index}`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="w-100 pt-2">
//                             <p className="fs-4 mx-2">Size:</p>
//                             <div className="d-flex p-2 justify-content-evenly">
//                                 <button
//                                     id={style.buttonAllId}
//                                     className={`fs-5 px-3 border rounded ${selectedButton === 1 ? 'text-bg-secondary' : ''}`}
//                                     onClick={() => handleButtonClick(1)}
//                                 >
//                                     S — 46-48
//                                 </button>
//                                 {/* Другие размеры */}
//                             </div>
//                         </div>
//                         <div className="w-100 pt-5 d-flex justify-content-center align-items-center">
//                         <button type="button" className="btn btn-warning p-2 w-75 fs-5" onClick={handleAddToCart}>
//     {cartItems.some(item => item.name === ProductName) ? "Remove from Cart" : "Add to Cart"}
// </button>
//                         </div>
//                         <div className="w-100 pt-5 align-items-center">
//                             <p className="fs-4 mx-2">Description:</p>
//                             <p className="fs-5 mx-2 text-secondary">{ProductDescription}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default ClassicBrownJeans;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jeansthree from '../../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg';
// import StarRating from '../../../Stars/StarRating';
// import style from '../../AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/Templates.module.css';
// import Footer from '../../../DefaultFooter/Footer';

// function ClassicBrownJeans() {
//     let ProductName ='Classic Brown Jeans';
//     let ProductPrice ='29,00';
//     let ProductDescription ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.';

//     const [selectedButton, setSelectedButton] = useState(null);
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         // Retrieve cart items from localStorage
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//     }, []);

//     const handleButtonClick = (buttonId) => {
//         setSelectedButton(buttonId === selectedButton ? null : buttonId);
//     };

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [jeansthree];

//     const handleImageClick = () => {
//         const nextIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(nextIndex);
//     };

//     const navigate = useNavigate();

//     const handleAddToCart = () => {
//         // Check if the product is already in the cart
//         const isInCart = cartItems.some(item => item.name === ProductName);

//         if (isInCart) {
//             // Remove the product from the cart
//             const updatedCart = cartItems.filter(item => item.name !== ProductName);
//             setCartItems(updatedCart);
//             localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//         } else {
//             // Add the product to the cart
//             const productData = {
//                 name: ProductName,
//                 price: ProductPrice,
//                 description: ProductDescription,
//                 image: jeansthree,
//                 selectedSize: selectedButton,
//                 pagePath: window.location.pathname
//             };
//             const updatedCart = [...cartItems, productData];
//             setCartItems(updatedCart);
//             localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//         }

//         // Redirect the user to the cart page
//         navigate('/cart');
//     };

//     return (
//         <>
//             <div className="container-fluid justify-content-center">
//                 <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                     <div className="col-md-6">
//                         <img src={images[currentIndex]} className="img-fluid" alt="img" />
//                     </div>
//                     <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                         <p className="fs-1 mx-2">{ProductName}</p>
//                         <div className="mx-2 pt-2 fs-5">
//                             <StarRating />
//                         </div>
//                         <p className="fs-4 pt-2 mx-2">{ProductPrice}</p>
//                         <div className="w-100 pt-2" onClick={handleImageClick}>
//                             <p className="fs-4 mx-2">Photos:</p>
//                             <div style={{ display: 'flex' }}>
//                                 {images.map((image, index) => (
//                                     <img
//                                         key={index}
//                                         src={image}
//                                         style={{ width: 70, height: 70, marginRight: 10, cursor: 'pointer' }}
//                                         alt={`photo-${index}`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="w-100 pt-2">
//                             <p className="fs-4 mx-2">Size:</p>
//                   <div className="d-flex p-2 justify-content-evenly">
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 1 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(1)}
//                 >
//                     S — 46-48
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 2 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(2)}
//                 >
//                     M — 48-50
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 3 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(3)}
//                 >
//                     L — 50-52
//                 </button>
//             </div>
//             <div className="d-flex p-2 justify-content-evenly">
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 4 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(4)}
//                 >
//                     XL — 52-54
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 5 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(5)}
//                 >
//                     XXL — 54-56
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 6 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(6)}
//                 >
//                     3XL – 56- 58
//                 </button>
//              </div>
//                         </div>
//                         <div className="w-100 pt-5 d-flex justify-content-center align-items-center">
//                             <button type="button" className="btn btn-warning p-2 w-75 fs-5" onClick={handleAddToCart}>
//                                 {cartItems.some(item => item.name === ProductName) ? "Remove from Cart" : "Add to Cart"}
//                             </button>
//                         </div>
//                         <div className="w-100 pt-5 align-items-center">
//                             <p className="fs-4 mx-2">Description:</p>
//                             <p className="fs-5 mx-2 text-secondary">{ProductDescription}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default ClassicBrownJeans;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jeansthree from '../../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg';
// import StarRating from '../../../Stars/StarRating';
// import style from '../../AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/Templates.module.css';
// import Footer from '../../../DefaultFooter/Footer';

// function ClassicBrownJeans() {
//     let ProductName = 'Classic Brown Jeans';
//     let ProductPrice = '29,00';
//     let ProductDescription = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.';

//     const [selectedButton, setSelectedButton] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Retrieve cart items from localStorage
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//     }, []);

//     const handleButtonClick = (buttonId) => {
//         setSelectedButton(buttonId === selectedButton ? null : buttonId);
//     };

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [jeansthree];

//     const handleImageClick = () => {
//         const nextIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(nextIndex);
//     };

//     const handleAddToCart = () => {
//         // Check if the user is logged in
//         const isLoggedIn = document.cookie.includes('AccsuccefullyLogined');

//         // If logged in, add the product to the cart
//         if (isLoggedIn) {
//             const isInCart = cartItems.some(item => item.name === ProductName);
//             if (isInCart) {
//                 // Remove the product from the cart
//                 const updatedCart = cartItems.filter(item => item.name !== ProductName);
//                 setCartItems(updatedCart);
//                 localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//             } else {
//                 // Add the product to the cart
//                 const productData = {
//                     name: ProductName,
//                     price: ProductPrice,
//                     description: ProductDescription,
//                     image: jeansthree,
//                     selectedSize: selectedButton,
//                     pagePath: window.location.pathname
//                 };
//                 const updatedCart = [...cartItems, productData];
//                 setCartItems(updatedCart);
//                 localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//             }
//             navigate('/cart'); // Redirect to the cart page
//         } else {
//             navigate('/signin'); // Redirect to the signin page
//         }
//     };

//     return (
//         <>
//             <div className="container-fluid justify-content-center">
//                 <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                     <div className="col-md-6">
//                         <img src={images[currentIndex]} className="img-fluid" alt="img" />
//                     </div>
//                     <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                         <p className="fs-1 mx-2">{ProductName}</p>
//                         <div className="mx-2 pt-2 fs-5">
//                             <StarRating />
//                         </div>
//                         <p className="fs-4 pt-2 mx-2">{ProductPrice}</p>
//                         <div className="w-100 pt-2" onClick={handleImageClick}>
//                             <p className="fs-4 mx-2">Photos:</p>
//                             <div style={{ display: 'flex' }}>
//                                 {images.map((image, index) => (
//                                     <img
//                                         key={index}
//                                         src={image}
//                                         style={{ width: 70, height: 70, marginRight: 10, cursor: 'pointer' }}
//                                         alt={`photo-${index}`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="w-100 pt-2">
//                             <p className="fs-4 mx-2">Size:</p>
//                             <div className="d-flex p-2 justify-content-evenly">
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 1 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(1)}
//                 >
//                     S — 46-48
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 2 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(2)}
//                 >
//                     M — 48-50
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 3 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(3)}
//                 >
//                     L — 50-52
//                 </button>
//             </div>
//             <div className="d-flex p-2 justify-content-evenly">
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 4 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(4)}
//                 >
//                     XL — 52-54
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 5 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(5)}
//                 >
//                     XXL — 54-56
//                 </button>
//                 <button
//                     id={style.buttonAllId}
//                     className={`fs-5 px-3 border rounded ${selectedButton === 6 ? 'text-bg-secondary' : ''}`}
//                     onClick={() => handleButtonClick(6)}
//                 >
//                     3XL – 56- 58
//                 </button>
//              </div>
//                         </div>
//                         <div className="w-100 pt-5 d-flex justify-content-center align-items-center">
//                             <button type="button" className="btn btn-warning p-2 w-75 fs-5" onClick={handleAddToCart}>
//                                 {cartItems.some(item => item.name === ProductName) ? "Remove from Cart" : "Add to Cart"}
//                             </button>
//                         </div>
//                         <div className="w-100 pt-5 align-items-center">
//                             <p className="fs-4 mx-2">Description:</p>
//                             <p className="fs-5 mx-2 text-secondary">{ProductDescription}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default ClassicBrownJeans;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jeansthree from '../../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg';
// import StarRating from '../../../Stars/StarRating';
// import style from '../../AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/Templates.module.css';
// import Footer from '../../../DefaultFooter/Footer';

// function ClassicBrownJeans() {
//     let ProductName = 'Classic Brown Jeans';
//     let ProductPrice = '29,00';
//     let ProductDescription = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.';

//     const [selectedButton, setSelectedButton] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Retrieve cart items from localStorage
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//     }, []);

//     const handleButtonClick = (buttonId) => {
//         setSelectedButton(buttonId === selectedButton ? null : buttonId);
//     };

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [jeansthree];

//     const handleImageClick = () => {
//         const nextIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(nextIndex);
//     };

//     const handleAddToCart = () => {
//         // Check if the user is logged in
//         const isLoggedIn = document.cookie.includes('AccsuccefullyLogined');

//         // If logged in, add the product to the cart
//         if (isLoggedIn) {
//             const isInCart = cartItems.some(item => item.name === ProductName);
//             if (isInCart && cartItems.some(item => item.selectedSize !== selectedButton)) {
//                 // Remove the product from the cart if the selected size is different
//                 const updatedCart = cartItems.filter(item => item.name !== ProductName);
//                 setCartItems(updatedCart);
//                 localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//             } else if (!isInCart || (isInCart && cartItems.some(item => item.selectedSize !== selectedButton))) {
//                 // Add the product to the cart if it's not already in the cart or if the selected size is different
//                 const productData = {
//                     name: ProductName,
//                     price: ProductPrice,
//                     description: ProductDescription,
//                     image: jeansthree,
//                     selectedSize: selectedButton,
//                     pagePath: window.location.pathname
//                 };
//                 const updatedCart = [...cartItems.filter(item => item.name !== ProductName), productData];
//                 setCartItems(updatedCart);
//                 localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//             }
//             navigate('/cart'); // Redirect to the cart page
//         } else {
//             navigate('/signin'); // Redirect to the signin page
//         }
//     };

//     return (
//         <>
//             <div className="container-fluid justify-content-center">
//                 <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                     <div className="col-md-6">
//                         <img src={images[currentIndex]} className="img-fluid" alt="img" />
//                     </div>
//                     <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                         <p className="fs-1 mx-2">{ProductName}</p>
//                         <div className="mx-2 pt-2 fs-5">
//                             <StarRating />
//                         </div>
//                         <p className="fs-4 pt-2 mx-2">{ProductPrice}</p>
//                         <div className="w-100 pt-2" onClick={handleImageClick}>
//                             <p className="fs-4 mx-2">Photos:</p>
//                             <div style={{ display: 'flex' }}>
//                                 {images.map((image, index) => (
//                                     <img
//                                         key={index}
//                                         src={image}
//                                         style={{ width: 70, height: 70, marginRight: 10, cursor: 'pointer' }}
//                                         alt={`photo-${index}`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="w-100 pt-2">
//                             <p className="fs-4 mx-2">Size:</p>
//                             <div className="d-flex p-2 justify-content-evenly">
//                                 <button
//                                     id={style.buttonAllId}
//                                     className={`fs-5 px-3 border rounded ${selectedButton === 1 ? 'text-bg-secondary' : ''}`}
//                                     onClick={() => handleButtonClick(1)}
//                                 >
//                                     S — 46-48
//                                 </button>
//                                 <button
//                                     id={style.buttonAllId}
//                                     className={`fs-5 px-3 border rounded ${selectedButton === 2 ? 'text-bg-secondary' : ''}`}
//                                     onClick={() => handleButtonClick(2)}
//                                 >
//                                     M — 48-50
//                                 </button>
//                                 <button
//                                     id={style.buttonAllId}
//                                     className={`fs-5 px-3 border rounded ${selectedButton === 3 ? 'text-bg-secondary' : ''}`}
//                                     onClick={() => handleButtonClick(3)}
//                                 >
//                                     L — 50-52
//                                 </button>
//                             </div>
//                             <div className="d-flex p-2 justify-content-evenly">
//                                 <button
//                                     id={style.buttonAllId}
//                                     className={`fs-5 px-3 border rounded ${selectedButton === 4 ? 'text-bg-secondary' : ''}`}
//                                     onClick={() => handleButtonClick(4)}
//                                 >
//                                     XL — 52-54
//                                 </button>
//                                 <button
//                                     id={style.buttonAllId}
//                                     className={`fs-5 px-3 border rounded ${selectedButton === 5 ? 'text-bg-secondary' : ''}`}
//                                     onClick={() => handleButtonClick(5)}
//                                 >
//                                     XXL — 54-56
//                                 </button>
//                                 <button
//                                     id={style.buttonAllId}
//                                     className={`fs-5 px-3 border rounded ${selectedButton === 6 ? 'text-bg-secondary' : ''}`}
//                                     onClick={() => handleButtonClick(6)}
//                                 >
//                                     3XL – 56- 58
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="w-100 pt-5 d-flex justify-content-center align-items-center">
//                             <button type="button" className="btn btn-warning p-2 w-75 fs-5" onClick={handleAddToCart}>
//                                 {cartItems.some(item => item.name === ProductName && item.selectedSize === selectedButton) ? "Remove from Cart" : "Add to Cart"}
//                             </button>
//                         </div>
//                         <div className="w-100 pt-5 align-items-center">
//                             <p className="fs-4 mx-2">Description:</p>
//                             <p className="fs-5 mx-2 text-secondary">{ProductDescription}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default ClassicBrownJeans;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jeansthree from '../../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg';
import StarRating from '../../../Stars/StarRating';
import style from '../../AllShirtsHoodiesSweaters/AllShirtsHoodiesTemplates/Templates.module.css';
import Footer from '../../../DefaultFooter/Footer';

function ClassicBrownJeans() {
    let ProductName = 'Classic Brown Jeans';
    let ProductPrice = '29,00';
    let ProductDescription = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.';

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
    const images = [jeansthree];

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
                    image: jeansthree,
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
                                    1) S — 46-48
                                </button>
                                <button
                                    id={style.buttonAllId}
                                    className={`fs-5 px-3 border rounded ${selectedButton === 2 ? 'text-bg-secondary' : ''}`}
                                    onClick={() => handleButtonClick(2)}
                                >
                                    2) M — 48-50
                                </button>
                                <button
                                    id={style.buttonAllId}
                                    className={`fs-5 px-3 border rounded ${selectedButton === 3 ? 'text-bg-secondary' : ''}`}
                                    onClick={() => handleButtonClick(3)}
                                >
                                    3) L — 50-52
                                </button>
                            </div>
                            <div className="d-flex p-2 justify-content-evenly">
                                <button
                                    id={style.buttonAllId}
                                    className={`fs-5 px-3 border rounded ${selectedButton === 4 ? 'text-bg-secondary' : ''}`}
                                    onClick={() => handleButtonClick(4)}
                                >
                                    4) XL — 52-54
                                </button>
                                <button
                                    id={style.buttonAllId}
                                    className={`fs-5 px-3 border rounded ${selectedButton === 5 ? 'text-bg-secondary' : ''}`}
                                    onClick={() => handleButtonClick(5)}
                                >
                                    5) XXL — 54-56
                                </button>
                                <button
                                    id={style.buttonAllId}
                                    className={`fs-5 px-3 border rounded ${selectedButton === 6 ? 'text-bg-secondary' : ''}`}
                                    onClick={() => handleButtonClick(6)}
                                >
                                    6) 3XL – 56- 58
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

export default ClassicBrownJeans;