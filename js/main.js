vacancyModal = document.getElementById("vacancy-modal");
vacancyBtn = document.getElementById("vacancy-btn");
vacancyLink = document.getElementById("vacancy-link");
vacancyFon = document.getElementById("vacancy-fon");

vacancyLink.onclick = function(e){
    e.preventDefault();
    vacancyModal.classList.remove("visually-hidden");
    vacancyFon.classList.remove("visually-hidden");
};

vacancyBtn.onclick = function(e){
    e.preventDefault();
    vacancyModal.classList.add("visually-hidden");
    vacancyFon.classList.add("visually-hidden");
}

