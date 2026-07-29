// =====================================
// Property Details Gallery
// =====================================

const mainImage = document.getElementById("mainImage");

const thumbnails = document.querySelectorAll(".gallery-thumb");


if (mainImage && thumbnails.length) {

    thumbnails.forEach((image) => {

        image.addEventListener("click", () => {

            // Change Main Image
            mainImage.src = image.src;


            // Remove Active Border From All Images
            thumbnails.forEach((item) => {

                item.classList.remove("border-gold");

                item.classList.add("border-transparent");

            });


            // Add Active Border To Selected Image
            image.classList.remove("border-transparent");

            image.classList.add("border-gold");

        });

    });

}



// =====================================
// Property Enquiry Form
// =====================================

const enquiryForm = document.querySelector("#propertyEnquiryForm");


if (enquiryForm) {

    enquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name = document.querySelector("#name")?.value;

        const email = document.querySelector("#email")?.value;

        const phone = document.querySelector("#phone")?.value;

        const message = document.querySelector("#message")?.value;



        console.log({
            name,
            email,
            phone,
            message
        });



        alert("Thank you! Our team will contact you soon.");


        enquiryForm.reset();

    });

}



// =====================================
// Back Button
// =====================================

const backButton = document.querySelector("#backButton");


if (backButton) {

    backButton.addEventListener("click", () => {

        window.history.back();

    });

}