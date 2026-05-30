/* =========================
   HOTEL WEBSITE ADMIN SYSTEM
========================= */

/* PASSWORD */
const ADMIN_PASSWORD = "Amanda11";

/* SEARCH BAR ADMIN ACCESS */
const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keypress", function(e){

        if(e.key === "Enter"){

            if(searchInput.value === "#admin"){

                let password = prompt("Enter Admin Password");

                if(password === ADMIN_PASSWORD){

                    document.getElementById("admin").style.display = "block";

                    alert("Admin Dashboard Opened");

                }else{

                    alert("Wrong Password");

                }

            }

        }

    });

}

/* =========================
   ABOUT SECTION
========================= */

const aboutText = document.getElementById("aboutText");
const saveAbout = document.getElementById("saveAbout");
const aboutDisplay = document.getElementById("aboutDisplay");

if(localStorage.getItem("hotel_about")){
    aboutDisplay.innerText = localStorage.getItem("hotel_about");
}

if(saveAbout){

    saveAbout.addEventListener("click", function(){

        localStorage.setItem("hotel_about", aboutText.value);

        aboutDisplay.innerText = aboutText.value;

        alert("About Section Updated");

    });

}

/* =========================
   ROOM PRICES
========================= */

const roomPrice = document.getElementById("roomPrice");
const savePrice = document.getElementById("savePrice");
const priceDisplay = document.getElementById("priceDisplay");

if(localStorage.getItem("hotel_price")){
    priceDisplay.innerText = localStorage.getItem("hotel_price");
}

if(savePrice){

    savePrice.addEventListener("click", function(){

        localStorage.setItem("hotel_price", roomPrice.value);

        priceDisplay.innerText = roomPrice.value;

        alert("Room Price Updated");

    });

}

/* =========================
   IMAGE UPLOAD SYSTEM
========================= */

const imageUpload = document.getElementById("imageUpload");
const hotelImage = document.getElementById("hotelImage");

if(localStorage.getItem("hotel_image")){
    hotelImage.src = localStorage.getItem("hotel_image");
}

if(imageUpload){

    imageUpload.addEventListener("change", function(){

        const reader = new FileReader();

        reader.onload = function(e){

            localStorage.setItem("hotel_image", e.target.result);

            hotelImage.src = e.target.result;

        }

        reader.readAsDataURL(imageUpload.files[0]);

    });

}

/* =========================
   BOOKINGS SYSTEM
========================= */

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Booking Submitted Successfully");

    });

}

/* =========================
   CONTACT UPDATE
========================= */

const hotelPhone = document.getElementById("hotelPhone");
const savePhone = document.getElementById("savePhone");
const phoneDisplay = document.getElementById("phoneDisplay");

if(localStorage.getItem("hotel_phone")){
    phoneDisplay.innerText = localStorage.getItem("hotel_phone");
}

if(savePhone){

    savePhone.addEventListener("click", function(){

        localStorage.setItem("hotel_phone", hotelPhone.value);

        phoneDisplay.innerText = hotelPhone.value;

        alert("Phone Number Updated");

    });

}

/* =========================
   WHATSAPP UPDATE
========================= */

const whatsappInput = document.getElementById("whatsappInput");
const saveWhatsapp = document.getElementById("saveWhatsapp");
const whatsappDisplay = document.getElementById("whatsappDisplay");

if(localStorage.getItem("hotel_whatsapp")){
    whatsappDisplay.innerText = localStorage.getItem("hotel_whatsapp");
}

if(saveWhatsapp){

    saveWhatsapp.addEventListener("click", function(){

        localStorage.setItem("hotel_whatsapp", whatsappInput.value);

        whatsappDisplay.innerText = whatsappInput.value;

        alert("WhatsApp Updated");

    });

}

/* =========================
   ADMIN LOGOUT
========================= */

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click", function(){

        document.getElementById("admin").style.display = "none";

        alert("Logged Out");

    });

}
/* =========================
   MULTIPLE GALLERY SYSTEM
========================= */

function setupGallery(uploadId, galleryId, storageKey){

    const upload = document.getElementById(uploadId);

    const gallery = document.getElementById(galleryId);

    let savedImages =
    JSON.parse(localStorage.getItem(storageKey)) || [];

    savedImages.forEach(src => {

        let img = document.createElement("img");

        img.src = src;

        img.style.width = "200px";

        img.style.margin = "10px";

        img.style.borderRadius = "10px";

        gallery.appendChild(img);

    });

    upload.addEventListener("change", function(){

        const files = upload.files;

        let imageArray = [];

        Array.from(files).forEach(file => {

            const reader = new FileReader();

            reader.onload = function(e){

                let img = document.createElement("img");

                img.src = e.target.result;

                img.style.width = "200px";

                img.style.margin = "10px";

                img.style.borderRadius = "10px";

                gallery.appendChild(img);

                imageArray.push(e.target.result);

                localStorage.setItem(
                    storageKey,
                    JSON.stringify(
                        savedImages.concat(imageArray)
                    )
                );

            }

            reader.readAsDataURL(file);

        });

    });

}

/* ACTIVATE GALLERIES */

setupGallery(
    "roomsUpload",
    "roomsGallery",
    "rooms_images"
);

setupGallery(
    "poolUpload",
    "poolGallery",
    "pool_images"
);

setupGallery(
    "receptionUpload",
    "receptionGallery",
    "reception_images"
);

setupGallery(
    "restaurantUpload",
    "restaurantGallery",
    "restaurant_images"
);

setupGallery(
    "hallUpload",
    "hallGallery",
    "hall_images"
);

setupGallery(
    "galleryUpload",
    "generalGallery",
    "general_images"
);
