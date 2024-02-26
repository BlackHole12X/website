function mostraBiografia() {
    var body = document.body;
    var bioFull = document.getElementById("bioFull");
    var button = document.querySelector("button");
  
    if (bioFull.style.display === "none" || bioFull.style.display === "") {
      bioFull.style.display = "block";
      button.innerHTML = "Mostra Meno";
    } else {
      bioFull.style.display = "none";
      button.innerHTML = "Leggi Tutto";
    }
  }