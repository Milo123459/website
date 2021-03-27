document.querySelector("button").addEventListener("click", () => {
window.open('mailto:youremailaddress@gmail.com?subject=' + document.getElementById("subject").value + &body= ' + document.getElementById("body").value );

})
