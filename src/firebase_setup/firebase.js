import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";
import { ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB84Xp3nSmLTnXGlYCeTLy5NoyXxe8TQTc",
  authDomain: "kbc-quiz123.firebaseapp.com",
  databaseURL: "https://kbc-quiz123-default-rtdb.firebaseio.com",
  projectId: "kbc-quiz123",
  storageBucket: "kbc-quiz123.appspot.com",
  messagingSenderId: "413317918932",
  appId: "1:413317918932:web:132c814f68fbcde9750b41",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const questionsRef = ref(db, "questions");

onValue(questionsRef, (snapshot) => {
  const data = snapshot.val();
  console.log("Data from Firebase:", data);
});
