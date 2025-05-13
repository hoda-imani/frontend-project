const items = document.querySelectorAll(".nav-link-list li");
items.forEach((li) => {
    li.addEventListener("click", () => {
        items.forEach((item) => item.classList.remove("active"));
        li.classList.add("active");
    });
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

document.getElementById("godFather").addEventListener("click", () => {
    document.querySelector(".container-sidebar").classList.toggle("active");
});
