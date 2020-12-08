// // firebaseClient.ts
// import firebase from 'firebase';
// import 'firebase/auth';

// // if (typeof window !== 'undefined' && !firebase.apps.length) {
// //   firebase.initializeApp({
// //     apiKey: 'AIzaSyA9CoW9_ktVzBNp0i-TY5p48uc4cRQLNus',
// //     authDomain: 'peeplez-48502.firebaseapp.com',
// //     databaseURL: 'https://peeplez-48502-default-rtdb.firebaseio.com/',
// //     projectId: 'peeplez-48502',
// //     storageBucket: 'peeplez-48502.appspot.com',
// //     messagingSenderId: '205611693693',
// //     appId: '1:205611693693:web:9db962b0032ccd63fa6314',
// //     measurementId: "G-CL7449NX1H"
// //   });
// //  // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
// // }

// // export default firebase;

// try {
//   firebase.initializeApp({
//     apiKey: "AIzaSyA9CoW9_ktVzBNp0i-TY5p48uc4cRQLNus",
//     authDomain: "peeplez-48502.firebaseapp.com",
//     databaseURL: "https://peeplez-48502-default-rtdb.firebaseio.com",
//     projectId: "peeplez-48502",
//     storageBucket: "peeplez-48502.appspot.com",
//     messagingSenderId: "205611693693",
//     appId: "1:205611693693:web:9db962b0032ccd63fa6314",
//     measurementId: "G-CL7449NX1H"
//   })
//   } catch (err) {
//   // we skip the "already exists" message which is
//   // not an actual error when we're hot-reloading
//   if (!/already exists/.test(err.message)) {
//   console.error('Firebase initialization error', err.stack)
//   }
//   }
  
//   const fb= firebase
//   export default fb;