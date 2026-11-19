let cookiesAsk = document.getElementById("popupConsent");
let closeButton = document.querySelector(".close-button");
let actionButton = document.querySelector(".action-button");
let cookiesSelection = localStorage.getItem("Cookies");



if (cookiesSelection){
  popupClosing();
}

function popupClosing(){  
   cookiesAsk.remove();
}

function acceptCookies(){
  localStorage.setItem("Cookies", true);
}


closeButton.addEventListener("click", () => popupClosing());

actionButton.addEventListener("click", () => {
  
  acceptCookies();
  popupClosing();
  
  
})