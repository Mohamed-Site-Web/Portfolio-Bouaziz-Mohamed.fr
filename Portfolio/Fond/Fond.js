
const icons = document.querySelectorAll(".icon");


icons.forEach(icon => {
    icon.style.top = `${Math.random() * 100}vh`;
    icon.style.left = `${Math.random() * 100}vw`;
});

document.addEventListener("mousemove", (e) => {
    icons.forEach(icon => {
        let iconRect = icon.getBoundingClientRect();
        let iconX = iconRect.left + iconRect.width / 2;
        let iconY = iconRect.top + iconRect.height / 2;

        let deltaX = iconX - e.clientX;
        let deltaY = iconY - e.clientY;
        let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        if (distance < 100) { 
            let angle = Math.atan2(deltaY, deltaX);
            let moveX = Math.cos(angle) * 50;
            let moveY = Math.sin(angle) * 50;

            icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            icon.style.transform = "translate(0, 0)";
        }
    });
});
