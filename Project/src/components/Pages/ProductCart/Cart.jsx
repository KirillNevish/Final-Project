// import React from 'react';

// function Cart() {
//     let Totalprice='$0.00'

//     return (
//         <>
//           <div class="container-fluid justify-content-center">
//           <div class="container-xl p-2 d-flex flex-column flex-md-row">

//           

//           <hr className="my-3 w-100 d-flex align-self-center" />
//           </div>
//             <div class="container-xl p-2 d-flex flex-column flex-md-row">
//                 <div class="col-md-6">

                    // here must be productcards

//                     <hr className="my-5 w-100" />
//                 </div>
//                 <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                     <div class="w-100">
//                     <div class=" w-100 pt-2 border border-black">
//                         <p class="fs-3 mx-2">Order Summary</p>
//                         <div class=" d-flex justify-content-between">
//                         <p class="fs-4 mx-2 mt-2 text-secondary ">Shipping Price:</p>
//                         <p class="fs-4 mx-2 mt-2 text-secondary">FREE</p>
//                         </div>
//                         <div class="d-flex justify-content-between">
//                         <p class="fs-4 mx-2 mt-2 text-secondary ">Order Total:</p>
//                         <p class="fs-4 mx-2 mt-2">{Totalprice}</p>
//                         </div>
//                     </div>
//                     <div class="w-100 mt-5 d-flex justify-content-center align-items-center ">
//                         <button type="button" className="btn btn-warning p-2 w-100 fs-5">
//                             Checkout
//                         </button>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }

// export default Cart;

// import React, { useEffect, useState } from 'react';

// function Cart() {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         // Retrieve product information from localStorage
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//     }, []);

//     // Calculate total price based on cart items
//     const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

//     // Function to remove item from cart and localStorage
//     const handleRemoveItem = (index) => {
//         const updatedCart = [...cartItems];
//         updatedCart.splice(index, 1);
//         setCartItems(updatedCart);
//         localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     };

//     return (
//         <>
//             <div className="container-fluid justify-content-center">
//                 <hr className="my-3 w-100 d-flex align-self-center" />
//             </div>
//             <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                 <div className="col-md-6">
//                 <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                     {/* Product Cards */}
//                     {cartItems && cartItems.length > 0 ? (
//                         cartItems.map((item, index) => (
//                             <div key={index} className="col border border-0 bg-transparent">
//                                 <div className="card shadow-sm">
//                                     <img src={item.image} height="300" alt={item.name} />
//                                     <div className="card-body">
//                                         <p className="card-text d-flex justify-content-between align-items-center">{item.name}</p>
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <small className="text-body-secondary">{item.price}</small>
//                                             <button className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No items in cart</p>
//                     )}
//                 </div>
//                     <hr className="my-5 w-100" />
//                 </div>
//                 <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                     <div className="w-100">
//                         <div className="w-100 pt-2 border border-black">
//                             <p className="fs-3 mx-2">Order Summary</p>
//                             <div className="d-flex justify-content-between">
//                                 <p className="fs-4 mx-2 mt-2 text-secondary ">Shipping Price:</p>
//                                 <p className="fs-4 mx-2 mt-2 text-secondary">FREE</p>
//                             </div>
//                             <div className="d-flex justify-content-between">
//                                 <p className="fs-4 mx-2 mt-2 text-secondary ">Order Total:</p>
//                                 <p className="fs-4 mx-2 mt-2">{`$${totalPrice.toFixed(2)}`}</p>
//                             </div>
//                         </div>
//                         <div className="w-100 mt-5 d-flex justify-content-center align-items-center ">
//                             <button type="button" className="btn btn-warning p-2 w-100 fs-5">
//                                 Checkout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Cart;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// function Cart() {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         // Retrieve product information from localStorage
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//     }, []);

//     // Calculate total price based on cart items
//     const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

//     // Function to remove item from cart and localStorage
//     const handleRemoveItem = (index) => {
//         const updatedCart = [...cartItems];
//         updatedCart.splice(index, 1);
//         setCartItems(updatedCart);
//         localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     };

//     return (
//         <>
//             <div className="container-fluid justify-content-center">
//                 <hr className="my-3 w-100 d-flex align-self-center" />
//             </div>
//             <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                 <div className="col-md-6">
//                     <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                         {/* Product Cards */}
//                         {cartItems && cartItems.length > 0 ? (
//                             cartItems.map((item, index) => (
//                                 <div key={index} className="col border border-0 bg-transparent">
//                                     <Link class="text-decoration-none" to={item.pagePath}> {/* Link to the page where the product was added */}
//                                         <div className="card shadow-sm">
//                                             <img src={item.image} height="300" alt={item.name} />
//                                             <div className="card-body">
//                                                 <p className="card-text d-flex justify-content-between align-items-center">{item.name}</p>
//                                                 <div className="d-flex justify-content-between align-items-center">
//                                                     <small className="text-body-secondary">{item.price}</small>
//                                                     <button className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="fs-4 mx-2 mt-2 text-secondary">No items in cart</p>
//                         )}
//                     </div>
//                     <hr className="my-3 w-100" />
//                 </div>
//                 <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                     <div className="w-100">
//                         <div className="w-100 pt-2 border border-black">
//                             <p className="fs-3 mx-2">Order Summary</p>
//                             <div className="d-flex justify-content-between">
//                                 <p className="fs-4 mx-2 mt-2 text-secondary ">Shipping Price:</p>
//                                 <p className="fs-4 mx-2 mt-2 text-secondary">FREE</p>
//                             </div>
//                             <div className="d-flex justify-content-between">
//                                 <p className="fs-4 mx-2 mt-2 text-secondary ">Order Total:</p>
//                                 <p className="fs-4 mx-2 mt-2">{`$${totalPrice.toFixed(2)}`}</p>
//                             </div>
//                         </div>
//                         <div className="w-100 mt-5 d-flex justify-content-center align-items-center ">
//                             <button type="button" className="btn btn-warning p-2 w-100 fs-5">
//                                 Checkout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Cart;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// function Cart() {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         // Retrieve product information from localStorage
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//     }, []);

//     // Calculate total price based on cart items
//     const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

//     // Function to remove item from cart and localStorage
//     const handleRemoveItem = (index) => {
//         const updatedCart = [...cartItems];
//         updatedCart.splice(index, 1);
//         setCartItems(updatedCart);
//         localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     };

//     return (
//         <>
//             <div className="container-fluid justify-content-center">
//                 <hr className="my-3 w-100 d-flex align-self-center" />
//             </div>
//             <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                 <div className="col-md-6">
//                     <div className="container-xl p-2 d-flex flex-column flex-md-row">
//                         {/* Product Cards */}
//                         {cartItems && cartItems.length > 0 ? (
//                             cartItems.map((item, index) => (
//                                 <div key={index} className="col border border-0 bg-transparent">
//                                     <Link className="text-decoration-none" to={item.pagePath}> {/* Link to the page where the product was added */}
//                                         <div className="card shadow-sm">
//                                             <img src={item.image} height="300" alt={item.name} />
//                                             <div className="card-body">
//                                                 <p className="card-text d-flex justify-content-between align-items-center">{item.name}</p>
//                                                 <p className="text-secondary">Size: {item.selectedSize}</p> {/* Display selected size */}
//                                                 <div className="d-flex justify-content-between align-items-center">
//                                                     <small className="text-body-secondary">{item.price}</small>
//                                                     <button className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="fs-4 mx-2 mt-2 text-secondary">No items in cart</p>
//                         )}
//                     </div>
//                     <hr className="my-3 w-100" />
//                 </div>
//                 <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
//                     <div className="w-100">
//                         <div className="w-100 pt-2 border border-black">
//                             <p className="fs-3 mx-2">Order Summary</p>
//                             <div className="d-flex justify-content-between">
//                                 <p className="fs-4 mx-2 mt-2 text-secondary ">Shipping Price:</p>
//                                 <p className="fs-4 mx-2 mt-2 text-secondary">FREE</p>
//                             </div>
//                             <div className="d-flex justify-content-between">
//                                 <p className="fs-4 mx-2 mt-2 text-secondary ">Order Total:</p>
//                                 <p className="fs-4 mx-2 mt-2">{`$${totalPrice.toFixed(2)}`}</p>
//                             </div>
//                         </div>
//                         <div className="w-100 mt-5 d-flex justify-content-center align-items-center ">
//                             <button type="button" className="btn btn-warning p-2 w-100 fs-5">
//                                 Checkout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Cart;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// function Cart() {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         // Retrieve product information from localStorage
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//     }, []);

//     // Calculate total price based on cart items
//     const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

//     // Function to remove item from cart and localStorage
//     const handleRemoveItem = (index) => {
//         const updatedCart = [...cartItems];
//         updatedCart.splice(index, 1);
//         setCartItems(updatedCart);
//         localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     };

//     return (
//         <>
//             <div className="container-fluid justify-content-center">
//                 <hr className="my-3 w-100 d-flex align-self-center" />
//             </div>
//             <div className="container-xl p-2">
//                 <div className="row row-cols-1 row-cols-md-2"> {/* Bootstrap row with 2 columns */}
//                     <div className="col-md-6">
//                         {/* Product Cards */}
//                         {cartItems && cartItems.length > 0 ? (
//                             cartItems.map((item, index) => (
//                                 <div key={index} className="border border-0 bg-transparent mb-3"> {/* Added mb-3 for margin-bottom */}
//                                     <Link className="text-decoration-none" to={item.pagePath}>
//                                         <div className="card shadow-sm">
//                                             <img src={item.image} height="300" alt={item.name} />
//                                             <div className="card-body">
//                                                 <p className="card-text d-flex justify-content-between align-items-center">{item.name}</p>
//                                                 <p className="text-secondary">Size: {item.selectedSize}</p>
//                                                 <div className="d-flex justify-content-between align-items-center">
//                                                     <small className="text-body-secondary">{item.price}</small>
//                                                     <button className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="fs-4 mx-2 mt-2 text-secondary">No items in cart</p>
//                         )}
//                     </div>
//                     <div className="pt-5 col-md-6">
//                         <div className="w-100 pt-2 border border-black">
//                             <p className="fs-3 mx-2">Order Summary</p>
//                             <div className="d-flex justify-content-between">
//                                 <p className="fs-4 mx-2 mt-2 text-secondary ">Shipping Price:</p>
//                                 <p className="fs-4 mx-2 mt-2 text-secondary">FREE</p>
//                             </div>
//                             <div className="d-flex justify-content-between">
//                                 <p className="fs-4 mx-2 mt-2 text-secondary ">Order Total:</p>
//                                 <p className="fs-4 mx-2 mt-2">{`$${totalPrice.toFixed(2)}`}</p>
//                             </div>
//                         </div>
//                         <div className="w-100 mt-5 d-flex justify-content-center align-items-center ">
//                             <button type="button" className="btn btn-warning p-2 w-100 fs-5">
//                                 Checkout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Импорт Link и useNavigate из react-router-dom

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate(); // Инициализация хука useNavigate

    useEffect(() => {
        // Получение информации о товарах из localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    // Расчет общей суммы на основе товаров в корзине
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

    // Функция для удаления товара из корзины и localStorage
    const handleRemoveItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    // Функция для обработки нажатия на кнопку оформления заказа
    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate('/checkout'); // Перенаправление на страницу оформления заказа
        }
    };

    return (
        <>
            <div className="container-fluid justify-content-center">
                <hr className="my-3 w-100 d-flex align-self-center" />
            </div>
            <div className="container-xl p-2">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col-md-6">
                        {/* Карточки товаров */}
                        {cartItems && cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div key={index} className="border border-0 bg-transparent mb-3">
                                    <Link className="text-decoration-none" to={item.pagePath}>
                                        <div className="card shadow-sm">
                                            <img src={item.image} height="300" alt={item.name} />
                                            <div className="card-body">
                                                <p className="card-text d-flex justify-content-between align-items-center">{item.name}</p>
                                                <p className="text-secondary">Size: {item.selectedSize}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-body-secondary">{item.price}</small>
                                                    <button className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="fs-4 mx-2 mt-2 text-secondary">No items in cart</p>
                        )}
                    </div>
                    <div className="pt-5 col-md-6">
                        <div className="w-100 pt-2 border border-black">
                            <p className="fs-3 mx-2">Order Summary</p>
                            <div className="d-flex justify-content-between">
                                <p className="fs-4 mx-2 mt-2 text-secondary">Shipping Price:</p>
                                <p className="fs-4 mx-2 mt-2 text-secondary">FREE</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="fs-4 mx-2 mt-2 text-secondary">Order Total:</p>
                                <p className="fs-4 mx-2 mt-2">{`$${totalPrice.toFixed(2)}`}</p>
                            </div>
                        </div>
                        <div className="w-100 mt-5 d-flex justify-content-center align-items-center">
                            {/* Отключение кнопки, если корзина пуста */}
                            <button type="button" className="btn btn-warning p-2 w-100 fs-5" onClick={handleCheckout} disabled={cartItems.length === 0}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;