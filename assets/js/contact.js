import { db } from "../firebase/firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !message) {

            alert("Please fill all required fields.");

            return;

        }

        if (!/^[0-9]{10}$/.test(phone)) {

            alert("Please enter a valid 10-digit phone number.");

            return;

        }

        const submitBtn = document.getElementById("submitBtn");

        submitBtn.disabled = true;

        submitBtn.innerHTML = "Sending...";

        try {

            await addDoc(collection(db, "contacts"), {

                name,
                phone,
                email,
                subject,
                message,
                createdAt: serverTimestamp()

            });

            alert("Message Sent Successfully!");

            form.reset();

        } catch (error) {

            console.error(error);

            alert("Failed to send message.");

        }

        submitBtn.disabled = false;

        submitBtn.innerHTML = "Send Message";

    });

}