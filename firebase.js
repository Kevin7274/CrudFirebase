// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBfVAZSyfmN6PkyWVBiahG3X7gwNEbKfYg",
authDomain: "thecrud-6ff76.firebaseapp.com",
projectId: "thecrud-6ff76",
storageBucket: "thecrud-6ff76.appspot.com",
messagingSenderId: "915641082520",
appId: "1:915641082520:web:8ea15895dc24dbce4a26ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();

export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), {title, description });

    export const getTasks = () => getDocs(collection(db, 'tasks'));

    export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

    export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

    export const getTask = (id) => getDoc(doc(db, "tasks", id));

    export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);