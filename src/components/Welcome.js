import React from "react";

import { collection, addDoc, getDocs  } from "firebase/firestore";

import {db} from '../firebase';


const addTodo = async (e) => {
    e.preventDefault();  
   
    try {
        const docRef = await addDoc(collection(db, "tours"), {
          todo: "todo",    
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const fetchPost = async () => {
       
    await getDocs(collection(db, "todos"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                            
            console.log(newData);
        })
   
}


const Welcome = () => (<>
<h1>Witaj na stronie startowej!</h1>

</>)


export default Welcome