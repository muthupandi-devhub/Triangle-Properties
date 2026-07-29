const properties = [

    {

        image: "./assets/images/properties/property-1.webp",

        title: "Luxury Villa",

        location: "Chennai",

        type: "Villa",

        price: "₹85 Lakhs"

    },

    {

        image: "./assets/images/properties/property-2.webp",

        title: "Premium Apartment",

        location: "Coimbatore",

        type: "Apartment",

        price: "₹62 Lakhs"

    },

    {

        image: "./assets/images/properties/property-3.webp",

        title: "Residential Plot",

        location: "Trichy",

        type: "Plot",

        price: "₹28 Lakhs"

    }

];

const container = document.getElementById("featuredProperties");

if (container) {

    container.innerHTML = properties.map(property => `

        <div class="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition duration-500 group">

            <div class="overflow-hidden">

                <img src="${property.image}"

                    class="w-full h-72 object-cover group-hover:scale-110 transition duration-700">

            </div>

            <div class="p-6">

                <div class="flex justify-between items-center mb-4">

                    <span class="bg-gold text-white text-xs px-3 py-1 rounded-full">

                        ${property.type}

                    </span>

                    <span class="text-sm text-gray-500">

                        ${property.location}

                    </span>

                </div>

                <h3 class="text-2xl font-heading font-bold">

                    ${property.title}

                </h3>

                <div class="mt-5 flex justify-between items-center">

                    <span class="text-2xl font-bold text-gold">

                        ${property.price}

                    </span>

                    <a href="property-details.html"

                        class="bg-primary hover:bg-secondary text-white px-5 py-3 rounded-full transition">

                        View Details

                    </a>

                </div>

            </div>

        </div>

    `).join("");

}