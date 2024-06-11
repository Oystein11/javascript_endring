const change_h1 = document.getElementById("changed_text");
change_h1.textContent = "Denne teksten er endret med javaScript";

const new_h1 = document.createElement("h1");
new_h1.textContent = "Denne teksten og paragrafen er generert med javaScript";
new_h1.id = "my_h1";
document.getElementById("box2").append(new_h1);