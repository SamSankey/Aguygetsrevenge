const all = document.querySelectorAll('.wobble');

all.forEach(el => {
    let text = el.textContent;
    text = text.split("");
    const textCode = text.map((x, idx) => {
        let delay = (idx + 1) * 50;
        return `<span style="animation-delay: ${delay}ms">${x}</span>`;
    });
    el.innerHTML = textCode.join("");
});

function openPop() {
    const popup = document.getElementById("popupDialog");
    if (popup) {
        popup.style.visibility = "visible";
    }
}

function closePop() {
    const popup = document.getElementById("popupDialog");
    if (popup) {
        popup.style.visibility = "hidden";
    }
}

function updateBackground() {
    const scrollTop = window.scrollY;
    document.body.style.backgroundPosition =
        `center ${-(scrollTop * 0.15)}px`;
}

window.addEventListener("scroll", updateBackground, { passive:true });
window.addEventListener("load", updateBackground);
updateBackground();

const revealDistance = 1250;
const bottomReveal = document.getElementById("bottomReveal");

function updateBottomReveal() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom =
        documentHeight - (scrollTop + windowHeight);

    let progress =
        (revealDistance - distanceFromBottom) / revealDistance;

    progress = Math.max(0, Math.min(1, progress));

    bottomReveal.style.transform =
        `translate(-50%, ${100 - (progress * 100)}%)`;
}

window.addEventListener("scroll", updateBottomReveal, { passive:true });
window.addEventListener("resize", updateBottomReveal);
window.addEventListener("load", updateBottomReveal);
updateBottomReveal();

const tooltips = document.querySelectorAll('.tooltip span');

window.addEventListener("mousemove", function(e) {
    const x = (e.clientX + 20) + "px";
    const y = (e.clientY + 20) + "px";

    tooltips.forEach(function(tooltip) {
        tooltip.style.top = y;
        tooltip.style.left = x;
    });
});

const saveButton = document.getElementById("savePage");
const loadButton = document.getElementById("loadPage");

saveButton.addEventListener("click", function(e) {
    e.preventDefault();

    const currentPage = window.location.pathname;

    localStorage.setItem("storySave", currentPage);
});

loadButton.addEventListener("click", function(e) {
    e.preventDefault();

    const savedPage = localStorage.getItem("storySave");

    if (savedPage) {
        window.location.href = savedPage;
    } else {
        alert("You don't have a save yet!");
    }
});
const sidebarContainer = document.getElementById("sidebarContainer");

if (sidebarContainer) {
    sidebarContainer.innerHTML = `
        <main class="sidebar">
            <div id="popupContainer">
                <h2>LINKS:</h2>
                <a class="tooltip" href="../../about.html"><img class="icon2" width="65" src="../../images/UI/icons-info.png"><span> About A Guy Gets Revenge ! </span></a>
                <a class="tooltip"><img class="icon2" width="75" src="../../images/UI/icons-map.png"><span> Adventure Map ! </span></a>
                <a class="tooltip" href="../world.html"><img class="icon2" width="85" src="../../images/UI/icons-og.png"><span> ??? </span></a>
                <a class="tooltip" href="../../index.html"><img class="icon2" style="height:70px;" src="../../images/UI/icons-home.png"><span> Home </span></a>
                <br>
                <br>
                <br>
                <h2>CONTACT:</h2>
                <img src="../../images/UI/icon-email.png">
                thesamsankey
                @gmail.com
                <img src="../../images/UI/icon-bird.png">
                @theSamSankey
                <ws-widget type="hc" iid="8956"></ws-widget>
            </div>
        </main>
    `;
}