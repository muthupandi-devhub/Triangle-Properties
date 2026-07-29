async function loadComponent(id, path) {

    const element = document.getElementById(id);

    if (!element) return;


    const response = await fetch(path);

    const html = await response.text();


    element.innerHTML = html;


    // Lucide icons load
    if (window.lucide) {

        lucide.createIcons();

    }


    // Navbar load ஆன பிறகு initialize
    if (id === "navbar") {

        initNavbar();

    }

}



// Load Components

loadComponent(
    "navbar",
    "./components/navbar.html"
);


loadComponent(
    "footer",
    "./components/footer.html"
);


loadComponent(
    "floatingButtons",
    "./components/floating-buttons.html"
);





// Navbar Functions

function initNavbar() {


    const menuBtn = document.getElementById("menuBtn");

    const closeMenu = document.getElementById("closeMenu");

    const mobileMenu = document.getElementById("mobileMenu");

    const overlay = document.getElementById("overlay");



    if (!menuBtn || !closeMenu || !mobileMenu || !overlay) {

        return;

    }




    // Open Menu

    menuBtn.addEventListener("click", function () {


        mobileMenu.classList.remove("right-[-100%]");

        mobileMenu.classList.add("right-0");


        overlay.classList.remove("hidden");


        document.body.style.overflow = "hidden";


    });






    // Close Menu

    function closeMobileMenu() {


        mobileMenu.classList.remove("right-0");

        mobileMenu.classList.add("right-[-100%]");


        overlay.classList.add("hidden");


        document.body.style.overflow = "";


    }



    closeMenu.addEventListener(
        "click",
        closeMobileMenu
    );



    overlay.addEventListener(
        "click",
        closeMobileMenu
    );




    // Menu link click close

    const menuLinks = mobileMenu.querySelectorAll("a");


    menuLinks.forEach(link => {


        link.addEventListener(
            "click",
            closeMobileMenu
        );


    });



}






// Header Scroll Effect

window.addEventListener("scroll", function () {


    const header = document.querySelector("#header");


    if (!header) return;



    if (window.scrollY > 80) {


        header.classList.add("scrolled");


    } else {


        header.classList.remove("scrolled");


    }



});