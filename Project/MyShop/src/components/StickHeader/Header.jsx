
// import React, { useState, useEffect } from 'react';
// import style from './Header.module.css';
// import { Link } from 'react-router-dom';

// function Header() {





//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const checkLoggedIn = () => {
//             const cookieValue = document.cookie
//                 .split('; ')
//                 .find(row => row.startsWith('AccsuccefullyLogined='));
            
//             setIsLoggedIn(!!cookieValue);
//         };

//         checkLoggedIn();
//     }, []);

//     const handleLogout = () => {
//         // Удаляем все cookie с префиксом "AccsuccefullyLogined"
//         const cookies = document.cookie.split("; ");
//         cookies.forEach(cookie => {
//             if (cookie.startsWith("AccsuccefullyLogined")) {
//                 document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
//             }
//         });

//         setIsLoggedIn(false);
//         // Перезагрузка страницы
//         window.location.reload();
//     };

//     return (
//         <header id={style.headerId} className="p-3 text-bg-dark">
//             <div className="container">
//                 <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//                     <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//                         <svg className="bi me-2" width="40" height="32" role="img" aria-label="Home"></svg>
//                     </a>

//                     <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//                         <li id={style.headerLiId}><Link to="/" className="nav-link px-2 py-1 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
//                             <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
//                         </svg></Link></li>

//                         <li id={style.headerLiId}><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
//                         <li id={style.headerLiId}><Link to="/new" className="nav-link px-2 text-white">NEW</Link></li>
//                         <li id={style.headerLiId}><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
//                     </ul>
//                                         <div onSubmit='search' className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" bis_skin_checked="1" role="search">
//                                         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

//                         <li id={style.headerLiId}><Link to="/upperclothing" className="nav-link px-2 text-white">Shirts & Hoodies</Link></li>
//                         <li id={style.headerLiId}><Link to="/lowerclothing" className="nav-link px-2 text-white">Pants & Shorts</Link></li>
//                         <li id={style.headerLiId}><Link to="/shoes" className="nav-link px-2 text-white">Shoes</Link></li>
//                     </ul>

//                                         </div>

//                     <div className="text-end">
//                         {isLoggedIn ? (
//                             <button type="button" className="btn btn-warning" onClick={handleLogout}>
//                                 Log out
//                             </button>
//                         ) : (
//                             <button type="button" className="btn btn-warning">
//                                 <Link to="/signin" className="text-decoration-none text-black">Sign-in</Link>
//                             </button>
//                         )}
//                         <button type="button" className="btn  btn-dark mx-3">
//                         <Link to="/cart" className="text-decoration-none text-black">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-cart4" viewBox="0 0 16 16">
//                                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
//                             </svg>
//                         </Link>
//                         </button>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// }
// export default Header;

import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoggedIn = () => {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith('AccsuccefullyLogined='));
            
            setIsLoggedIn(!!cookieValue);
        };

        checkLoggedIn();
    }, []);

    const handleLogout = () => {
        // Удаляем все cookie с префиксом "AccsuccefullyLogined"
        const cookies = document.cookie.split("; ");
        cookies.forEach(cookie => {
            if (cookie.startsWith("AccsuccefullyLogined")) {
                document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
            }
        });

        setIsLoggedIn(false);
        // Перезагрузка страницы
        window.location.reload();
    };

    const handleCartClick = () => {
        if (isLoggedIn) {
            // Переход на страницу корзины
            window.location.href = '/cart';
        } else {
            // Переход на страницу входа
            window.location.href = '/signin';
        }
    };

    return (
        <header id={style.headerId} className="p-3 text-bg-dark">
            <div className="container">
                <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Home"></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li id={style.headerLiId}><Link to="/" className="nav-link px-2 py-1 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg></Link></li>

                        <li id={style.headerLiId}><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                        <li id={style.headerLiId}><Link to="/new" className="nav-link px-2 text-white">NEW</Link></li>
                        <li id={style.headerLiId}><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
                    </ul>
                                        <div onSubmit='search' className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" bis_skin_checked="1" role="search">
                                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                        <li id={style.headerLiId}><Link to="/upperclothing" className="nav-link px-2 text-white">Shirts & Hoodies</Link></li>
                        <li id={style.headerLiId}><Link to="/lowerclothing" className="nav-link px-2 text-white">Pants & Shorts</Link></li>
                        <li id={style.headerLiId}><Link to="/shoes" className="nav-link px-2 text-white">Shoes</Link></li>
                    </ul>

                                        </div>

                    <div className="text-end">
                        {isLoggedIn ? (
                            <button type="button" className="btn btn-warning" onClick={handleLogout}>
                                Log out
                            </button>
                        ) : (
                            <button type="button" className="btn btn-warning">
                                <Link to="/signin" className="text-decoration-none text-black">Sign in</Link>
                            </button>
                        )}
                        <button type="button" className="btn btn-dark mx-3" onClick={handleCartClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;







