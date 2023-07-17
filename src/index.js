import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGAtMH8_Eah0trzJ3EylUoKXJZ0rXX9Bo",
  authDomain: "quizapp-86c4b.firebaseapp.com",
  projectId: "quizapp-86c4b",
  storageBucket: "quizapp-86c4b.appspot.com",
  messagingSenderId: "888436702414",
  appId: "1:888436702414:web:d250babb6be14b7798249f",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// //init firebase app
// initializeApp(firebaseConfig);

// //init services
// const db = getFirestore();

// //collection ref
// const firstColRef = collection(db, "Level_1");
// const secondColRef = collection(db, "Level_2");
// const thirdColRef = collection(db, "Level_3");
// const fourthColRef = collection(db, "Level_4");
// const fifthColRef = collection(db, "Level_5");

// //get collection data
// getDocs(firstColRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });

// getDocs(secondColRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });

// getDocs(thirdColRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });

// getDocs(fourthColRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });

// getDocs(fifthColRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });
