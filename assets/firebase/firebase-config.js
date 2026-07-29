import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyCsRO67q59AAcVZx-pQrOHuCaqnhY5Cq9I",

    authDomain: "triangle-properties-1a63e.firebaseapp.com",

    projectId: "triangle-properties-1a63e",

    storageBucket: "triangle-properties-1a63e.firebasestorage.app",

    messagingSenderId: "831350347982",

    appId: "1:831350347982:web:6e51f9137400054c96d89f"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };