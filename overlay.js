

function overlayOn(row) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay-name").innerText = row.data().title;
    document.getElementById("overlay-author").innerText = row.data().author;
    document.getElementById("overlay-description").innerHTML = '<md-block id="overlay-description-md">'+row.data().description+'</md-block>';
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";

}

document.getElementById("overlay").addEventListener("click", overlayOff);