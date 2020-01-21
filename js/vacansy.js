var vacancyModal = document.getElementById('vacancy-modal');
var vacancyBtn = document.getElementById('vacancy-btn');
var vacancyLink = document.getElementById('vacancy-link');
var vacancyFon = document.getElementById('vacancy-fon');

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