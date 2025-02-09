document.addEventListener("DOMContentLoaded", function () { document.querySelectorAll(".hover-image-wrapper").forEach(e => { let t = e.querySelector("img"), a = document.createElement("a"); a.href = t.src, a.download = t.src.split("/").pop(), a.classList.add("download-btn"); let o = document.createElement("img"); o.src = "download-icon.png", o.alt = "Download", o.classList.add("download-icon"), a.appendChild(o), e.appendChild(a) }) }), document.addEventListener("DOMContentLoaded", function () { let e = document.getElementById("imageSearch"), t = document.querySelectorAll(".hover-image-wrapper"); e.addEventListener("input", function () { let a = e.value.toLowerCase(); t.forEach(e => { let t = e.querySelector(".hover-image-overlay").textContent.toLowerCase(); t.includes(a) ? e.style.display = "block" : e.style.display = "none" }) }) }), document.addEventListener("DOMContentLoaded", function () { let e = document.getElementById("darkModeToggle"), t = e.querySelector("img"); e.addEventListener("click", () => { document.body.classList.toggle("dark-mode"), document.body.classList.contains("dark-mode") ? t.src = "light_mode .png" : t.src = "night-mode1 .png", console.log("Dark mode toggled. Current image:", t.src) }) }), document.addEventListener("DOMContentLoaded", function () { AOS.init(), document.querySelectorAll(".hover-image-wrapper").forEach(e => { e.setAttribute("data-aos", "flip-left"), e.setAttribute("data-aos-duration", "800"), e.setAttribute("data-aos-delay", "100") }) }), document.querySelectorAll(".hover-image-wrapper").forEach((e, t) => { e.setAttribute("data-aos", "flip-left"), e.setAttribute("data-aos-duration", "800"), e.setAttribute("data-aos-delay", `${100 * t}`) }); document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy"); // Sabhi images me lazy loading add hoga
    });
});
