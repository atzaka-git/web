// dynamic Scroll Buttons
const toTop = document.getElementById("toTop");
const dynMenu = document.getElementById("dynamicMenu");

window.addEventListener('scroll', () => {
    showOnScroll(300, toTop, "activeToTop");
    showOnScroll(500, dynMenu, "activeDynamicMenu");
});

function showOnScroll(scrollAmount, elemID, activeClass) {
    if (window.pageYOffset > scrollAmount) {
        elemID.classList.add(activeClass);
    } else {
        elemID.classList.remove(activeClass);
    }
}

// Send Mail via ContactForm
const contactMeForm = document.getElementById("contactMeForm");

contactMeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value;
    const mail = document.getElementById("contactMail").value;
    const phone = document.getElementById("contactPhone").value;
    const message = document.getElementById("contactMessage").value;
    
    Email.send({
        SecureToken : "744e7065-6c93-4e59-870b-208a639fe1d2",
        To : "luis.karch@web.de",
        From : "atzaka@web.de",
        Subject : "Contact me",
        Body : name + " (Phone: " + phone +"; Mail: " + mail + ") " + "wrote: \n" + message
    }).then(
      message => checkMessage(message)
    );
});

function checkMessage(message) {
    console.log(message);
    if (message == "OK") {
        console.log("Message sent!")
    }
    else {
        console.log("Failed sending message!")
    }
}

// Frog Attack
// Click on Logo to Start
const logo = document.getElementById("logo");
const audio = new Audio("media/frog.mp3");
const frogAttackDiv = document.getElementById("frogAttack");
var frogCounter = 0;

logo.addEventListener("click", frogAttack);

function frogAttack () {

    var currWidth = window.innerWidth;
    var frogDiv = document.createElement("div");

    frogDiv.className = "frog";
    frogDiv.style.left = randomIntFromInterval(0, currWidth) + "px";

    audio.play();

    frogAttackDiv.appendChild(frogDiv);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }