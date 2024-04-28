// import React from 'react';

// function SignInPage() {

//   function checkPassword(value){
//     let testPass =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,20}$/;
//     return testPass.test(value);
// }
// function checkEmail(value){
//   let testEmail =  /^[a-z0-9._-]+@[a-z]{2,5}\.[a-z]{2,3}$/i;
//   return testEmail.test(value);
// }

//     return (
//         <div class="modal modal-sheet position-static d-block bg-body-white p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin" bis_skin_checked="1">
//   <div class="modal-dialog" role="document" bis_skin_checked="1">
//     <div class="modal-content rounded-4 shadow" bis_skin_checked="1">
//       <div class="modal-header p-5 pb-4 border-bottom-0" bis_skin_checked="1">
//         <h1 class="fw-bold mb-0 fs-2">Login or Sign in for free</h1>
//       </div>

//       <div class="modal-body p-5 pt-0" bis_skin_checked="1">
//         <form class="">
//           <div class="form-floating mb-3" bis_skin_checked="1">
//             <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
//             <label for="floatingInput">Email address</label>
//           </div>
//           <div class="form-floating mb-3" bis_skin_checked="1">
//             <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
//             <label for="floatingPassword">Password</label>
//           </div>
//           <button class="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Sign in/Login</button>
//           <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
//           <hr class="my-4"/>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
//     );
// }

// export default SignInPage;

// import React, { useState } from 'react';

// function SignInPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   function checkPassword(value) {
//     let testPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,20}$/;
//     return testPass.test(value);
//   }

//   function checkEmail(value) {
//     let testEmail = /^[a-z0-9._-]+@[a-z]{2,5}\.[a-z]{2,3}$/i;
//     return testEmail.test(value);
//   }

//   function generateRandomName() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     const length = Math.floor(Math.random() * 10) + 1; // Generate a random length up to 10 characters
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     if (!checkEmail(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     if (!checkPassword(password)) {
//       setErrorMessage('Password must be 8-20 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
//       return;
//     }

//     // If validation passes, proceed with sign-in logic
//     const ThisAcc = { email, password }; // Create an object for the current account
//     localStorage.setItem('ThisAcc', JSON.stringify(ThisAcc)); // Store in localStorage

//     // Set cookie for 30 days with a random name
//     const cookieName = generateRandomName(); // Generate a random name for the cookie
//     const date = new Date();
//     date.setDate(date.getDate() + 30);
//     const expires = date.toUTCString();
//     const cookieValue = `${cookieName}=${encodeURIComponent(email)}; expires=${expires}; Secure; SameSite=None`;
//     document.cookie = cookieValue;

//     // Redirect to the home page
//     window.location.href = '/';

//     // Clear the form fields and error message after successful submission
//     setEmail('');
//     setPassword('');
//     setErrorMessage('');
//   }

//   return (
//     <div className="modal modal-sheet position-static d-block bg-body-white p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content rounded-4 shadow">
//           <div className="modal-header p-5 pb-4 border-bottom-0">
//             <h1 className="fw-bold mb-0 fs-2">Login or Sign in for free</h1>
//           </div>
//           <div className="modal-body p-5 pt-0">
//             <form onSubmit={handleSubmit}>
//               <div className="form-floating mb-3">
//                 <input
//                   type="email"
//                   className="form-control rounded-3"
//                   id="floatingInput"
//                   placeholder="name@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="floatingInput">Email address</label>
//               </div>
//               <div className="form-floating mb-3">
//                 <input
//                   type="password"
//                   className="form-control rounded-3"
//                   id="floatingPassword"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label htmlFor="floatingPassword">Password</label>
//               </div>
//               {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
//               <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Sign in/Login</button>
//               <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
//               <hr className="my-4" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignInPage;

import React, { useState } from 'react';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function checkPassword(value) {
    let testPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,20}$/;
    return testPass.test(value);
  }

  function checkEmail(value) {
    let testEmail = /^[a-z0-9._-]+@[a-z]{2,5}\.[a-z]{2,3}$/i;
    return testEmail.test(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!checkEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!checkPassword(password)) {
      setErrorMessage('Password must be 8-20 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }

    // If validation passes, proceed with sign-in logic
    const ThisAcc = { email, password }; // Create an object for the current account
    localStorage.setItem('ThisAcc', JSON.stringify(ThisAcc)); // Store in localStorage

    // Set cookie for 30 days with the name "AccsuccefullyLogined"
    const date = new Date();
    date.setDate(date.getDate() + 30);
    const expires = date.toUTCString();
    const cookieValue = `AccsuccefullyLogined=${encodeURIComponent(email)}; expires=${expires}; Secure; SameSite=None`;
    document.cookie = cookieValue;

    // Redirect to the home page
    window.location.href = '/';

    // Clear the form fields and error message after successful submission
    setEmail('');
    setPassword('');
    setErrorMessage('');
  }

  return (
    <div className="modal modal-sheet position-static d-block bg-body-white p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Login or Sign in for free</h1>
          </div>
          <div className="modal-body p-5 pt-0">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Sign in/Login</button>
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
