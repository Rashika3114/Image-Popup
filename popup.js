var popup = document.querySelector(".popup");
var close = document.querySelector(".close");
var popimg = document.getElementById("popimg");
var item = document.querySelectorAll(".gallery_item");
for (let i = 0; i < item.length; i++) {
    const element = item[i];

    element.addEventListener("click", function () {
        popup.style.display = "flex";
        popimg.setAttribute("src", element.src);
    });
}
function closehandle() {
    popup.style.display = "none";
}