import React, { useEffect, useState } from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get, child } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXnylQxj_s16fMgwAlURL5CNeZHD9j7wQ",
  authDomain: "portfolio-site-6d48d.firebaseapp.com",
  databaseURL: "https://portfolio-site-6d48d-default-rtdb.firebaseio.com",
  projectId: "portfolio-site-6d48d",
  storageBucket: "portfolio-site-6d48d.appspot.com",
  messagingSenderId: "700291481064",
  appId: "1:700291481064:web:cb8c185f35bd171b05785d",
  measurementId: "G-9XVDZJ0WY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()

export default function App() {

  useEffect(() => {

    const dbref = ref(db);
    get(dbref, "0").then((snapshot) => {
      if (snapshot.exists()){
        console.log(snapshot.val())
      }
    })

  }, [])

  return (
    <p>Hello World</p>
  )
}
