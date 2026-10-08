// GALLERY LIGHTBOX

const galleryItems = document.querySelectorAll(".gallery-item");
const pageButtons = document.querySelectorAll("[data-page]");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

const imagesPerPage = 6;
let currentPage = 1;
let currentImage = 0;

// Pagination 

function showPage(page){

    currentPage = page;

    galleryItems.forEach((item,index)=>{

        if(index >= (page-1)*imagesPerPage &&
           index < page*imagesPerPage){

            item.style.display = "block";

        }else{

            item.style.display = "none";

        }

    });

    pageButtons.forEach(btn=>{
        btn.classList.remove("active");
    });

    const activeBtn = document.querySelector(`[data-page="${page}"]`);

    if (activeBtn) {
        activeBtn.classList.add("active");
    }

}

showPage(1);

pageButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        showPage(Number(button.dataset.page));

    });

});

if (galleryItems.length > 0 && prevPage && nextPage) {

    showPage(1);

    pageButtons.forEach(button => {
        button.addEventListener("click", () => {
            showPage(Number(button.dataset.page));
        });
    });
    if (prevPage){
    prevPage.addEventListener("click", () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });
}

    nextPage.addEventListener("click", () => {
        if (currentPage < 3) {
            showPage(currentPage + 1);
        }
    });

}
    if(nextPage){
        nextPage.addEventListener("click",()=>{

    if(currentPage<3){

        showPage(currentPage+1);
     }
});
    }

// Lightbox 
if (lightbox && lightboxImg && closeBtn && prevBtn && nextBtn) {
galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        currentImage=index;

        lightbox.classList.add("active");

        lightboxImg.src=item.querySelector("img").src;

    });

});


closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


prevBtn.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=galleryItems.length-1;

    }

    lightboxImg.src=
    galleryItems[currentImage]
    .querySelector("img").src;

});


nextBtn.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=galleryItems.length){

        currentImage=0;

    }

    lightboxImg.src=
    galleryItems[currentImage]
    .querySelector("img").src;

});


lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});
}