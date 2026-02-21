
// FAQ OPEN / CLOSE

const faqBoxes = document.querySelectorAll(".faqbox");

faqBoxes.forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});



// EMAIL VALIDATION

const emailInput = document.querySelector(".main input");
const startBtn = document.querySelector(".btn-red");

startBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email");
    } 
    else if (!email.includes("@")) {
        alert("Please enter a valid email");
    } 
    else {
        alert("Welcome to Netflix Clone 😄");
        emailInput.value = "";
    }
});


// AUTO PLAY VIDEO (MOBILE FIX)

const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.muted = true;
    video.play().catch(() => {
        console.log("Autoplay blocked by browser");
    });
});
