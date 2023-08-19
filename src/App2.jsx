import React, { useEffect, useState } from 'react'

import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getDatabase } from 'firebase/database';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBC4Rvajnh3Prvs9z4PKX2VP9wQsInRPkQ",
  authDomain: "reactfirebase-c3ebe.firebaseapp.com",
  databaseURL: "https://reactfirebase-c3ebe-default-rtdb.firebaseio.com",
  projectId: "reactfirebase-c3ebe",
});

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const fb = getFirestore(firebaseApp);
  const userCollectionRef = collection(fb, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [])

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <div key={user?.id}>
              <li>{user?.name}</li>
              <li>{user?.email}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
