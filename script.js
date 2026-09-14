/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}


/* =====================================================
   SEARCH
===================================================== */

function openSearch() {

    document.getElementById("searchBox").style.display = "flex";

    document.getElementById("searchInput").focus();

}


function closeSearch() {

    document.getElementById("searchBox").style.display = "none";

}


function performSearch() {

    const input =
        document.getElementById("searchInput").value.trim();

    const message =
        document.getElementById("searchMessage");


    if (input === "") {

        message.innerText =
            "Please enter something to search.";

        return;

    }


    message.innerText =
        "Searching for: " + input;

}



/* =====================================================
   CART
===================================================== */

let cartItems = 2;


function openCart() {

    document.getElementById("cartPopup").style.display = "flex";

}


function closeCart() {

    document.getElementById("cartPopup").style.display = "none";

}


function addToCart(productName) {

    cartItems++;

    document.getElementById("cartCount").innerText =
        cartItems;


    document.getElementById("cartText").innerText =
        cartItems +
        " items currently in your cart.";

    alert(productName + " added to cart!");

}



/* =====================================================
   NEWSLETTER
===================================================== */

function subscribe() {

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("subscribeMessage");


    if (email === "") {

        message.innerText =
            "Please enter your email.";

        return;

    }


    if (!email.includes("@")) {

        message.innerText =
            "Please enter a valid email.";

        return;

    }


    message.innerText =
        "Thank you for joining the Luxe List!";

    document.getElementById("email").value = "";

}



/* =====================================================
   SHOP BUTTON
===================================================== */

function scrollToShop() {

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =====================================================
   CLOSE POPUPS WHEN CLICKING OUTSIDE
===================================================== */

window.addEventListener("click", function(event) {

    const searchBox =
        document.getElementById("searchBox");

    const cartPopup =
        document.getElementById("cartPopup");


    if (event.target === searchBox) {

        closeSearch();

    }


    if (event.target === cartPopup) {

        closeCart();

    }

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", function() {

    const navbar =
        document.querySelector(".navbar");


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(7,7,6,0.96)";

        navbar.style.backdropFilter =
            "blur(10px)";

    } else {

        navbar.style.background =
            "#070706";

        navbar.style.backdropFilter =
            "none";

    }

});



/* =====================================================
   OUR WORKS HERO SLIDER
===================================================== */


/*
   IMPORTANT:

   Your images are inside the "trial" folder.

   So we use:

   trial/1.jpg
   trial/2.jpg
   etc.

   NOT:

   C:\Chinu_projects\...
*/


const worksImages = [

    "18.jpg",
    "2.jpg",
    "7.jpg",
    "12.jpg",
    "1.jpg",
    "12.jpg",
    "9.jpg",
    "16.jpg",
    "8.jpg",
    "10.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
    

];


const worksTitles = [

    "THE ROSÉLINE RING",

    "THE ZOË EARRINGS",

    "THE HIBISCUS RING II",

    "THE CHUBBY HOOPS",

    "THE CHUBBY HOOPS II",

    "THE SOFT ROSE COLLECTION",

    "THE NUDE COLLECTION",

    "THE FRENCH COLLECTION",

    "THE SIGNATURE SET"

];



/* =====================================================
   SLIDER VARIABLES
===================================================== */

let currentWorks = 0;


/* Get HTML elements */

const gallery =
    document.getElementById("worksGallery");

const previousButton =
    document.getElementById("worksPrev");

const nextButton =
    document.getElementById("worksNext");



/* =====================================================
   CREATE WORK CARDS
===================================================== */

function createWorksCards(direction = "") {

    /*
       If gallery doesn't exist,
       stop the function.
    */

    if (!gallery) {
        console.error("worksGallery not found!");
        return;
    }


    /*
       Remove old cards
    */

    gallery.innerHTML = "";


    /*
       Create 5 cards
    */

    for (let i = 0; i < 5; i++) {


        /*
           Calculate which image to show
        */

        const imageIndex =
            (currentWorks + i) %
            worksImages.length;


        /*
           Create card
        */

        const card =
            document.createElement("div");


        card.className =
            `work-card card-${i + 1}`;


        /*
           Add animation class
        */

        if (direction === "next") {

            card.classList.add("slide-left");

        }

        if (direction === "previous") {

            card.classList.add("slide-right");

        }


        /*
           Center card
        */

        if (i === 2) {

            card.innerHTML = `

                <img
                    src="${worksImages[imageIndex]}"
                    alt="${worksTitles[imageIndex]}"
                >

                <div class="work-card-overlay"></div>

                <span class="category-tag">
                    Rings
                </span>

                <span class="work-name">
                    ${worksTitles[imageIndex]}
                </span>

            `;

        }


        /*
           Side cards
        */

        else {

            card.innerHTML = `

                <img
                    src="${worksImages[imageIndex]}"
                    alt="${worksTitles[imageIndex]}"
                >

                <div class="work-card-overlay"></div>

                <span class="work-name">
                    ${worksTitles[imageIndex]}
                </span>

            `;

        }


        /*
           Add card to gallery
        */

        gallery.appendChild(card);

    }

}



/* =====================================================
   NEXT BUTTON
===================================================== */

function nextWorks() {

    /*
       Move one image forward
    */

    currentWorks =
        currentWorks + 1;


    /*
       If we reach the last image,
       go back to the first image.
    */

    if (currentWorks >= worksImages.length) {

        currentWorks = 0;

    }


    /*
       Recreate the cards
    */

    createWorksCards("next");

}



/* =====================================================
   PREVIOUS BUTTON
===================================================== */

function previousWorks() {

    /*
       Move one image backward
    */

    currentWorks =
        currentWorks - 1;


    /*
       If we go before the first image,
       go to the last image.
    */

    if (currentWorks < 0) {

        currentWorks =
            worksImages.length - 1;

    }


    /*
       Recreate the cards
    */

    createWorksCards("previous");

}



/* =====================================================
   BUTTON EVENTS
===================================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextWorks
    );

}


if (previousButton) {

    previousButton.addEventListener(
        "click",
        previousWorks
    );

}



/* =====================================================
   INITIAL HERO LOAD
===================================================== */

createWorksCards();

console.log("Image path:", worksImages[0]);

const testImage = new Image();

testImage.onload = function () {
    console.log("✅ IMAGE FOUND:", worksImages[0]);
};

testImage.onerror = function () {
    console.log("❌ IMAGE NOT FOUND:", worksImages[0]);
};

testImage.src = worksImages[0];
