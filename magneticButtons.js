const links = document.querySelectorAll(".topbar-link");
links.forEach((link) => {
    link.addEventListener("mousemove", e => {
        const position = link.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        
        link.style.transform = "translate(" + x * 0.5 + "px, " + y * 0.75 + "px)";
    })

    link.addEventListener("mouseout", (e) => {
        link.style.transform = "";
    })
})