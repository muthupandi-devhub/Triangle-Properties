import { db } from "../firebase/firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const form = document.getElementById("enquiryForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const propertyId = document.getElementById("propertyId").value.trim();

        console.log(name);
        console.log(phone);
        console.log(email);
        console.log(message);

        if (!name || !phone) {
            alert("Please fill all required fields.");
            return;
        }

        const data = {
            name,
            phone,
            email,
            message,
            propertyId,
            createdAt: serverTimestamp()
        };

        console.log(data);

        try {

            await addDoc(collection(db, "enquiries"), data);

            alert("Enquiry Submitted Successfully!");

            form.reset();

        } catch (error) {

            console.error(error);

            alert("Submission Failed");

        }

    });

}