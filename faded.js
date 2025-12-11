/* -----------------------
   정사각형 유지
------------------------ */
function setSquareBoxes() {
    const boxes = document.querySelectorAll("li.box");
    boxes.forEach(box => {
        const w = box.offsetWidth;
        box.style.height = w + "px";
    });
}
window.addEventListener("load", setSquareBoxes);
window.addEventListener("resize", setSquareBoxes);



/* -----------------------
   랜덤 Drift
------------------------ */
document.querySelectorAll(".box img").forEach(img => {
    const duration = 5 + Math.random() * 4; // 5~9초
    const delay = Math.random() * 2;        // 0~2초
    img.style.animation = `drift ${duration}s ease-in-out infinite alternate`;
    img.style.animationDelay = `${delay}s`;
});



/* -----------------------
   스크롤 흐림 + 투명해짐
------------------------ */
function fadeOnScroll() {
    const imgs = document.querySelectorAll(".box img");
    const scrollY = window.scrollY;

    const blur = Math.min(scrollY * 0.01, 4);
    const opacity = Math.max(1 - scrollY * 0.0006, 0.35);

    imgs.forEach(img => {
        img.style.filter = `blur(${blur}px) opacity(${opacity})`;
    });

    requestAnimationFrame(fadeOnScroll);
}
fadeOnScroll();



/* -----------------------
   row-gap 증가
------------------------ */
const grid = document.querySelector(".grid");

function animateRowGap() {
    const scrollY = window.scrollY;
    const gap = Math.min(scrollY * 0.15, 180);
    grid.style.rowGap = gap + "px";

    requestAnimationFrame(animateRowGap);
}
animateRowGap();


/* -----------------------
   주황색 텍스트 등장
------------------------ */
const fadeText = document.querySelector(".fade-text");

function revealTextOnScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 300) {  // 등장 기준
        fadeText.classList.add("visible");
    } else {
        fadeText.classList.remove("visible");  // 위로 올리면 다시 숨김
    }

    requestAnimationFrame(revealTextOnScroll);
}
revealTextOnScroll();
