import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCHr2_vCD-B3UXs6zcLQz8WwCbe4sZh-o8",
  authDomain: "ecommerce-jewellery-store.firebaseapp.com",
  //databaseURL: "https://ecommerce-jewellery-store-default-rtdb.firebaseio.com",
  projectId: "ecommerce-jewellery-store",
  storageBucket: "ecommerce-jewellery-store.firebasestorage.app",
  messagingSenderId: "1063098206489",
  appId: "1:1063098206489:web:94acf3df340623bac35d88",
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);
const analytics = getFirebase(app);

export {db, collection, getDocs };