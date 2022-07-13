import { useState, useEffect } from 'react';
import { firestore } from '../firebase/clientApp'
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where } from "@firebase/firestore";

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Home () {

    const [animals,setAnimals] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

    useEffect( () => {
      // get the animals
      getAnimals();
    },[]);

    const animalsCollection = collection(firestore,'animals');
    
    const getAnimals = async () => {
      const animalsQuery = query(animalsCollection, where('isActive','==', true));
      // get the Animals
      const querySnapshot = await getDocs(animalsQuery);
      
      // map through todos adding them to an array
      const result: QueryDocumentSnapshot<DocumentData>[] = [];
      querySnapshot.forEach((snapshot) => {
        result.push(snapshot);
      })
      // set it to state
      setAnimals(result);
    };

  return (
    <div className="container"> 
    <h1>Apple</h1>
      {animals.map((animal, index) => {
        return (
          <div key={index}>
              <p>{animal.data().name}</p>
          </div>
        )
      })}
    </div>
  );
}


export default Home; 